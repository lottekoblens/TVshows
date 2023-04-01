const DramaShows = (props) => {
    let data = props.data

    let dramas = data.filter((element) => {
        return element.genres.includes('Drama')
    })

    const sortDataDramas = () => {
        let SortedData
        SortedData = dramas.sort((a, b) => {
            return b.rating.average - a.rating.average;
        })
        return SortedData;
    }
    let sortedDramas = sortDataDramas()
    let topDramas = sortedDramas.slice(0, 25);

    return (<div>
        <h3>The best drama shows</h3>
        <ul className="wrapper">
            {topDramas.map((item) => (
                <a className="list-item" key={item.id} href={"/shows/" + item.id}> <li key={item.id}><img src={item.image.medium}></img><h3>{item.name}</h3></li></a>
            ))}
        </ul>
    </div >)
}

export default DramaShows;