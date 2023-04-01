const ComedyShows = (props) => {
    let data = props.data

    let comedies = data.filter((element) => {
        return element.genres.includes('Comedy')
    });

    const sortDataDramas = () => {
        let SortedData
        SortedData = comedies.sort((a, b) => {
            return b.rating.average - a.rating.average;
        })
        return SortedData;
    }
    let sortedComedies = sortDataDramas()
    let topComedies = sortedComedies.slice(0, 25);

    return (<div>
        <h3>The best comedy shows</h3>
        <ul className="wrapper">
            {topComedies.map((item) => (
                <a className="list-item" key={item.id} href={"/shows/" + item.id}> <li key={item.id}><img src={item.image.medium}></img><h3>{item.name}</h3></li></a>
            ))}
        </ul>
    </div >)
}

export default ComedyShows;