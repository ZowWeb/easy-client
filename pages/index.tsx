import { ConfigProvider, ThemeConfig, App as AntApp } from 'antd'

import FlexBox from 'components/FlexBox'
import Layout from 'components/Layout'
import SignInForm from 'components/SignIn'

export default function LoginPage() {
  return (
    <Layout>
      <FlexBox justify="center" align="center">
        <SignInForm />
      </FlexBox>
    </Layout>
  )
}
