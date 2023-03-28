import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useEffect, useState } from 'react'

import Homepage from './pages/Homepage';
import SingleShow from './pages/SingleShow';

const App = () => {
  // const [Data, SetData] = useState([])

  // useEffect(() => {
  //   GetAllShowData()
  // }, [])

  // const GetAllShowData = async () => {
  //   let shows = await fetch(`https://api.tvmaze.com/shows`)
  //   let showsJson = await shows.json();
  //   SetData(showsJson);
  // };

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


  return (
    <Router>
      <div id="mainDiv" style={{ backgroundImage: "url('/image.png')" }}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shows/:id" element={<SingleShow />} />

        </Routes>
        {/* <div id="content">
          <h1>TV shows</h1>
          <ComedyShows data={Data} />
        </div> */}
      </div>
    </Router>
  )
}

export default App;


// data2.then(iets => { console.log(iets[0].genres) })