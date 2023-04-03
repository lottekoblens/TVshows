import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import CategorisedShows from '../modules/data/ShowsForCategory'

const Homepage = () => {
    const [Data, SetData] = useState(null)
    const [Loading, SetLoading] = useState(true);
    const [Error, SetError] = useState(null);

    useEffect(() => {
        const GetAllShowData = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows');
                const json = await response.json();
                SetData(json);
            } catch (error) {
                SetError(true)
            } finally {
                SetLoading(false);
            }
        };

        GetAllShowData()
    }, [])

    if (Loading) return (
        <div><Header />
            <div className="homepage"><p>Loading...</p></div>
        </div>
    )
    if (Error) return (
        <div><Header />
            <div className="homepage"><p>There has been an error. Check your connection and please try again!</p></div>
        </div>
    )

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