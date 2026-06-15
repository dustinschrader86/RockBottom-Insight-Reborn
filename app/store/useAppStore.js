import { create } from 'zustand';

export const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  data: [],
  setData: (data) => set({ data }),

  loading: false,
  setLoading: (loading) => set({ loading }),
}));
