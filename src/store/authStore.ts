import { AuthUser } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
	user: AuthUser | null;
	setUser: (user: AuthUser | null) => void;
}

export const useUser = create<UserState>()((set) => ({
	user: null,
	setUser: (user: AuthUser | null) => set(() => ({ user })),
}));