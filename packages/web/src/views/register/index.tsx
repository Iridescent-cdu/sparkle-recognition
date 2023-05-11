/** @jsxImportSource @emotion/react */
import { Button, Card, Form, Input } from 'antd'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import type { authInfo } from '@/types/auth.ts'
import { useRegister } from '@/service/modules/auth'

interface Props {

}

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .ant-card {
    width: 50rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    padding: 20px;
  }

  .ant-form-item-required {
    width: 7.75rem;
    display: flex;
    justify-content: flex-end;
  }

  .link-btn {
    color: #1e80ff;
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    cursor: pointer;
  }
`

/* 登录页 */
const Register: React.FC<Props> = () => {
  const { mutate, isLoading, contextHolder, messageApi } = useRegister()
  const onFinish = (values: authInfo) => {
    if (values.password !== values.confirmPassword) {
      messageApi.error('两次输入的密码不同')
      return
    }
    mutate(values)
  }
  return (
    <FormContainer>
      <Card>
        <h3>创建帐户</h3>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label={'用户名'} name={'username'} rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label={'密码'} name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label={'确认密码'} name={'confirmPassword'} rules={[{ required: true, message: '请确认密码' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <NavLink to={'/login'} className={'link-btn'}>去登录</NavLink>
          </Form.Item>
          <Form.Item>
            {contextHolder}
            <Button type={'primary'} css={{ marginRight: '3rem' }} htmlType={'submit'} loading={isLoading}>注册</Button>
            <Button type={'default'} htmlType={'reset'}>重置</Button>
          </Form.Item>
        </Form>
      </Card>
    </FormContainer>
  )
}
export default Register
