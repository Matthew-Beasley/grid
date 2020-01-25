import React, { useState } from 'react';
import UI from './UI';


function App() {

  let startState = JSON.parse(localStorage.getItem("state"));
  if (startState === undefined) {
    startState = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]
  }

  const [cells, setCells] = useState(startState);

  
  const toggleCell = ({cell, row, col }) => {
    if (cell === false) {
      cells[row][col] = true;
    }
    else {
      cells[row][col] = false;
    }
    setCells([...cells])
    localStorage.setItem('state', JSON.stringify(cells))
  }


  return (
    <UI cells={cells} toggleCell={toggleCell}/>
  );
}

export default App;
