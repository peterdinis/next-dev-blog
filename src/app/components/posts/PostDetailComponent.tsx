"use client"

import { useParams } from 'next/navigation';
import { FC } from 'react';

const PostDetail: FC = () => {
    const {id} = useParams();

    return (
        <>
            DETAIL
        </>
    )
};

export default PostDetail;
