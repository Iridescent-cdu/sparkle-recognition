import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
interface Props {

}
/* 404 NotFound页面 */
const NotFound: React.FC<Props> = () => {
  const navigate = useNavigate()
  function handleToHome() {
    navigate('/home')
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => handleToHome()}>Back Home</Button>}
    />
  )
}
export default NotFound
