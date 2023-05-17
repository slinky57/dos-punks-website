// Grid.js
import React, { useState } from 'react';
import Tile from './Tile';
import './Grid.css';

const emptyCell = {
  tile:'0x'+'0'.repeat(32),
  fgColor:'#000000',
  bgColor:'#ffffff',
}

// Use the empty tile as the default value for the grid cells
const initialGridData = new Array(8).fill(null).map(() => 
  new Array(16).fill(null).map(() => ({emptyCell}))
);

const Grid = ({ selectedTile, fgColor, bgColor, isGridVisible }) => {
  const [gridData, setGridData] = useState(initialGridData);

  const handleTileClick = (rowIndex, colIndex) => {
    setGridData(prevGrid => {
      const newGrid = [...prevGrid];  // Copy the current grid state
      newGrid[rowIndex][colIndex] = { // Update the clicked cell
        tile: selectedTile, // Set the selected tile
        fgColor: fgColor, // Set the selected foreground color
        bgColor: bgColor // Set the selected background color
      };
      return newGrid; // Return the new grid state
    });
  };
   
  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid__row">
          {row.map((cell, columnIndex) => (
            <Tile
              key={`${rowIndex}-${columnIndex}`}
              data={cell.tile}
              fgColor = {cell.fgColor}
              bgColor = {cell.bgColor}
              onClick={() => handleTileClick(rowIndex, columnIndex)}
              className={isGridVisible ? 'grid-cell--border':''}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;