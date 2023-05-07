import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'

interface state {
  token: string
}
interface action {}
export const useUserStore = create(persist(immer<state & action>(set => ({
  // TODO 保存用户信息和token
  token: '',
})), {
  name: 'user',
  // 默认值为localStorage
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    token: state.token,
  }),
}))
