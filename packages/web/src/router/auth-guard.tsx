import { useRoutes } from 'react-router-dom'
import { useUserStore } from '@/store/user.ts'
import { authRoutes, unAuthRoutes } from '@/router/index.tsx'

interface props {

}
export const AuthGuard: React.FC<props> = () => {
  const userStore = useUserStore() // 获取用户登录状态
  const authRoutesComponents = useRoutes(authRoutes)
  const unAuthRoutesComponents = useRoutes(unAuthRoutes)

  // 如果用户未登录，则重定向到登录页面
  if (!userStore.token)
    return unAuthRoutesComponents

  // 否则继续渲染路由
  return authRoutesComponents
}
