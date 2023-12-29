import { ReactNode } from 'react';

export type HeaderType = {
    text: string;
};

export type AuthProviderProps = {
    accessToken: string;
    children: ReactNode;
};
