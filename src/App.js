// App.js
import React, { useState } from 'react';
import Grid from './Grid';
import Palette from './Palette';
import ColorPalette from './ColorPalette';
import tiles from './Tiles';
import Tile from './Tile';
import ColorInput from './ColorInput';
import './App.css';

const App = () => {
  const [selectedTile, setSelectedTile] = useState('0x7e81a58181bd9981817e00000000');
  const [fgColor, setFgColor] = useState('black');
  const [bgColor, setBgColor] = useState('white');
  const [isPaletteVisible, setIsPaletteVisible] = useState(false);
  const [isColorInputVisible, setIsColorInputVisible] = useState(false);
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [colors,setColors] = useState([
    'FF00FF',
    '00FFFF',
    'FF0000',
    '00FF00',
    'FFFF00',
    '0000FF',
    '000000',
    'ffffff'
  ]);

  const handlePaletteTileClick = (tile) => {
    setSelectedTile(tile);
  };

  const handleColorPaletteClick = (color, button) => {
    if (button === 0) {
      setFgColor('#'+color);
    }
    if (button === 2) {
      setBgColor('#'+color);
    }
  }

  const togglePalette = () => {
    setIsPaletteVisible(!isPaletteVisible);
  };

  const toggleColorPalette = () => {
    setIsColorPaletteVisible(!isColorPaletteVisible);
  };
  
  const handleColorListSubmit = (newColors) => {
    setColors(oldColors => [...oldColors, ...newColors]);
  };

  const toggleColorInput = () => {
    setIsColorInputVisible(!isColorInputVisible);
  };

  const toggleGrid = () => {
    setIsGridVisible(!isGridVisible);
  };
  

  return (
    <div className="app">
      <div className="main-container">
        <div className="button-container">
          <button onClick={togglePalette}>{'Tile Palette'}</button>
          <button onClick={toggleColorPalette}>Color Palette</button>
          <button onClick={toggleColorInput}>Add Color</button>
          <button onClick={toggleGrid}>{isGridVisible ? 'Hide Grid' : 'Show Grid'}</button>
          <div style={{width:'150px', height:`300px`}}>
            <Tile data={selectedTile} bgColor={bgColor} fgColor={fgColor} />
          </div>
        </div>
        <Grid selectedTile={selectedTile} fgColor={fgColor} bgColor={bgColor} isGridVisible={isGridVisible}/>
      </div>
      {isPaletteVisible && <Palette tiles={tiles} onTileSelect={handlePaletteTileClick} onClose={togglePalette} />}
      {isColorPaletteVisible && <ColorPalette colors={colors} onColorSelect={handleColorPaletteClick} onClose={toggleColorPalette} />}
      {isColorInputVisible && <ColorInput onColorsSubmit={handleColorListSubmit} onClose={toggleColorInput} />}
    </div>
  );
};

export default App;