import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import type { ImgCropProps } from 'antd-img-crop'
import ImgCrop from 'antd-img-crop'
import { Card, Empty, Image, Spin, Statistic, message } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import type { UploadFile } from 'antd/lib'
import styled from '@emotion/styled'
import {
  getRecognitionResult,
  getStsToken,
  postImage,
  postRecognitionResult,
} from '@/service/modules/recognition/http.ts'
import { useUserStore } from '@/store/user'

const RecognitionContainer = styled.div`
  display: flex;
  width: 66.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const RecognitionResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  .ant-card {
    width: 66.5rem;
    height: 20rem;

    .ant-card-body {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`

interface Props {

}

/* 项目首页 */
const Home: React.FC<Props> = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [recoResult, setRecoResult] = useState<string>('')
  const userStore = useUserStore()
  // 不能是一个async函数
  useEffect(() => {
    handleUploadImage()
  }, [fileList])
  async function handleUploadImage() {
    if (fileList.length === 0)
      return
    setIsLoading(true)
    const stsToken = await getStsToken()
    const res = await postImage(stsToken, fileList[0])
    setImageUrl(res.url)

    const recoRes: any = await getRecognitionResult(`images/${fileList[0].name}`)
    setRecoResult(recoRes.result)
    if (userStore.token) {
      await postRecognitionResult({
        imageUrl: res.url,
        recognitionResult: recoRes.result,
      })
    }
    setIsLoading(false)
  }
  const imgCropProps: ImgCropProps = {
    children: <div></div>,
    // 在图片裁剪之前判断文件格式
    beforeCrop(file) {
      const acceptFile = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
      if (!acceptFile.includes(file.type)) {
        message.error('文件格式不符')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        message.error('图片大小不能超过 2MB')
        return false
      }
      return true
    },
  }
  const uploadProps: UploadProps = {
    name: 'file',
    accept: '.jpg,.jpeg,.png,.gif', // 设置可接受的文件，只在文件选择时提供对应的格式，用户依然可以手动选择上传其他的文件格式
    multiple: false, // 设置上传文件时是否可以多选图片上传
    maxCount: 1, // 设置最大的上传文件数量
    style: {
      width: '66rem',
    },
    listType: 'picture',
    showUploadList: false,
    beforeUpload(file) {
      // 返回false,改用手动上传
      setFileList([file])

      return false
    },
  }
  return (
    <RecognitionContainer>
      {/* 裁剪图片：通过props配置所有处理逻辑和自定义选项  */}
      <ImgCrop {...imgCropProps}>
        {/* 拖拽上传：通过props配置所有处理逻辑和自定义选项 */}
        <Dragger {...uploadProps}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined />
          </p>
          <p className='ant-upload-text'>单击或拖动文件到此区域进行上传</p>
          <p className='ant-upload-hint'>
            {/* Support for a single or bulk upload. Strictly prohibited from uploading company data or other */}
            {/* banned files. */}
          </p>
        </Dragger>
      </ImgCrop>
      <Spin spinning={isLoading}></Spin>
      <RecognitionResultContainer>
        <Card>
          {imageUrl
            ? <Fragment>
              <Image width={200} src={imageUrl} />
              <Statistic title='识别结果' value={recoResult} precision={2}></Statistic>
            </Fragment>
            : <Empty description={'暂无识别数据'} style={{
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }} />}
          {/* TODO 可视化结果 */}

          {/* <Pie data={[{ value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }]}></Pie> */}
        </Card>
      </RecognitionResultContainer>
    </RecognitionContainer>
  )
}
export default Home
