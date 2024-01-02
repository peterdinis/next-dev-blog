'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { FC } from 'react';

const NavbarItems: FC = async () => {
    const supabase = createClientComponentClient();

    const { data } = await supabase.auth.getUser();
    
    return (
        <>
            {!data?.user ? (
                <>
                    <li className='text-black text-xl'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-black text-xl'>
                        <Link href='/posts'>Posts</Link>
                    </li>
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
                        <Link href='/profile'>Profile</Link>
                    </li>
                </>
            )}
        </>
    );
};

export default NavbarItems;
