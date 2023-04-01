const CategorisedShows = (props) => {
    let data = props.data
    let category = props.Category

    let shows = data.filter((element) => {
        return element.genres.includes(category)
    });

    const sortDataDramas = () => {
        let SortedData
        SortedData = shows.sort((a, b) => {
            return b.rating.average - a.rating.average;
        })
        return SortedData;
    }
    let sortedShows = sortDataDramas()
    let topShowsForCategory = sortedShows.slice(0, 25);

    return (<div>
        <h3>Top 25 {category} shows</h3>
        <ul className="wrapper">
            {topShowsForCategory.map((item) => (
                <a className="list-item" key={item.id} href={"/shows/" + item.id}> <li key={item.id}><img src={item.image.medium} alt={"Cover image for " + item.name}></img><h3>{item.name}</h3></li></a>
            ))}
        </ul>
    </div >)
}

export default CategorisedShows;