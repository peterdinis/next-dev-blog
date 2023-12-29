'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { FC, useState } from 'react';
import PostEditor from './PostEditor';

const CreatePost: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v) => {
                if (!v) {
                    setIsOpen(v);
                }
            }}
        >
            <DialogTrigger
                onClick={() => {
                    setIsOpen(true);
                }}
                asChild
            >
                <Button variant={'ghost'} size='lg'>
                    Create new post
                </Button>
            </DialogTrigger>

            <DialogContent>
                <h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl'>
                    Add new post
                </h1>
                <div className='mt-6'>
                    <Input type="text" placeholder='Post title' />
                    <div className='mt-3'>
                        <PostEditor />
                    </div>
                    <div className='mt-3'>
                    <Input type="text" placeholder='Post tag' />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePost;
