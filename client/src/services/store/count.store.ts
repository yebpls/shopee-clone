import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  increase: () => void;
  decrease: () => void;
  setToSpecific: (count: State["count"]) => void;
};

const useCountStore = create<State & Action>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  setToSpecific: (count) => set(() => ({ count: count })),
}));

export default useCountStore;
