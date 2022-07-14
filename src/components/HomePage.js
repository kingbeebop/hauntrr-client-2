import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom'
import GhostPage from './GhostPage'
import HouseCard from './HouseCard'

function HomePage(){

    const [houses, setHouses] = useState([])
    const [currentHouse, setCurrentHouse] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http")
        .then(res=>res.json)
        .then(data=>setHouses(data))
    },[])

    function onHouseClick(house){
        setCurrentHouse(house)
        navigate("/ghosts")
    }

    return(
        <div>
            <Route exact path="/">
            {houses.map(house=>{
          return(<HouseCard
            key={house.id}
            house={house}
            ghosts={house.ghosts}
            onDelete={onDelete}
            onClick={onHouseClick}
            />)
        })}</Route>

        <Route path="/ghosts">
            <GhostPage
                house = {currentHouse}
            />
        </Route>
        </div>
    )
}

export default HomePage