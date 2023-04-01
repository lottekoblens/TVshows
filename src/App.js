import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react'

import Homepage from './pages/Homepage';
import SingleShow from './pages/SingleShow';
import SearchResult from './pages/SearchResults'
const App = () => {


  return (
    <Router>
      <div id="mainDiv" >
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shows/:id" element={<SingleShow />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;