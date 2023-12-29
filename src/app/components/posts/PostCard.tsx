import { FC } from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { PostCardProps } from '@/types/postTypes';

const PostCard: FC<PostCardProps> = ({
    id,
    image,
    header,
    timeRead,
    imageAlt,
    postCreatedDate,
}: PostCardProps) => {
    return (
        <div className='hover:scale-125 transition-all duration-500 cursor-pointer lg:mt-10'>
            {' '}
            <img src={image} alt={imageAlt} />
            <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                {header}
            </h2>
            <div className='mt-6 flex items-center cursor-pointer'>
                <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                    {timeRead}
                </p>
                <Link href={`/post/${id}`}>
                    <MoveRight />
                </Link>
            </div>
            <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                {postCreatedDate}
            </p>
        </div>
    );
};

export default PostCard;
