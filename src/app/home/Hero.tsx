import { Button } from '@/components/ui/button';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <>
            <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
                <div className='flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12'>
                    <div className='w-full lg:w-6/12'>
                        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                            Dev Medium
                        </h1>
                        <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
                            "Unlock the Power of Code - Your Gateway to
                            Developer Excellence. Dive into a World of Insights,
                            Tutorials, and Innovations. Elevate Your Skills,
                            Craft Your Masterpieces, and Connect with a Global
                            Community of Developers. Welcome to [Your Blog
                            Application Name], Where Developers Thrive."
                        </p>
                        <div className='mt-5 flex'>
                            <Button size={"lg"}>See all posts</Button> 
                            <Button className='ml-3' size={"lg"} variant={"outline"}>Register has write</Button>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12'>
                        <img
                            className='lg:block hidden w-full'
                            src='https://i.ibb.co/RjNH7QB/Rectangle-122-1.png'
                            alt='people discussing on board'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;