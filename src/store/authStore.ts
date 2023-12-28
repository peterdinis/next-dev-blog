import { AuthUser } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserState {
    user: any; // TODO: vytvoriť typ
    setUser: (user: AuthUser | null) => void;
}

export const useUserStore = create<UserState>()((set) => ({
    user: null,
    setUser: (user: AuthUser | null) => set(() => ({ user })),
}));
