'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import PostCard from './PostCard';

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

            <div className='mt-6'>
                <div className='flex-col items-center justify-center  px-4'>
                    <div className='2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6'>
                        <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                        </div>
                        <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                        </div>
                        <div className='flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto'>
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                            <PostCard
                                image={'https://picsum.photos/200/300'}
                                imageAlt={'t'}
                                header={'t'}
                                timeRead={'3min'}
                                postCreatedDate={'t'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth={true} />
        </>
    );
};

export default AllPostsWrapper;
