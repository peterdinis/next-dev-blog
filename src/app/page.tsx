import { NextPage } from 'next';
import Hero from './home/Hero';
import FrontBlog from './home/FrontBlog';
import Footer from './components/shared/Footer';

const Homepage: NextPage = () => {
    return (
        <>
            <Hero />
            <FrontBlog />
            <Footer />
        </>
    );
};

export default Homepage;
