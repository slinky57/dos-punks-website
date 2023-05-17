// Tile.js
import React from 'react';
import './Tile.css';

const Tile = ({ data ='0'.repeat(128), fgColor='#000000', bgColor='#ffffff', onClick, className}) => {

  function hexToBin128(hex){
    hex = hex.replace("0x", "").toLowerCase();
    var out = "";
    for(var c of hex) {
        switch(c) {
            case '0': out += "0000"; break;
            case '1': out += "0001"; break;
            case '2': out += "0010"; break;
            case '3': out += "0011"; break;
            case '4': out += "0100"; break;
            case '5': out += "0101"; break;
            case '6': out += "0110"; break;
            case '7': out += "0111"; break;
            case '8': out += "1000"; break;
            case '9': out += "1001"; break;
            case 'a': out += "1010"; break;
            case 'b': out += "1011"; break;
            case 'c': out += "1100"; break;
            case 'd': out += "1101"; break;
            case 'e': out += "1110"; break;
            case 'f': out += "1111"; break;
            default: return "";
        }
    }
    return out.padStart(128);
  }
  
  console.log(hexToBin128('0x'))

  const d = data.length!==128 ? hexToBin128(data) : data;

  return (
    <div className= {`tile ${className}`} onClick={onClick}>
      {[...Array(16)].map((_, rowIndex) => (
        <div key={rowIndex} className="tile__row">
          {d.slice(rowIndex * 8, rowIndex * 8 + 8).split('').map((pixel, pixelIndex) => (
            <div
              key={pixelIndex}
              className={`tile__pixel tile__pixel--${pixel === '1' ? 'on' : 'off'}`}
              style={{ backgroundColor: pixel==='1' ? fgColor : bgColor}}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tile;
