import React, { createContext, useState, useContext, useEffect } from "react";

const BLOB_LINK = "https://jsonblob.com/api/jsonBlob/1389326233300557824";

const GroupsContext = createContext();

export const useGroups = () => useContext(GroupsContext);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Загрузка данных при монтировании
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(BLOB_LINK, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });
        const json = await response.json();
        setGroups(json);
        setIsInitialized(true);
      } catch (error) {
        console.error("Error loading groups:", error);
        setIsInitialized(true);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    
    const putData = async () => {
      try {
        await fetch(BLOB_LINK, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(groups),
        });
      } catch (error) {
        console.error("Error saving groups:", error);
      }
    };
    putData();
  }, [groups, isInitialized]);

  const addGroup = (groupName, numbers) => {
    setGroups((prev) => ({
      ...prev,
      [groupName]: numbers,
    }));
  };

  const deleteGroup = (groupName) => {
    const newGroups = { ...groups };
    delete newGroups[groupName];
    setGroups(newGroups);
  };

  const value = {
    groups,
    addGroup,
    deleteGroup,
  };

  return (
    <GroupsContext.Provider value={value}>{children}</GroupsContext.Provider>
  );
};
