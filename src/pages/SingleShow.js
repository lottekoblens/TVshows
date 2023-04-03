import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
import Header from "../components/Header";
import striptags from "striptags";

const SingleShow = () => {
    const { id } = useParams()

    const [SingleShowData, SetSingleShowData] = useState(null)
    const [Error, SetError] = useState(null)
    const [Loading, SetLoading] = useState(true)

    useEffect(() => {
        const GetShowData = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows/' + id);
                const json = await response.json();
                SetSingleShowData(json);
            } catch (error) {
                console.log(error);
                SetError(true);
            } finally {
                SetLoading(false);
            }
        };

        GetShowData()
    }, [id])


    if (Loading) return (
        <div><Header />
            <div className="singleshow"><p>Loading...</p></div>
        </div>
    )
    if (Error) return (
        <div><Header />
            <div className="singleshow"><p>There has been an error. Check your connection and please try again!</p></div>
        </div>
    )

    return (
        <div><Header />
            <div className="singleshow">
                <div>
                    <h2>{SingleShowData.name}</h2>
                    <p>{striptags(SingleShowData.summary)}</p>
                    <p><strong>Language:</strong> {SingleShowData.language}</p>
                    <p><strong>Rating: </strong>{SingleShowData.rating.average}</p>
                    <p><strong>Status: </strong>{SingleShowData.status}</p>
                </div>
                <div>
                    <img src={SingleShowData.image ? SingleShowData.image.original : "/no-image.jpg"}
                        alt={"Cover image for " + SingleShowData.name} ></img>
                </div>
            </div>
        </div>
    )
}

export default SingleShow;