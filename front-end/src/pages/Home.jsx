import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Casas from '../components/Casas';

function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <Casas />
                <Footer />
            </div>
        </>
    )
}

export default Home;
