import { FC } from 'react';

const FrontPosts: FC = () => {
    return (
        <div className='py-24 flex-col items-center justify-center  px-4'>
            <h1
                role='heading'
                className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'
            >
                Our top posts
            </h1>
            <div className='2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6'>
                <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                    <div className='hover:scale-125 transition-all duration-500 cursor-pointer'> {/* TODO: Animácia na celú kartu */}
                        <img
                            src='https://i.ibb.co/hKV7YhC/blog-1.png'
                            alt='woman smiling'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                    <div className='lg:mt-10'>
                        <img
                            className='hover:scale-125 transition-all duration-500 cursor-pointer'
                            src='https://i.ibb.co/WkCydhJ/blog-4.png'
                            alt='coffe pouring'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto'>
                    <div>
                        <img
                            className='hover:scale-125 transition-all duration-500 cursor-pointer'
                            src='https://i.ibb.co/SmNSVs8/blog-2.png'
                            alt='plant held by a man'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                    <div className='lg:mt-10'>
                        <img
                            className='hover:scale-125 transition-all duration-500 cursor-pointer'
                            src='https://i.ibb.co/3pMc5WS/blog-5.png'
                            alt='lady with plant'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                </div>
                <div className='flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto'>
                    <div>
                        <img
                            src='https://i.ibb.co/TLJdmSt/new-img-2.png'
                            alt='Delighful breakfast'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                    <div className='xl:mt-10'>
                        <img
                            src='https://i.ibb.co/c8dPSYB/blog-6.png'
                            alt='hats with image frame in middle'
                        />
                        <h2 className='text-xl font-semibold leading-5 mt-8 text-gray-800'>
                            Busting myths about hair
                        </h2>
                        <div className='mt-6 flex items-center cursor-pointer'>
                            <p className='pr-3 text-base font-medium leading-4 underline text-gray-800'>
                                5 min read
                            </p>
                            <svg
                                width={16}
                                height={10}
                                viewBox='0 0 16 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1 5H15'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 9L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11 1L15 5'
                                    stroke='#1F2937'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <p className='text-base mt-4 italic font-italic leading-4 text-gray-600'>
                            23, Feburary 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontPosts;
