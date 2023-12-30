enum PostStatus {
    'FRONT',
    'POSTS',
}

export type FrontdPostMapping = {
    id?: string;
    created_at?: string;
    title?: string;
    description?: string;
    tag?: string;
    author_email?: string;
    status?: PostStatus;
};

export type PostCardProps = FrontdPostMapping;
