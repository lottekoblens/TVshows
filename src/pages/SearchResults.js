import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const redirect = useLocation();
    const data = redirect.state.foundData;

    if (data.length === 0) return "No shows found!";

    return (
        <div>
            <h2>The best comedy shows</h2>
            <ul className="wrapper">
                {data.map((item) => (
                    <a className="list-item" key={item.show.id} href={"/shows/" + item.show.id}> <li key={item.show.id}><img src={item.show.image ? item.show.image.medium : "Loading.png"} alt={item.show.name}></img><h3>{item.show.name}</h3></li></a>
                ))}
            </ul>
        </div >
    )
}

export default SearchResults;