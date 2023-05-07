import React from 'react'
import type { ReactNode } from 'react'
import 'antd/dist/reset.css'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

interface Props {
  children: ReactNode
}
/* 统一管理Antd组件库设置 */
export const AntdConfigProvider: React.FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#5F41B2',
        },
      }}>
      {children}
    </ConfigProvider >
  )
}
