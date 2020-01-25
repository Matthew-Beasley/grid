import React, { useState } from 'react';


function App() {

  const [cells, setCells] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
  
  const toggleCell = ({ ev, cell, row, col }) => {

    if (cell === false) { //need to test on cell, not classList once cells is resetting
      ev.target.classList.add('colored')
      cells[row][col] = true;
    }
    else {
      ev.target.classList.remove('colored')
      cells[row][col] = false;
    }
    setCells([...cells])
    console.log(cells);
    console.log(cell);
  }

  return (
    <div className="table"> 
      <div className="row">
        {cells[0].map((cell, idx) => { return <div key={idx} className="box" onClick={(ev)=> { toggleCell({ev, cell, row: 0, col: idx}) }}></div> })}
      </div>
      <div className="row">
        {cells[1].map((cell, idx) => { return <div key={idx} className="box" onClick={(ev) => { toggleCell({ ev, cell, row: 1, col: idx })}}></div> })}
      </div>
      <div className="row">
        {cells[2].map((cell, idx) => { return <div key={idx} className="box" onClick={(ev) => { toggleCell({ ev, cell, row: 2, col: idx })}}></div> })}
      </div>
    </div>
  );
}

export default App;
