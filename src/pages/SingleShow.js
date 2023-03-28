import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
const SingleShow = () => {
    const { id } = useParams()
    console.log(id)

    const [DataSingle, SetDataSingle] = useState([])

    useEffect(() => {
        GetShowData()
    }, [SetDataSingle])

    const GetShowData = async () => {
        let show = await fetch(`https://api.tvmaze.com/shows/` + id)
        let showJson = await show.json();
        SetDataSingle(showJson);
    };

    console.log(DataSingle.image)

    return <div className="singleshow">
        <h2>{DataSingle.name}</h2>
        <h3>{DataSingle.premiered}</h3>
        <img src={DataSingle.length > 0 ? DataSingle.image.medium : '/image.png'}></img>
    </div>
}

export default SingleShow;