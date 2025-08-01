import { useState, useEffect } from 'react';
import { useAutoFocus } from '../hooks/useAutoFocus';
import './ScannerInput.css'

function ScannerInput({ onScan }) {
  const [input, setInput] = useState('');
  const [timer, setTimer] = useState(null);
  const inputRef = useAutoFocus();

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setInput(value);
    
    if (timer) clearTimeout(timer);
    
    const newTimer = setTimeout(() => {
      if (value.length > 0) {
        onScan(value);
        setInput('');
      }
    }, 200);
    setTimer(newTimer);
  };

  const preventTab = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  }

  return (
    <div className="scanner-input">
      <h3 className='scanner-input__title'>Scan your item:</h3>
      <input
        className='scanner-input__input'
        type="text"
        ref={inputRef}
        value={input}
        onChange={handleChange}
        onKeyDown={preventTab}
        placeholder="Scan barcode..."
        autoFocus
      />
    </div>
  );
}

export default ScannerInput;