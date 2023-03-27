const ComedyShows = (props) => {
    return (<div>
        <ul>
            {props.data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>)
}

export default ComedyShows;