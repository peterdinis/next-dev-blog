import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className='relative pt-8 pb-6 mt-1'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap items-center md:justify-between justify-center'>
                    <div className='w-full md:w-6/12 px-4 mx-auto text-center'>
                        <div className='text-sm text-blueGray-500 font-semibold py-1'>
                            <span className='inline-block text-3xl'>
                                &copy; Dev Motion 2023
                            </span>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
