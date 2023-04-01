import { React, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
    const [Name, SetName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [Loading, SetLoading] = useState(false);
    const [Error, SetError] = useState(null);
    const [SearchData, SetSearchData] = useState(null)

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
            fetch('https://api.tvmaze.com/search/shows?q=' + Name)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(data => {
                    console.log(data)
                    SetSearchData(data);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error)
                    SetError(error)
                })
                .finally(() => {
                    // SetLoading(false);
                    SetName("")
                })
            navigate("/search", { state: SearchData })
        }
    })

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
                <button type="submit">Search</button>
            </form>
            {/* <Navigate to="/search" state={SearchData} /> */}
        </div>
    )
}

export default Search;