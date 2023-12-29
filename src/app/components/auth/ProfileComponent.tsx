import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutBtn from './LogoutBtn';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import CreatePost from '../posts/CreatePost';

const ProfileComponent: FC = async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const formattedDate = format(
        user?.identities![0]?.created_at as unknown as string,
        'MM/dd/yyyy',
    );

    return (
        <div>
            <div className='max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5'>
                <img
                    className='w-32 h-32 rounded-full mx-auto'
                    src='https://picsum.photos/200'
                    alt='Profile picture'
                />
                <h2 className='text-center text-2xl font-semibold mt-3'>
                    {user.email}
                </h2>
                <div className='flex justify-center mt-5'>
                    <LogoutBtn />
                    <Button variant='ghost' size='lg'>
                        My posts
                    </Button>
                    <CreatePost />
                </div>
                <div className='mt-5'>
                    <h3 className='text-xl font-semibold'>
                        Account created: {formattedDate}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
