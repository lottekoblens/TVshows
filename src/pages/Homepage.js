import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import ComedyShows from '../modules/data/getComedyShows'
import DramaShows from '../modules/data/getDramaShows';

const Homepage = () => {
    const [Data, SetData] = useState([])

    useEffect(() => {
        GetAllShowData()
    }, [])

    // console.log(Data)

    const GetAllShowData = async () => {
        let shows = await fetch(`https://api.tvmaze.com/shows`)
        let showsJson = await shows.json();
        SetData(showsJson);
    };

    return <div><Header />
        <div className="homepage">
            <h1>Find some nice TV Shows here</h1>
            <div id="content">
                <ComedyShows data={Data} />
                <DramaShows data={Data} />
            </div>
        </div>
    </div>
}

export default Homepage;