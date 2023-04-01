import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import CategorisedShows from '../modules/data/ShowsForCategory'

const Homepage = () => {
    const [Data, SetData] = useState(null)
    const [Loading, SetLoading] = useState(true);
    const [Error, SetError] = useState(null);

    useEffect(() => {
        GetAllShowData()
    }, [])

    const GetAllShowData = async () => {
        fetch('https://api.tvmaze.com/shows')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                SetData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                SetError(error)
            })
            .finally(() => {
                SetLoading(false);
            })
    };

    if (Loading) return "Loading...";
    if (Error) return "Error!";

    return <div><Header />
        <div className="homepage">
            <h1>Our top rated tv shows</h1>
            <div id="content">
                <CategorisedShows data={Data} Category="Comedy" />
                <CategorisedShows data={Data} Category="Drama" />
                <CategorisedShows data={Data} Category="Action" />
            </div>
        </div>
    </div>
}

export default Homepage;