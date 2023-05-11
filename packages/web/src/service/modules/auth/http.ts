import { unAuthRequest } from '@/service/fetch'

export function login(data: {}) {
  return unAuthRequest.post('/login', data)
}
export function register(data: {}) {
  return unAuthRequest.post('/register', data)
}
