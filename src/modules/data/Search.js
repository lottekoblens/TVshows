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
        await fetch('https://api.tvmaze.com/search/shows?q=' + Name)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                foundData = data
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                SetError(error)
            })
            .finally(() => {
                SetName("")
            })
        navigate("/search", { state: { foundData } })
    }

    if (Error) return "Error!"

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    onChange={handleChange}
                    value={Name}
                    className="input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}

export default Search;