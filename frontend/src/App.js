import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './menuSymbol.css';
import { AboutPage, ResumePage, PortfolioPage, LetstalkPage } from './pages/allPages';

import { useState } from 'react';





function App() {

  const [hideNav, setHideNav] = useState(true);


  return (
    <>



    <div className="App">
 
        <div className="main-container">

          {/* NAVIGATION */}

          {/* lEFT PANE - First Grid Box - For wide screens only*/}
            <div className="left-pane"> 

                <div className="nav-box center">
                    <a href="/"> About </a><br></br>
                    <a href="/resume"> Resume </a><br></br>
                    <a href="/portfolio"> Portfolio</a><br></br>
                    <a href="/letstalk"> Let's Talk </a><br></br>
                </div>

            </div>

            {/* NAV PANE MOBILE - CONTENT IN FLEXBOX - For narrow screens only*/}

      
            <div className="nav-pane-mobile">
                {/* Show or hide condition*/}

                {/* {`menu-symbol ${hideNav ? "change" : ""}`} */}
                <div className={`menu-symbol ${hideNav ? "" : "change"}`} onClick={()=> {if (hideNav){ 
                                                              setHideNav(false)
                                                            } else{
                                                              setHideNav(true)}
                                                            }}
                                                              >
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                      
                    </div> 


                  <div className={`nav-box ${hideNav ? "hide-nav-box" : ""}`}>
                  {/* <div className='nav-box'> */}
                    <a href="/"> About </a><br></br>
                    <a href="/resume"> Resume </a><br></br>
                    <a href="/portfolio"> Portfolio</a><br></br>
                    <a href="/letstalk"> Let's Talk </a><br></br>
                    </div>

            </div>




            {/* PAGE CONTENT */}

              <Router>
                <Routes>
                  <Route path="/" element={<AboutPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/letstalk" element={<LetstalkPage />} />
                </Routes>
              </Router>
          

        </div>
      
        
    </div>
    </>

  );
}

export default App;
