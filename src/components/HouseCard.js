function HouseCard({ house, onDelete, onClick }) {

    //delete bot handler function
    function handleDelete(){
      onDelete(house)
    }
  
    //click bot handler function
    function handleClick(){
      onClick(house)
    }
  
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={house.id}
          onClick={handleClick}
        >
          <div className="image">
            <img alt="oh no!" src={house.picUrl} />
          </div>
          <div className="content">
            <div className="header">
              {house.name}
              <i className={botTypeClasses[bot.bot_class]} />
            </div>
            <div className="location">
                {house.location}
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
  
  export default HouseCard;
  