import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import ComedyShows from '../modules/data/getComedyShows'
import DramaShows from '../modules/data/getDramaShows';

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
                console.log(data)
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
            <h1>Find some nice TV Shows here</h1>
            <div id="content">
                <ComedyShows data={Data} />
                <DramaShows data={Data} />
            </div>
        </div>
    </div>
}

export default Homepage;