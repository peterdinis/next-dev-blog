import { NextPage } from 'next';
import Hero from './home/Hero';
import FrontBlog from './home/FrontBlog';

const Homepage: NextPage = () => {
    return (
       <>
        <Hero />
        <FrontBlog />
       </>
    )
};

export default Homepage;
