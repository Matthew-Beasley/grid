import React from 'react';

const UI = ({cells, toggleCell}) => {
  return (
    <div className="table">
      <div className="row">
        {cells[0].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored' : ''} onClick={(ev) => { toggleCell({ ev, cell, row: 0, col: idx }) }}></div> })}
      </div>
      <div className="row">
        {cells[1].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored' : ''} onClick={(ev) => { toggleCell({ ev, cell, row: 1, col: idx }) }}></div> })}
      </div>
      <div className="row">
        {cells[2].map((cell, idx) => { return <div key={idx} className={cell === true ? 'colored' : ''} onClick={(ev) => { toggleCell({ ev, cell, row: 2, col: idx }) }}></div> })}
      </div>
    </div>
  )
}

export default UI;