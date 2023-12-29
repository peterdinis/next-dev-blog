import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutBtn from './LogoutBtn';

const ProfileComponent: FC = async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    console.log(user);

    return <div>
        <h2>{user.email}</h2>
        <LogoutBtn />
    </div>;
};

export default ProfileComponent;
