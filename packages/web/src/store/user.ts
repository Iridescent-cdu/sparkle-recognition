import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'

interface state {
  token: string
}
interface action {
  setToken: (token: string) => void
}
export const useUserStore = create(persist(immer<state & action>(set => ({
  token: '',
  setToken: (token: string) => set(() => (
    {
      token,
    }
  )),
})), {
  /* 持久化设置 */
  name: 'user',
  // 默认值为localStorage
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    token: state.token,
  }),
}))
