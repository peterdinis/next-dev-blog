'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { FC, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import PostEditor from './PostEditor';
import { Label } from '@/components/ui/label';

const CreatePost: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toast } = useToast();

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
                    <Input type='text' placeholder='Post title' />
                    <div className='mt-3'>
                        <Label>Post Description</Label>
                        <PostEditor />
                    </div>
                    <div className='mt-3'>
                        <Input type='text' placeholder='Post tag' />
                    </div>
                    <div className='mt-3'>
                        <Input type='text' placeholder='Post Created' />
                    </div>
                    <div className='p-2 mt-6'>
                        <Button size='lg' variant='default'>
                            Create new post
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePost;
