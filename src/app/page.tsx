import { NextPage } from 'next';
import Hero from './home/Hero';
import Footer from './components/shared/Footer';
import FrontPosts from './components/posts/FrontPosts';

const Homepage: NextPage = () => {
    return (
        <>
            <Hero />
            <FrontPosts />
            <Footer />
        </>
    );
};

export default Homepage;
