import React from "react";

function GhostCard({ ghost, onDelete, onClick }) {

  //delete bot handler function
  function handleDelete(){
    onDelete(ghost)
  }

  //click bot handler function
  function handleClick(){
    onClick(ghost)
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={ghost.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={ghost.picUrl} />
        </div>
        <div className="content">
          <div className="header">
            {ghost.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
        </div>
        <div className="extra content">
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDelete}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GhostCard;
