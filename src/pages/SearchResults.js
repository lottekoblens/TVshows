import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const SearchResults = () => {
    const redirect = useLocation();
    const data = redirect.state.foundData;

    if (data.length === 0) return (
        <div><Header />
            <div className="results"><p>We didn't find any show matching your input. Please try searching for another one!</p></div>
        </div>
    )

    return (
        <div><Header />
            <div className="results">
                <h2>Results</h2>
                <ul className="results-list">
                    {data.map((item) => (
                        <a className="list-item" key={item.show.id} href={"/shows/" + item.show.id}> <li key={item.show.id}><img width="210px" height="295px" src={item.show.image ? item.show.image.medium : "/no-image.jpg"} alt={item.show.name}></img><h3>{item.show.name}</h3></li></a>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default SearchResults;