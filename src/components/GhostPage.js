import React, { useState, useEffect } from "react";
import Hauntings from "./Hauntings";
import GhostCollection from "./GhostCollection";
import GhostSpecs from "./GhostSpecs"
import SortBar from "./SortBar"
// import FilterBar from "./FilterBar"

function GhostPage({ house }) {
  ////start here with your code for step one
  //declare state variables for bots and army

  const [haunting, setHaunting] = useState(house.ghosts)
  const [ghosts, setGhosts] = useState([])

  //state for storing selected bot
  const [selectedGhost, setSelectedGhost] = useState([])

  useEffect(()=>{

    fetch('http://localhost:9292/ghosts')
    .then(res=>res.json)
    .then(data=>setGhosts(data))
  },[])

  // use effect to load bot data into bots on render
  // useEffect(()=>{
  //   fetch('http://localhost:9292/ghosts')
  //   .then(res=>res.json())
  //   .then(data=>setGhosts(data))
  // },[])

  //delete passed bot object from database
  //then update bots and army states to remove said naughty bot and rerender page
  function handleDelete(badGhost){
    fetch(`http://localhost:9292/ghosts/${badGhost.id}`,
    {method: "DELETE"})
    .then(()=>{
      //update bots
      setGhosts(ghosts.filter(ghost=>
        {if(badGhost.id === ghost.id)
          {return false}
        return true}))
      //update army
      setHaunting(haunting.filter(ghost=>
        {if(badGhost.id === ghost.id)
          {return false}
        return true}))
    })
    }

  function handleAddHaunting(ghost){

    //kind of a patchwork solution, could be cleaned up to remove
    //neccessity for redunant variable, but I wanted to keep original
    //code intact and seemed like the fastest solution in the moment

    if(!haunting.includes(ghost)){
      setHaunting([...haunting, ghost])

      //advanced deliverable "remove from bots" when added to army
      //in this case, the above if statement is unneccessary
      //left in to demonstate how to do core deliverable
      setGhosts(ghosts.filter(badGhost=>{
        if(badGhost.id === ghost.id){
          return false
        }
        return true
      }
      ))
  }
  }

  function handleRemoveHaunting(badGhost){

    //advanced deliverable:
    setGhosts([...ghosts, badGhost])

    //core deliverable:
    setHaunting(haunting.filter(ghost=>{
      if(badGhost.id === ghost.id){
        return false
      }
      return true
    }))
  }

  function handleSelect(ghost){
    setSelectedGhost([ ghost ])
  }

  function handleClearSelection(){
    setSelectedGhost([])
  }

  //sort bar handler functions
  //todo: would be nice if equal-value bots didn't flip-flop on redundant sorts

  function sortByName(){
    setGhosts([...ghosts].sort((a, b) => (a.name > b.name) ? 1 : -1))
  }

  function sortByDistance(){
    setGhosts([...ghosts].sort((a, b) => (a.distance > b.distance) ? 1 : -1))
  }


  return (
    <div>
      <Hauntings
      ghosts={haunting}
      onDelete={handleRemoveHaunting}
      onClick={handleRemoveHaunting}/>

      <SortBar
      sortByName={sortByName}
      sortByDistance={sortByDistance}/>

      {/* <FilterBar onFilter={handleFilter} /> */}

      {(selectedGhost.length === 1)?
        <GhostSpecs ghost={selectedGhost[0]} onBack={handleClearSelection} onAdd={handleAddHaunting}/>:
        <GhostCollection ghosts={ghosts} onDelete={handleDelete} onClick={handleSelect}/>
      }
    </div>
  )
}

export default GhostPage;
