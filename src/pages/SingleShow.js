import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
const SingleShow = () => {
    const { id } = useParams()

    const [DataSingle, SetDataSingle] = useState([])

    useEffect(() => {
        GetShowData()
    }, [SetDataSingle])

    const GetShowData = async () => {
        let show = await fetch(`https://api.tvmaze.com/shows/` + id)
        let showJson = await show.json();
        SetDataSingle(showJson);
    };

    return <div className="singleshow">
        <h2>{DataSingle.name}</h2>
        <h3>{DataSingle.premiered}</h3>
        <img src={DataSingle.image !== undefined ? DataSingle.image.medium : '/image.png'}
            alt={"Cover image for " + DataSingle.name} ></img>
    </div>
}

export default SingleShow;