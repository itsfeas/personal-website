import React, { Component } from 'react';
import DummyText from './DummyText';
// import styles from "./Block.css";

const blockStyle = (height) => ( {
  display: 'flex',
  padding: '10vh',
  'border-bottom': '3px solid #000',
  'align-items': 'flex-start',
  'min-height': height+'vh',
  'height': 'auto'
  }
)

function Block ({ height, id }) {
  return (
    <div style={ blockStyle(height) } className={"block"}>
      <div className="block-content" id={id}>
        <h1>"Section"</h1>
        <p>{DummyText}</p>
      </div>
    </div>
  );
}

export default Block;