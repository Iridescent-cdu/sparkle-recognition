/** @jsxImportSource @emotion/react */
import React, { Suspense } from 'react'
import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Card, Spin } from 'antd'
import logo from '@/assets/logo.svg'

const AppLayoutContainer = styled.div`
  min-width: 100vw;
  height: 100vh;
  padding: 10rem 10rem;
  background-color: #535bf2;

  .ant-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
  }
`
const AppLayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
  padding: 0 8rem;
  color: #5F41B2;
  font-size: 2.4rem;
  font-weight: 600;
  // TODO 删除背景色
  background-color: #f9f9f9;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-right: 1.9rem;
  }
`
const AppLayoutMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
`

interface Props {
  children: ReactNode
}
/* 页面Layout布局 */
export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppLayoutContainer>
      <Card css={{ height: '100%' }}>
        {/* 布局卡片头部 */}
        <AppLayoutHeader>
          <div>
            <img src={logo} />
            <span>Sparkle</span>
          </div>
          {/* TODO 右侧UI展示 */}

        </AppLayoutHeader>
        {/* 布局卡片内容:用于展示路由组件 */}
        <AppLayoutMain>
          {/* Suspense出口 */}
          <Suspense fallback={<Spin />}>
            {children}
          </Suspense>
        </AppLayoutMain>
      </Card>
    </AppLayoutContainer>
  )
}
