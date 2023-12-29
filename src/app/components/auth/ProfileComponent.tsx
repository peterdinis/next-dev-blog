import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProfileComponent: FC = async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    console.log(user);

    return <div></div>;
};

export default ProfileComponent;
