import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'

import useFeedback from 'hooks/useFeedback'
import { ServerErrorResponse, UserResponse } from 'types'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SignInForm = () => {
  const router = useRouter()
  const { notification } = useFeedback()

  useEffect(() => {
    deleteCookie('token')
  }, [])

  const onFinish = async (values: any) => {
    console.log('Success:', values)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_URL}/user/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      )

      if (response.status === 400) {
        const signUpResponse: ServerErrorResponse = await response.json()
        notification.error({
          key: 'error',
          message: signUpResponse.error,
          description: signUpResponse.message,
        })
        return
      }
      if ([200, 201].includes(response.status)) {
        const signUpResponse: UserResponse = await response.json()
        notification.success({
          key: 'success',
          message: signUpResponse.statusCode,
          description: 'Welcome!',
        })
        setCookie('token', signUpResponse.token)
        router.push('/welcome')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link href="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

export default SignInForm
