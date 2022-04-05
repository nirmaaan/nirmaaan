// import logo from './logo.svg';
import './App.css';
import f1 from './static/f1.jpg'

import Nav from './componenets/nav';

function App() {

  console.log("directory", __dirname)
  return (
    <div className="App">
        <Nav />
        <img src={f1} width="500px" alt="F1" />
        
    </div>
  );
}

export default App;
