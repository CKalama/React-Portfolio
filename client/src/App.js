import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import About from "./pages/About"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Link } from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar  
        

      
      />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About}/> 


      
    </div>
    </Router>
  );
}

export default App;
