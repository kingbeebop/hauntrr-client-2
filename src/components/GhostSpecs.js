import React from "react";


function GhostSpecs({ ghost, onBack, onAdd }) {

  function handleAdd(){
    onAdd(ghost)
    //reset display after adding to army:
    onBack()
  }

  //could be put directly into code below, using handler for consistency
  function handleBack(){
    onBack()
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={ghost.picUrl}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {ghost.name}</h2>
            <p>
              <strong>Description: </strong>
              {ghost.description}
            </p>
            <br />
            {/* <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div> */}
            <button
              className="ui button fluid"
              onClick={handleBack}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={handleAdd}
            >
              Haunt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GhostSpecs;
