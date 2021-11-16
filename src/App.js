import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Methodist from "./methodist/Methodist"
import Page from "./methodist/Page"
import './assets/styles/normalize.css'
import './assets/styles/index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes >
          <Route exact path="/" element={<Methodist/>} />
          <Route path="/*" element={<Page/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
