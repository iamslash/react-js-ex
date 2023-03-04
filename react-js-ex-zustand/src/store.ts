import create from 'zustand';

interface CountState {
    count: number;
    setCount: (cnt: number) => void;
}

export const useStore = create<CountState>((set) => ({
    count: window.localStorage.getItem('select') ? 
        Number(window.localStorage.getItem('select')) : 0,
    setCount: (cnt) => {
        set((state) => ({ ...state, count: cnt }));
    },
}))
