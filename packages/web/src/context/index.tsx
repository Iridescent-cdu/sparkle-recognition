import type { ReactNode } from 'react'
import React from 'react'
import { AntdConfigProvider } from './config-context.tsx'
import { RouterConfigProvider } from '@/context/router-context.tsx'
import { QueryContextProvider } from '@/context/query-context.tsx'

interface Props {
  children: ReactNode
}

/* 所有Provider统一出口 */
export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <QueryContextProvider>
        <AntdConfigProvider>
          <RouterConfigProvider>
            {children}
          </RouterConfigProvider>
        </AntdConfigProvider>
      </QueryContextProvider>

    </>
  )
}
