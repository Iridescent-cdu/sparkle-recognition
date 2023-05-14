import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'
import { getImagesByUsername, getRankUserByImagesCount } from '@/service/modules/profile/http'

interface User {
  id?: number
  name: string
  count: string
  rank?: string
}
interface State {
  token: string
  rankUser: User[]
  currentUser: User
  images: []

}
interface Action {
  setToken: (token: string) => void
  setRankUser: (rankUser: User[]) => void
  setCurrentUser: (currentUser: User[]) => void
  setImages: (images: any) => void
  getRankUser: () => void
  getCurrentUser: () => void
}
export const useUserStore = create(persist(immer<State & Action>(set => ({
  token: '',
  rankUser: [],
  currentUser: {} as User,
  images: [],
  setToken: (token: string) => set(() => {
    return {
      token,
    }
  },
  ),
  setRankUser: (rankUser: User[]) => set(() => {
    return { rankUser }
  }),
  setCurrentUser: (currentUser: User[]) => set(() => {
    return {
      currentUser,
    }
  }),
  setImages: (images: any) => set(() => {
    return {
      images,
    }
  }),
  async getRankUser() {
    const res: any = await getImagesByUsername()

    this.setCurrentUser(res.rankUser as unknown as User[])
    this.setImages(res.images as unknown as User[])
  },
  async getCurrentUser() {
    const res: any = await getRankUserByImagesCount()

    this.setRankUser(res.rankUser as unknown as User[])
  },
})), {
  /* 持久化设置 */
  name: 'user',
  // 默认值为localStorage
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    token: state.token,
  }),
}))
