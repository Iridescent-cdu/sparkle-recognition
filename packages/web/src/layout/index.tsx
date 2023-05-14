/** @jsxImportSource @emotion/react */
import React, { Suspense, useState } from 'react'
import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Avatar, Button, Card, Modal, Popover, Spin } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import logo from '@/assets/logo.svg'
import { useUserStore } from '@/store/user.ts'

const AppLayoutContainer = styled.div`
  min-width: 100vw;
  height: 100vh;
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
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-btn {
    border: none;
  }
`
interface Props {
  children: ReactNode
}

/* 页面Layout布局 */
export const AppLayout: React.FC<Props> = ({ children }) => {
  const userStore = useUserStore()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const routerList = ['/login', '/register']
  const location = useLocation()
  const navigate = useNavigate()

  function handleToLogin() {
    navigate('/login')
  }
  function handleToHome() {
    navigate('/home')
  }
  function handleToDashboard() {
    navigate('/dashboard')
  }

  function showModal() {
    setIsOpen(true)
  }

  function hideModal() {
    setIsOpen(false)
  }

  function handleLoginOut() {
    hideModal()
    userStore.setToken('')
    navigate('/home')
  }

  return (
    <AppLayoutContainer>
      <Card css={{ height: '100%' }}>
        {/* 布局卡片头部 */}
        <AppLayoutHeader>
          <div>
            <img src={logo} />
            <span>Sparkle</span>
          </div>
          {/* TODO 重构右侧展示 */}
          {!routerList.includes(location.pathname)
            ? <div>
              {userStore.token
                ? <Popover content={
                  <ListContainer >
                    <Button onClick={() => handleToHome()} >首页</Button>
                    <Button onClick={() => handleToDashboard()} >看板</Button>
                    <Button onClick={() => showModal()}>退出登录</Button>
                  </ListContainer>
                } placement='bottom'>
                  <Avatar style={{ backgroundColor: '#5F41B2' }} shape='square' size={'default'} icon={<UserOutlined />} />
                </Popover>
                : <Button onClick={() => handleToLogin()} type={'primary'}>登录</Button>}
            </div>
            : ''}
          <Modal
            title='是否要退出登录'
            open={isOpen}
            style={{ top: '23rem' }}
            onOk={handleLoginOut}
            onCancel={hideModal}
            okText='确认'
            cancelText='取消'

          >
          </Modal>
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
