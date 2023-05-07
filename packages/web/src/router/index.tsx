import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

/* 路由懒加载 */
const Login = React.lazy(() => import('@/views/login'))
const Register = React.lazy(() => import('@/views/register'))
const Home = React.lazy(() => import('@/views/home'))
const Dashboard = React.lazy(() => import('@/views/dashboard'))
const NotFound = React.lazy(() => import('@/views/404.tsx'))

/* 路由表配置 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'home'}/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
]
