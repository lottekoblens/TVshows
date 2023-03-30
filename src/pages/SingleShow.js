import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
import striptags from "striptags";
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

    // console.log(SingleShowData)

    return SingleShowData.image ?
        <div className="singleshow">
            <div>
                <a className="back-button" href="/">Back</a>
            </div>
            <div>
                <h2>{SingleShowData.name}</h2>
                <img src={SingleShowData.image.original}
                    alt={"Cover image for " + SingleShowData.name} ></img>
                <p>{striptags(SingleShowData.summary)}</p>
                <p>{SingleShowData.name} is spoken in {SingleShowData.language}</p>
            </div>
        </div>
        : <div><h2>Loading...</h2></div>
}

export default SingleShow;