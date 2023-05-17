// ColorInput.js
import React, { useState } from 'react';

const ColorInput = ({ onColorsSubmit, onClose }) => {
  const [inputColors, setInputColors] = useState('');

  const handleColorListSubmit = (event) => {
    event.preventDefault();
    const newColors = inputColors.split('\n');
    onColorsSubmit(newColors);
    setInputColors('');
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <form onSubmit={handleColorListSubmit}>
          <textarea value={inputColors} onChange={(e) => setInputColors(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ColorInput;
