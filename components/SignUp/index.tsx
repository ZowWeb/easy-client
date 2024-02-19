import React, { useCallback, useEffect } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

import { ServerErrorResponse, UserResponse } from 'types'
import useFeedback from 'hooks/useFeedback'

const SignUp = () => {
  const router = useRouter()
  const { notification } = useFeedback()

  const onFinish = async (values: any) => {
    console.log('Success:', values)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_URL}/user/signup`,
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
      name="signup"
      className="signup-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
        />
      </Form.Item>
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignUp
