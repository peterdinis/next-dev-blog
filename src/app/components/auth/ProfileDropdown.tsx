import React, { FC } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DashboardIcon, LockOpen1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { createBrowserClient } from '@supabase/ssr';
import { useUserStore } from '@/store/authStore';

const ProfileDropdown: FC = () => {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };
    const isAdmin = user?.role === 'admin';

    return (
        <Popover>
            <PopoverTrigger>
                <Image
                    src={user?.image_url!}
                    width={50}
                    height={50}
                    alt='Image'
                    className='rounded-full ring-2 ring-green-500'
                />
            </PopoverTrigger>
            <PopoverContent className='space-y-3 divide-y p-2' side='bottom'>
                <div className='px-4'>
                    <p className='text-sm'>{user?.display_name}</p>
                    <p className='text-sm text-gray-500'>{user?.email}</p>
                </div>

                {isAdmin && (
                    <Link href='/dashboard'>
                        <Button
                            variant='ghost'
                            className='w-full flex justify-between items-center'
                        >
                            Dashboard <DashboardIcon />
                        </Button>
                    </Link>
                )}

                <Button
                    variant='ghost'
                    className='w-full flex justify-between items-center'
                    onClick={handleLogout}
                >
                    Log out <LockOpen1Icon />
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default ProfileDropdown;
