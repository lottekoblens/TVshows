import { React, useEffect, useState } from 'react';
import ComedyShows from '../modules/data/getComedyShows'

const Homepage = () => {
    const [Data, SetData] = useState([])

    useEffect(() => {
        GetAllShowData()
    }, [])

    const GetAllShowData = async () => {
        let shows = await fetch(`https://api.tvmaze.com/shows`)
        let showsJson = await shows.json();
        SetData(showsJson);
    };

    return <div className="homepage">
        <h1>TV Shows</h1>
        <div id="content">
            <ComedyShows data={Data} />
        </div>
    </div>
}

export default Homepage;