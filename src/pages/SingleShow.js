import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
const SingleShow = () => {
    const { id } = useParams()

    const [SingleShowData, SetSingleShowData] = useState([])

    useEffect(() => {
        const GetShowData = async () => {
            let show = await fetch(`https://api.tvmaze.com/shows/` + id)
            let showJson = await show.json();
            SetSingleShowData(showJson);
        };

        GetShowData()
    }, [id])

    console.log(SingleShowData)

    return <div className="singleshow">
        <h2>{SingleShowData.name}</h2>
        <h3>{SingleShowData.premiered}</h3>
        <img src={SingleShowData.image !== undefined ? SingleShowData.image.medium : '/image.png'}
            alt={"Cover image for " + SingleShowData.name} ></img>
    </div>
}

export default SingleShow;