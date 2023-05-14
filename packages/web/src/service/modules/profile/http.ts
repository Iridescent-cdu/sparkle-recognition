import { authRequest } from '@/service/fetch'

export function getImagesByUsername() {
  return authRequest.get('image', {})
}
export function getRankUserByImagesCount() {
  return authRequest.get('user', {})
}
