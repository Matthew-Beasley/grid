import React, { useState } from 'react';


function App() {

  const [cells, setCells] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

  return (
    <div className="table">
      <div className="row">
        {cells[0].map((cell, idx) => { return <div key={idx} className="box" onClick={cell === false ? setCells(true) : setCells(false)}></div> })};
      </div>
      <div className="row">
        {cells[1].map((cell, idx) => { return <div key={idx} className="box" onClick={cell === false ? setCells(true) : setCells(false)}></div> })};
      </div>
      <div className="row">
        {cells[2].map((cell, idx) => { return <div key={idx} className="box" onClick={cell === false ? setCells(true) : setCells(false)}></div> })};
      </div>
    </div>
  );
}

export default App;
