import './App.css';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <Sobre />
    </div>
  )
}

export default App;
