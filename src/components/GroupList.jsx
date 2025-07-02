import ItemsList from "./ItemsList";
import { FiTrash2 } from "react-icons/fi";
import "./GroupList.css";

function GroupList({ groups, onDelete }) {
  return (
    <div className="groups">
      <ul className="groups__group-ul">
        {Object.entries(groups).map(([groupName, numbers]) => (
          <li key={groupName} className="groups__group-li">
            <div className="groups__header">
              <h4 className="groups__group">{groupName}</h4>
              <button
                className="groups__delete-button"
                onClick={() => onDelete(groupName)}
                title="Delete group"
              >
                <FiTrash2 />
              </button>
            </div>
            <ItemsList numbers={numbers} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
