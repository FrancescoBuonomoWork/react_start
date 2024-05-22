// src/ColorList.js
import React from 'react';

function ColorList({ colors }) {
  return (
    <ul>
      {colors.map((color, index) => (
        <li className='list-item' key={index}>{color}</li>
      ))}
    </ul>
  );
}

export default ColorList;
