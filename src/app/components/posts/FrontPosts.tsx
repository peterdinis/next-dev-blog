import { FC, useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { FrontdPostMapping } from '@/types/postTypes';
import FrontPostCard from './FrontPostCard';

const FrontPosts: FC = () => {
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
        <div className='py-24 flex-col items-center justify-center px-4'>
            <h1
                role='heading'
                className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'
            >
                Our top posts
            </h1>
            <div className='2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6'>
                {frontPosts.map((item: FrontdPostMapping) => (
                    <FrontPostCard
                        id={item.id}
                        title={item.title}
                        tag={item.tag}
                    />
                ))}
            </div>
        </div>
    );
};

export default FrontPosts;
