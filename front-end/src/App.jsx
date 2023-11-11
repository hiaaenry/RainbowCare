import './App.css';

import Header from './components/surfaces/Header';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Footer from './components/surfaces/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Sobre />
      <Footer />
    </div>
  )
}

export default App;
