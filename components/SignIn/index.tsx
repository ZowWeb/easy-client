import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useFeedback from 'hooks/useFeedback'
import { ServerErrorResponse, UserResponse } from 'types'
import { StyledForm } from './styles'

const SignInForm = () => {
  const router = useRouter()
  const { notification } = useFeedback()

  useEffect(() => {
    deleteCookie('token')
  }, [])

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/user/signin`, {
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
    <StyledForm
      name="login"
      className="login-form"
      style={{ maxWidth: 500 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item className="login-form-button-wrapper">
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        Or <Link href="/signup">register now!</Link>
      </Form.Item>
    </StyledForm>
  )
}

export default SignInForm
