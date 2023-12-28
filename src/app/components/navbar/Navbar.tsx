'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavbarItems from './NavbarItems';
import { X, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState<Boolean>(false);

    return (
        <nav className='w-full bg-white'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link href='/'>
                            <h2 className='text-xl text-black font-bold'>
                                SPŠT Knižnica
                            </h2>
                        </Link>
                        <div className='md:hidden'>
                            <button
                                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <X className='font-bold h-6' />
                                ) : (
                                    <Menu className='font-bold h-6' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                            <NavbarItems />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
