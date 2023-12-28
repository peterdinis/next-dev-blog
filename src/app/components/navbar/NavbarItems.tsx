'use client';

import { useUserStore } from '@/store/authStore';
import Link from 'next/link';
import { FC } from 'react';
import ProfileDropdown from '../auth/ProfileDropdown';

const NavbarItems: FC = () => {
    const user = useUserStore((state) => state.user);

    console.log(user);

    return (
        <>
            {user ? (
                <>
                    <ProfileDropdown />
                </>
            ) : (
                <>
                    <li className='text-black text-xl'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-black text-xl'>
                        <Link href='/posts'>Posts</Link>
                    </li>
                    <li className='text-black text-xl'>
                        <Link href='/login'>Login</Link>
                    </li>
                </>
            )}
        </>
    );
};

export default NavbarItems;
