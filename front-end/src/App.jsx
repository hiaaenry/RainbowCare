import './App.css';

import Header from './layout/Header';
import Home from './components/home/Home';
import Sobre from './components/home/Sobre';
import Footer from './layout/Footer';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Sobre />
      <Footer /> 
      {/*<Login/>*/}
    </div>
  )
}

export default App;
