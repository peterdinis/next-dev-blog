'use client';

import { FC, useState, useEffect } from 'react';

import { createBrowserClient } from '@supabase/ssr';

import Header from '../shared/Header';

import ScrollToTop from 'react-scroll-to-top';

import { FrontdPostMapping } from '@/types/postTypes';

import FrontPostCard from './FrontPostCard';

const AllPostsWrapper: FC = () => {
    const [frontPosts, setFrontPosts] = useState<FrontdPostMapping[]>([]);

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

                if (error) {
                    throw error;
                }

                if (data) {
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
                        <Header text='All Posts' />           {' '}
            <div className='rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
                               {' '}
                <input
                    type='search'
                    name=''
                    placeholder='search for posts'
                    className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
                />
                           {' '}
            </div>
                       {' '}
            <div className='mt-6'>
                               {' '}
                <div className='flex-col items-center justify-center  px-4'>
                                       {' '}
                    <div className='2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6'>
                                               {' '}
                        {frontPosts &&
                            frontPosts.map((item: FrontdPostMapping) => (
                                <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                                                                       {' '}
                                    <FrontPostCard
                                        id={item.id}
                                        title={item.title}
                                        tag={item.tag}
                                    />
                                                                   {' '}
                                </div>
                            ))}
                                           {' '}
                    </div>
                                   {' '}
                </div>
                           {' '}
            </div>
                        <ScrollToTop smooth={true} />       {' '}
        </>
    );
};

export default AllPostsWrapper;
