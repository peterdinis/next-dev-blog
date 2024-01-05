import { NextPage } from 'next';
import Hero from './components/home/Hero';
import Footer from './components/shared/Footer';

const Homepage: NextPage = () => {
    return (
        <>
            <Hero />
            <Footer />
        </>
    );
};

export default Homepage;
