import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login, register } from './http.ts'
import { useUserStore } from '@/store/user.ts'

export function useLogin() {
  const userStore = useUserStore()
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  // const queryClient = useQueryClient()
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      /* 成功之后刷新query查询的数据，在登录时不需要 */
      // queryClient.invalidateQueries({ queryKey: ['login'] })
      userStore.setToken(data.access_token)
      messageApi.info('登录成功')
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    },
    onError: () => {
      messageApi.error('登录失败')
    },
  })
  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    contextHolder,
  }
}

export function useRegister() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      messageApi.info('注册成功')
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    },
    onError: () => {
      messageApi.error('注册失败')
    },
  })
  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    contextHolder,
    messageApi,
  }
}
