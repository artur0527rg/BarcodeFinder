import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import "./GroupForm.css";

function GroupForm({ onSubmit, onCancel }) {
  const [groupName, setGroupName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupName.trim()) {
      setError("Enter the name of the group");
      return;
    }

    if (!numbers.trim()) {
      setError("Insert a list of numbers");
      return;
    }

    onSubmit(groupName, numbers);
    setGroupName("");
    setNumbers("");
    setError("");
  };

  return (
    <div className="form-container">
      <div className="form-container__header">
        <h2 className="form-container__title">Create New Group</h2>
        {onCancel && (
          <button className="form-container__cancel-button" onClick={onCancel}>
            <FiX size={24} />
          </button>
        )}
      </div>

      <form className="form-container__form" onSubmit={handleSubmit}>
        <div className="form-container__group">
          <label className="form-container__label">Group Name:</label>
          <input
            className="form-container__input"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
            placeholder="Enter the name of the group"
          />
        </div>

        <div className="form-container__group">
          <label className="form-container__label">
            Group List (use any space characters):
          </label>
          <textarea
            className="form-container__input"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            required
            rows={4}
            placeholder="Insert a list of numbers"
          />
        </div>

        {error && <div className="form-container__errors">{error}</div>}

        <div className="form-container__footer">
          <button type="submit" className="form-container__submit-button">
            Create group
          </button>
        </div>
      </form>
    </div>
  );
}

export default GroupForm;
