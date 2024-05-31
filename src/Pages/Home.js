import Hero from '../Layout/Hero';
import Page from '../Layout/Page';
import Page2 from '../Layout/Page2';
import AnotherPage from '../Layout/AnotherPage';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Components/Navbar';
import useIntersectionObserver from '../useIntersectionObserver';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Page />
            <AnotherPage />
            <Page2 />
            <Footer />
        </>
    );
}

export default Home;