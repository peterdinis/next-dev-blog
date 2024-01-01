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
import { Badge } from '@/components/ui/badge';

const FrontPostCard: FC<PostCardProps> = ({
    id,
    title,
    tag,
}: PostCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <Badge variant={'default'}>{tag}</Badge>
                    <div className='mt-4'>
                        <Link className='mt-8' href={`/posts/${id}`}>
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

export default FrontPostCard;
