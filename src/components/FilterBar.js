//first pass attempt on a filter component
//probably a better way to generate this using a map function to create
//the buttons, would need to think about it a bit more

function FilterBar({ onFilter }){

    function handleFilter(e){
        console.log(e.target.name)
        onFilter(e.target.name)
    }

    return(
    <div id="filter-bar">
        <h1>Filters:</h1>
        <button onClick={handleFilter} name="support" >Support</button>
        <button onClick={handleFilter} name="medic" >Medic</button>
        <button onClick={handleFilter} name="assault" >Assault</button>
        <button onClick={handleFilter} name="defender">Defender</button>
        <button onClick={handleFilter} name="captain">Captain</button>
        <button onClick={handleFilter} name="witch" >Witch</button>
    </div>
    )
}

export default FilterBar