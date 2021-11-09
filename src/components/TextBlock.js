import React from 'react';
import DummyText from './DummyText';
import blockStyle from './Block';

function TextBlock({ height, id }) {
  return (
    <div style={blockStyle(height)} className={"block"}>
      <div className="block-content" id={"text-block" + id}>
        <h1>"Section"</h1>
        <p>{DummyText}</p>
      </div>
    </div>
  );
}

export default TextBlock;