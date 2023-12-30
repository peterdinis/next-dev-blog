import { FC } from 'react';
import PostCard from './PostCard';
import { createClient } from '@supabase/supabase-js';

const FrontPosts: FC = async () => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    
let { data: posts, error } = await supabase
.from('posts')
.select('*')
        
console.log(posts);

    return (
        <div className='py-24 flex-col items-center justify-center  px-4'>
            <h1
                role='heading'
                className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'
            >
                Our top posts
            </h1>
            <div className='2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6'>
                <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                </div>
                <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                </div>
                <div className='flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto'>
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                    <PostCard imageAlt={'t'} header={'t'} timeRead={'3min'} />
                </div>
            </div>
        </div>
    );
};

export default FrontPosts;
