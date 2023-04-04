import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [Name, SetName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [Error, SetError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(true)
    }

    const handleChange = (event) => {
        setIsSubmitted(false)
        SetName(event.target.value)
    }

    useEffect(() => {
        if (isSubmitted && Name.length > 0) {
            fetchSearchedShow()
        }
    })

    const fetchSearchedShow = async () => {
        let foundData
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=' + Name)
            const json = await response.json();
            foundData = json;
        } catch (error) {
            SetError(true);
        } finally {
            SetName("");
        }
        navigate("/search", { state: { foundData } })
    };

    if (Error) return (
        <div><p>An error occured.</p></div>
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    onChange={handleChange}
                    value={Name}
                    className="input"
                />
                <button type="submit" data-testid="searchButton" className="search-button">Search</button>
            </form>
        </div>
    )
}

export default Search;