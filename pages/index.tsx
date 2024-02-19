import Image from 'next/image'
import { Divider } from 'antd'

import FlexBox from 'components/FlexBox'
import Layout from 'components/Layout'
import SignInForm from 'components/SignIn'

export default function LoginPage() {
  return (
    <Layout>
      <FlexBox direction="column" justify="center" align="center" gap="2rem">
        <Image src="/agent.svg" alt="login-image" width={600} height={300} />
        <Divider>
          <h2>Here you are again!</h2>
        </Divider>
        <SignInForm />
      </FlexBox>
    </Layout>
  )
}
