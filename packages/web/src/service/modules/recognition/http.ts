import OSS from 'ali-oss'
import { authRequest, unAuthRequest } from '@/service/fetch'
import { FetchService } from '@/service/fetch/fetch'

/* 获取STS Token */
export function getStsToken() {
  return unAuthRequest.get('/sts', {})
}
/* 上传图片 */
export function postImage(sysToken: any, file: any) {
  const ossClient = new OSS({
    // bucket所在区域
    region: import.meta.env.VITE_APP_BUCKET_REGION,
    // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey ID
    accessKeyId: sysToken.AccessKeyId,
    // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey Secret
    accessKeySecret: sysToken.AccessKeySecret,
    // 从STS服务获取的安全令牌（SecurityToken）
    stsToken: sysToken.SecurityToken,
    // bucket
    bucket: import.meta.env.VITE_APP_BUCKET_NAME,
    async refreshSTSToken() {
      const result: any = await getStsToken()
      return {
        // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey ID
        accessKeyId: result.AccessKeyId,
        // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey Secret
        accessKeySecret: result.AccessKeySecret,
        // 从STS服务获取的安全令牌（SecurityToken）
        stsToken: result.SecurityToken,
      }
    },
  })
  return ossClient.put(`images/${file.name}`, file)
}
/* 获取识别结果 */
export function getRecognitionResult(imageUrl: string) {
  // TODO 获取识别结果
  // return unAuthRequest.get('/recognition', {
  //   imageUrl,
  // })
  new FetchService('https://6968y1r161.yicp.fun').get('test', { q: imageUrl })
}
export function postRecognitionResult(recognitionResult: any) {
  return authRequest.post('image', recognitionResult, {})
}
export function deleteRecognitionResult(image: {}) {
  return authRequest.delete('image', image, {})
}
