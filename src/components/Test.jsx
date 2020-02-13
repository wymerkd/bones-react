import React from 'react';
import Header from './Header';

function Test(){
  var testStyle = {
    backgroundColor: 'green',
    height: '1400px',
    backgroundSize: 'cover'
  }
  return(
    <div style={testStyle}>
      <Header/>
      <div>
        <h1>Mic Check</h1>
      </div>
    </div>
  );
}

export default Test;
