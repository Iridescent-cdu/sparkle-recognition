import type { ReactNode } from 'react'
import React from 'react'
import { AntdConfigProvider } from './config-context.tsx'
import { RouterContext } from '@/context/router-context.tsx'

interface Props {
  children: ReactNode
}
/* 所有Provider统一出口 */
export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
        <>
          <AntdConfigProvider>
            <RouterContext>
              {children}
            </RouterContext>
            </AntdConfigProvider>
        </>
  )
}
