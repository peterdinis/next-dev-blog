'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { useToast } from '@/components/ui/use-toast';

const LogoutBtn: FC = () => {
    const supabase = createClientComponentClient();
    const { toast } = useToast();
    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast({
                title: error as unknown as string,
                className: 'bg-red-400',
                duration: 2000,
            });
        }

        toast({
            title: 'Logout was successfull',
            className: 'bg-green-400',
            duration: 2000,
        });
    }

    return (
        <Button variant='default' size='lg' onClick={handleSignOut}>
            Sign Out
        </Button>
    );
};

export default LogoutBtn;
