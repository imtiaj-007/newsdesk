import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import About from './components/About';
import ModeState from './context/ModeState';
import NewsState from './context/NewsSate';


function App() {
  return (
    <>
      <ModeState>
      <NewsState>
          <Router>
              <Navbar />
              <Routes>
                  <Route exact path={"/"} element={<NewsContainer />} />
                  <Route exact path={"/home"} element={<NewsContainer />} />
                  <Route exact path={"/about"} element={<About />} />

              </Routes>
          </Router>
      </NewsState>
      </ModeState>
    </>
  );
}

export default App;
