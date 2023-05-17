// ColorPalette.js
import React from 'react';
import './Palette.css';

const ColorPalette = ({ colors, onColorSelect, onClose }) => {

  const ncols=8;
  const vw = 70
  const vh = vw*Math.ceil((colors.length)/ncols)/2.5;
  const gridStyle = {
    gridTemplateColumns: `repeat(${ncols},1fr)`,
    width: `${vw}vw`,
    height: `${vh}vh`
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // This will prevent the click event from reaching the overlay
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <div className="palette__grid" style={gridStyle}>
        {colors.map((color, index) => (
          <div
            key={index}
            onMouseDown={(e) => onColorSelect(color, e.button)}
            onContextMenu={(e) => e.preventDefault()}
            style={{ backgroundColor: `#${color}`, border: '1px solid' }}
            >
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;