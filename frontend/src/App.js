import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { AboutPage, ResumePage, PortfolioPage, LetstalkPage } from './pages/allPages';



function App() {

  console.log("directory", __dirname)
  return (
    <div className="App">
 
        {/* <AboutPage /> */}
        <Router>

        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/letstalk" element={<LetstalkPage />} />
        </Routes>

        </Router>
    
        
    </div>
  );
}

export default App;
