import { FetchService } from '@/service/fetch/fetch.ts'

const baseUrl = import.meta.env.VITE_APP_BASE_URL
/* 提供需要token和不需要token的两个请求实例 */
export const authRequest = new FetchService(baseUrl, {
  headers: {
    // 使用Bearer Token
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user') || '{}').state?.token}`,
  },
})
export const unAuthRequest = new FetchService(baseUrl)
