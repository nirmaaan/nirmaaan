import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { AboutPage, ResumePage, PortfolioPage, LetstalkPage } from './pages/allPages';





function App() {
  
  // console.log('refreshed')


  return (
    <>



    <div className="App">
 
        <div className="main-container">

          {/* lEFT PANE - First Grid Box*/}
            <div className="left-pane"> 

                <div className="nav-box">
                    <a href="/"> About </a><br></br>
                    <a href="/resume"> Resume </a><br></br>
                    <a href="/portfolio"> Portfolio</a><br></br>
                    <a href="/letstalk"> Let's Talk </a><br></br>
                </div>

            </div>


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
