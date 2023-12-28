'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import { Button } from '@/components/ui/button';
import { supabaseClient } from '@/supabase/setup';
import { usePathname } from 'next/navigation';

const LoginComponent: FC = () => {
    const pathName = usePathname();

    const handleLoginGithub = async () => {
        await supabaseClient.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: location.origin + '/auth/callback?next=' + pathName,
            },
        });
    };

    return (
        <>
            <Header text='Login' />
            <div className='flex justify-center align-top mt-5'>
                <Button onClick={handleLoginGithub} variant={'default'}>
                    Login here
                </Button>
            </div>
        </>
    );
};

export default LoginComponent;
