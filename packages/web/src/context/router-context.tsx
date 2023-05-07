import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface Props {
  children: ReactNode
}
/* 抽离ReactRouter 路由模式配置 */
export const RouterConfigProvider: React.FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}
