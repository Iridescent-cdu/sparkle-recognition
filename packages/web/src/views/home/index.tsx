import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message } from 'antd'
import ImgCrop from 'antd-img-crop'

interface Props {

}

const props: UploadProps = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  style: {
    width: '66rem',
  },
  onChange(info: any) {
    const { status } = info.file
    if (status !== 'uploading')
      console.log(info.file, info.fileList)

    if (status === 'done')
      message.success(`${info.file.name} file uploaded successfully.`)
    else if (status === 'error')
      message.error(`${info.file.name} file upload failed.`)
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}
/* 项目首页 */
const Home: React.FC<Props> = () => {
  return (
    /* 裁剪图片：通过props配置所有处理逻辑和自定义选项  */
    <ImgCrop>
      {/* 拖拽上传：通过props配置所有处理逻辑和自定义选项 */}
      <Dragger {...props}>
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
  )
}
export default Home
