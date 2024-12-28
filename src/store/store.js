import { create } from 'zustand';

const useStore = create((set) => ({
    darkMode: false,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
