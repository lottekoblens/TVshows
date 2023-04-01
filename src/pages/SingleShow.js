import { useParams } from "react-router-dom"
import { React, useEffect, useState } from 'react';
import Header from "../components/Header";
import striptags from "striptags";
const SingleShow = () => {
    const { id } = useParams()

    const [SingleShowData, SetSingleShowData] = useState(null)
    const [Error, SetError] = useState(null)
    const [Loading, SetLoading] = useState(true)

    const GetShowData = async () => {
        fetch('https://api.tvmaze.com/shows/' + id)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                console.log(data)
                SetSingleShowData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                SetError(error)
            })
            .finally(() => {
                SetLoading(false);
            })
    };

    useEffect(() => {
        GetShowData()
    }, [id])

    if (Loading) return "Loading..."
    if (Error) return "Error!"

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