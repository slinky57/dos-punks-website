// Palette.js
import React, { useState } from 'react';
import Tile from './Tile';
import './Palette.css';

const Palette = ({ tiles, onTileSelect, onClose }) => {
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tile) => {
    setSelectedTile(tile);
    onTileSelect(tile);
  };

  const ncols=8;
  const vw = 70
  const vh = vw*Math.ceil((tiles.length)/ncols)/2.5;
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
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(tile)}
            className={`palette__tile ${selectedTile === tile ? 'palette__tile--selected' : ''}`}
            >
            <Tile data={tile} fgColor={'#000000'} bgColor = {'#ffffff'} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Palette;
