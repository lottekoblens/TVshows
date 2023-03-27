import { useEffect, useState } from "react";

// const getComedy = async () => {
//     let shows = await fetch(`https://api.tvmaze.com/shows`)
//     let showsJson = await shows.json();
//     return showsJson;
// };

// function GetNamesFromData(props) {
//     // let array = []
//     props.data.forEach(element => {
//         console.log(element.name)
//     });
//     // return array
// }

const ComedyShows = (props) => {
    // const [Names, SetNames] = useState([])

    // SetNames(GetNamesFromData(props))

    return (<div>
        <ul>
            {props.data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>)
}

export default ComedyShows;