import React from "react";
import BotCard from "./GhostCard"

function GhostCollection({ ghosts, onDelete, onClick }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {ghosts.map(ghost=>{
          return(<GhostCard
            key={ghost.id}
            ghost={ghost}
            onDelete={onDelete}
            onClick={onClick}
            />)
        })}
        {/* Collection of all bots */}
      </div>
    </div>
  );
}

export default GhostCollection;
