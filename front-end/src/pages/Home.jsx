import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';
import Acolhimento from '../components/Acolhimento';
import Contato from '../components/Contato';

function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <Banner />
                <Sobre />
                <Acolhimento />
                <Contato />
                <Footer />
            </div>
        </>
    )
}

export default Home;
