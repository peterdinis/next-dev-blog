'use client';
import { useUserStore } from '@/store/authStore';
import { supabaseClient } from '@/supabase/setup';
import React, { FC, ReactNode, useEffect } from 'react';

interface ISessionProviderProps {
    children?: ReactNode;
}

const SessionProvider: FC<ISessionProviderProps> = ({
    children,
}: ISessionProviderProps) => {
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        readSession();
        // eslint-disable-next-line
    }, []);

    const readSession = async () => {
        const { data: userSesssion } = await supabaseClient.auth.getSession();

        if (userSesssion.session) {
            const { data } = await supabaseClient
                .from('users')
                .select('*')
                .eq('id', userSesssion.session?.user.id)
                .single();
            setUser(data);
        }
    };

    return <>{children}</>;
};

export default SessionProvider;
