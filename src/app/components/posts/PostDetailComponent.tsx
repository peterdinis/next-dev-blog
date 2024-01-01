'use client';

import { useParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import AuthorCard from './AuthorCard';
import { FrontdPostMapping } from '@/types/postTypes';
import { createBrowserClient } from '@supabase/ssr';
import { LoadingSpinner } from '../shared/Loader';

const PostDetail: FC = () => {
    const [postDetail, setPostDetail] = useState<FrontdPostMapping>({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const supabase = createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        );

        const fetchPostById = async () => {
            setLoading(true);
            try {
                const { data: post, error } = await supabase
                    .from('posts')
                    .select('*')
                    .eq('id', id)
                    .single();
                setLoading(true);
                if (error) {
                    throw error;
                }

                if (post) {
                    setLoading(false);
                    setPostDetail(post);
                }
            } catch (err) {
                console.error('Error fetching post by ID:', err);
            }
        };

        if (id) {
            fetchPostById();
        }
    }, [id]);

    console.log(postDetail);

    return (
        <>
            {loading === true && (
                <LoadingSpinner className='bg-black h-10 w-10' />
            )}
            {loading === false ? (
                <>
                    <div className='mb-4 md:mb-0 w-full mx-auto relative'>
                        <div className='px-4 lg:px-0'>
                            <h1
                                role='heading'
                                className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'
                            >
                                {postDetail.title}{' '}
                            </h1>
                        </div>

                        <img
                            src='https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                            className='w-full object-cover lg:rounded'
                            style={{
                                height: '28rem',
                            }}
                        />
                    </div>

                    <div className='flex flex-col lg:flex-row lg:space-x-12'>
                        <div className='px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4'>
                            <p className='pb-6'>{postDetail.description}</p>
                        </div>

                        <AuthorCard
                            authorEmail={
                                postDetail.author_email as unknown as string
                            }
                        />
                    </div>
                </>
            ) : null}
            <ScrollToTop smooth={true} />
        </>
    );
};

export default PostDetail;
