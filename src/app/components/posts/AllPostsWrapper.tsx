'use client';

import { FC, useState, useEffect } from 'react';

import { createBrowserClient } from '@supabase/ssr';

import Header from '../shared/Header';

import ScrollToTop from 'react-scroll-to-top';

import { FrontdPostMapping } from '@/types/postTypes';

const AllPostsWrapper: FC = () => {
    const [frontPosts, setFrontPosts] = useState<FrontdPostMapping[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFrontPosts = async () => {
            const supabase = createBrowserClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,

                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            );

            try {
                const { data, error } = await supabase

                    .from('posts')

                    .select('*');

                setLoading(true);

                if (error) {
                    setLoading(true);
                    throw error;
                }

                if (data) {
                    setLoading(false);
                    setFrontPosts(data);
                }
            } catch (error) {
                console.error('Error fetching front posts:', error);
            }
        };

        fetchFrontPosts();
    }, []);

    return (
        <>
            <Header text='All Posts' />
            <div className='rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
                <input
                    type='search'
                    name=''
                    placeholder='search for posts'
                    className='pl-4 text-sm outline-none focus:outline-none bg-transparent'
                />
            </div>
            <div className='mt-6'>
                <div className='container my-12 mx-auto px-4 md:px-12'>
                    <div className='flex flex-wrap -mx-1 lg:-mx-4'>
                        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
                            <article className='overflow-hidden rounded-lg shadow-lg'>
                                <a href='#'>
                                    <img
                                        alt='Placeholder'
                                        className='block h-auto w-full'
                                        src='https://picsum.photos/600/400/?random'
                                    />
                                </a>

                                <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                                    <h1 className='text-lg'>
                                        <a
                                            className='no-underline hover:underline text-black'
                                            href='#'
                                        >
                                            Article Title
                                        </a>
                                    </h1>
                                    <p className='text-grey-darker text-sm'>
                                        11/1/19
                                    </p>
                                </header>

                                <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
                                    <a
                                        className='flex items-center no-underline hover:underline text-black'
                                        href='#'
                                    >
                                        <img
                                            alt='Placeholder'
                                            className='block rounded-full'
                                            src='https://picsum.photos/32/32/?random'
                                        />
                                        <p className='ml-2 text-sm'>
                                            Author Name
                                        </p>
                                    </a>
                                    <a
                                        className='no-underline text-grey-darker hover:text-red-dark'
                                        href='#'
                                    >
                                        <span className='hidden'>Like</span>
                                        <i className='fa fa-heart'></i>
                                    </a>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth={true} />
        </>
    );
};

export default AllPostsWrapper;
