import { useState } from "react";
import GroupForm from "../components/GroupForm";
import GroupList from "../components/GroupList";
import { FiPlus } from "react-icons/fi";
import { useGroups } from "../context/GroupsContext";
import "./GroupsPage.css";

function GroupsPage() {
  const { groups, addGroup, deleteGroup } = useGroups();
  const [addingGroup, setAddingGroup] = useState(false);

  

  const handleSumbit = (groupName, numbersString) => {
    const regex = /[\w_]+/gi;
    const matches = numbersString.match(regex);
    if (matches) {
      addGroup(groupName, matches)
    }
  };

  return (
    <div className="groups-page">
      <div className="container">
        {addingGroup ? (
          <GroupForm
            onSubmit={handleSumbit}
            onCancel={() => setAddingGroup(false)}
          />
        ) : (
          <div className="groups-page__buttons">
            <button
              onClick={() => setAddingGroup(true)}
              className="groups-page__add-button"
            >
              <FiPlus /> <span>Add</span>
            </button>
          </div>
        )}
        <hr />
        <GroupList groups={groups} onDelete={deleteGroup} />
      </div>
    </div>
  );
}

export default GroupsPage;
