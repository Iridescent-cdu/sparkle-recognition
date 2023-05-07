import type { ReactNode } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 创建QueryClient客户端
const queryClient = new QueryClient()

interface Props {
  children: ReactNode
}
/* 使用QueryClientProvider向应用提供QueryClient客户端 */
export const QueryContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
