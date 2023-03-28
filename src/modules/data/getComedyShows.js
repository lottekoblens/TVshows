const ComedyShows = (props) => {
    let data = props.data

    let comedies = data.filter(function (element) {
        return element.genres.includes('Comedy')
    });

    const topComedies = comedies.slice(0, 25);
    console.log(topComedies)

    let dramas = data.filter(function (element) {
        return element.genres.includes('Drama')
    })

    function sortDataDramas() {
        let SortedData
        SortedData = dramas.sort(function (a, b) {
            return b.rating.average - a.rating.average;
        })
        console.log(SortedData)
        return SortedData;
    }
    let sortedDramas = sortDataDramas()

    const topDramas = sortedDramas.slice(0, 25);


    return (<div>
        <h2>The best comedy shows</h2>
        <ul className="wrapper">
            {topComedies.map((item) => (
                <a className="list-item" key={item.id} href={"/shows/" + item.id}> <li key={item.id}><img src={item.image.medium}></img><h3>{item.name}</h3></li></a>
            ))}
        </ul>
        <h2>The best drama shows</h2>
        <ul className="wrapper">
            {topDramas.map((item) => (
                <a className="list-item" key={item.id} href={"/shows/" + item.id}> <li key={item.id}><img src={item.image.medium}></img><h3>{item.name}</h3></li></a>
            ))}
        </ul>
    </div >)
}

export default ComedyShows;