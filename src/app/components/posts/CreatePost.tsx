'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FC, useState } from 'react';

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
            <div>Upload PDF</div>
        </DialogTrigger>

        <DialogContent>
            abc
        </DialogContent>
    </Dialog>
    )
};

export default CreatePost;
