import './App.css';

import Header from './components/Header';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Footer from './components/Footer';

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
