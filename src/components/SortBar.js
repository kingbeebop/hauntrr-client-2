


function SortBar( {sortByName, sortByDistance}){
    return(<div id="sort-bar">
        <h1>Sort by:</h1>
        <button onClick={sortByName}>Name</button>
        <button onClick={sortByDistance}>Distance</button>
    </div>)
}

export default SortBar