import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import ComedyShows from './modules/data/getComedyShows';

const App = () => {
  const [Data, SetData] = useState([])

  useEffect(() => {
    GetAllShowData()
  }, [])

  const GetAllShowData = async () => {
    let shows = await fetch(`https://api.tvmaze.com/shows`)
    let showsJson = await shows.json();
    SetData(showsJson);
  };

  // const HighestRating = async () => {
  //   let array = []

  //   let data = await GetAllShowData()
  //   data.forEach(element => {
  //     array.push(element.rating.average)
  //   })

  //   return array.sort(function (a, b) {
  //     return a - b
  //   })
  // }

  // let highest_rating = HighestRating()
  // console.log(highest_rating)


  return (<div>
    <h1>React app</h1>
    <ComedyShows data={Data} />
  </div>
  )
}

export default App;


// data2.then(iets => { console.log(iets[0].genres) })