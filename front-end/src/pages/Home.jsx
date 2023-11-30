import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';

function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <Banner />
                <Sobre />
                <Footer />
            </div>
        </>
    )
}

export default Home;
