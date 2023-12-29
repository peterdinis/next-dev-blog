import { HeaderType } from '@/types/sharedTypes';
import { FC } from 'react';

const Header: FC<HeaderType> = ({ text }: HeaderType) => {
    return (
        <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            {text}
        </h2>
    );
};

export default Header;
