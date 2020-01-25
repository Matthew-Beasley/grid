import React, { useState } from 'react';


function App() {

  let startState = JSON.parse(localStorage.getItem("state"))

  if (startState === undefined) {
    startState = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]
  }

  const [cells, setCells] = useState(startState);

  
  const toggleCell = ({ ev, cell, row, col }) => {
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
    <div className="table"> 
      <div className="row">
        {cells[0].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored':''} onClick={(ev)=> { toggleCell({ev, cell, row: 0, col: idx}) }}></div> })}
      </div>
      <div className="row">
        {cells[1].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored' : ''} onClick={(ev) => { toggleCell({ ev, cell, row: 1, col: idx })}}></div> })}
      </div>
      <div className="row">
        {cells[2].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored' : ''} onClick={(ev) => { toggleCell({ ev, cell, row: 2, col: idx })}}></div> })}
      </div>
    </div>
  );
}

export default App;
