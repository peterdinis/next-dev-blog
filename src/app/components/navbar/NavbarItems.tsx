'use client';

import Link from 'next/link';
import { FC } from 'react';

const NavbarItems: FC = () => {
    return (
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
    );
};

export default NavbarItems;
