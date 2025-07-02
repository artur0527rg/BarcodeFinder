// src/pages/ScannerPage.js
import { useState } from "react";
import ScannerInput from "../components/ScannerInput";
import { useGroups } from "../context/GroupsContext";
import './ScannerPage.css'

function ScannerPage() {
  const { groups } = useGroups();
  const [result, setResult] = useState("No match");

  const checkNumberInGroups = (number) => {
    let foundInGroups = [];

    for (const [groupName, numbers] of Object.entries(groups)) {
      if (numbers.includes(number)) {
        foundInGroups.push(groupName);
      }
    }

    if (foundInGroups.length > 0) {
      return `Match: ${number} in ${foundInGroups.join(", ")}`;
    } else {
      return "No match";
    }
  };

  const handleScan = (number) => {
    const resultText = checkNumberInGroups(number);
    setResult(resultText);
  };

  return (
    <div className="scanner-page">
      <div className="scanner-page__container container">
        <ScannerInput onScan={handleScan} />

        <div className="scanner-page__result">{result}</div>
      </div>
    </div>
  );
}

export default ScannerPage;
