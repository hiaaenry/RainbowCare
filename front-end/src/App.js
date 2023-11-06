import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';

function App() {
  return (
    <div className="App">
       <Header />
       <Home />
       <Sobre />
    </div>
  )
}

export default App;
