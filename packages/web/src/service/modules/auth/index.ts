import { useMutation } from '@tanstack/react-query'
import { unAuthRequest } from '@/service/fetch'

function login(data: {}) {
  return unAuthRequest.post('/login', data)
}
export function useLogin() {
  // const queryClient = useQueryClient()
  const { isLoading, isSuccess, isError } = useMutation({
    mutationFn: login,
    // TODO 登录请求
    onSuccess: () => {
      /* 成功之后刷新query查询的数据，在登录时不需要 */
      // queryClient.invalidateQueries({ queryKey: ['login'] })
    },
    onError: () => {

    },
  })
  return {
    isLoading,
    isSuccess,
    isError,
  }
}
