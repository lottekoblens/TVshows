import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react'

import Homepage from './pages/Homepage';
import SingleShow from './pages/SingleShow';
import SearchInput from './pages/Searchpage';
const App = () => {


  return (
    <Router>
      <div id="mainDiv" style={{ backgroundImage: "url('/image.png')" }}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shows/:id" element={<SingleShow />} />
          <Route path="/search" element={<SearchInput />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;