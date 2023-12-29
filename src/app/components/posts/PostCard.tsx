import { FC } from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { PostCardProps } from '@/types/postTypes';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const PostCard: FC<PostCardProps> = ({
    id,
    image,
    header,
    timeRead,
    imageAlt,
}: PostCardProps) => {
    return (
        <Card>
            <CardHeader>
                <img src={image} alt={imageAlt} />
                <CardTitle>{header}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <p className='text-base font-medium leading-4 underline text-gray-800'>
                        {timeRead} read{' '}
                    </p>
                    <div className='mt-4'>
                        <Link className='mt-8' href={`/post/${id}`}>
                            <Button variant={'ghost'} size={'lg'}>
                                See Detail
                                <MoveRight className='ml-4' />{' '}
                            </Button>
                        </Link>
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default PostCard;
