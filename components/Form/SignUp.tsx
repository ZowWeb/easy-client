import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

import { ServerErrorResponse, UserResponse } from 'types'
import useFeedback from 'hooks/useFeedback'
import { StyledForm } from './styles'

const SignUp = () => {
  const router = useRouter()
  const { notification } = useFeedback()

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if ([400, 401].includes(response.status)) {
        const signUpResponse: ServerErrorResponse = await response.json()
        notification.error({
          key: 'error',
          message: signUpResponse.error,
          description: signUpResponse.message,
        })
        return
      }
      if ([200, 201].includes(response.status)) {
        const userResponse: UserResponse = await response.json()
        notification.success({
          key: 'success',
          message: 'Welcome!',
        })
        setCookie('token', userResponse.token, {
          maxAge: userResponse.expiresIn,
        })
        router.push('/welcome')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StyledForm name="signup" className="signup-form" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>
      <Form.Item className="form-button-wrapper">
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
        <Link href="/">Log In!</Link>
      </Form.Item>
    </StyledForm>
  )
}

export default SignUp
