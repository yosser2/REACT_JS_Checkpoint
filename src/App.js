import React from 'react'
import TopNavbar from './TopNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Movies from './Movies';

function App() {
  return (
    <>
    <TopNavbar />
    <div className="cards">
    <Movies />
</div>

    </>
  )
}

export default App