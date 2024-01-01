import { FC } from 'react';

interface IAuthorCard {
    authorEmail: string;
}

const AuthorCard: FC<IAuthorCard> = ({ authorEmail }: IAuthorCard) => {
    return (
        <div className='w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm'>
            <div className='p-4 border-t border-b md:border md:rounded'>
                <span>Author of posts</span>
                <div className='flex py-2'>
                    <div>
                        <p className='font-semibold text-gray-700 text-sm'>
                            {' '}
                            {authorEmail}{' '}
                        </p>
                        <p className='font-semibold text-gray-600 text-xs'>
                            {' '}
                            Editor{' '}
                        </p>
                    </div>
                </div>
                <button
                    disabled={true}
                    className='px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded'
                >
                    Follow
                    <i className='bx bx-user-plus ml-2'></i>
                </button>
            </div>
        </div>
    );
};

export default AuthorCard;
