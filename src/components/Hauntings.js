import React from "react";
import GhostCard from "./GhostCard"

function Hauntings( { ghosts, onClick, onDelete }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {ghosts.map(ghost=>{
            return(<GhostCard
              key={ghost.id}
              ghost={ghost}
              onClick={onClick}
              onDelete={onDelete}
              />)
          })}
          {/* Current Hauntings */}
        </div>
      </div>
    </div>
  );
}

export default Hauntings;
