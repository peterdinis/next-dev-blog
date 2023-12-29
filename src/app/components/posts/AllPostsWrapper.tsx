'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';

const AllPostsWrapper: FC = () => {
    return (
        <>
            <Header text='All Posts' />
            <div className='rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
                <input
                    type='search'
                    name=''
                    placeholder='search for posts'
                    className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
                />
            </div>

            <div className='mt-6'></div>
            <ScrollToTop smooth={true} />
        </>
    );
};

export default AllPostsWrapper;
