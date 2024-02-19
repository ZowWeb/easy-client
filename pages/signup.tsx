import Image from 'next/image'
import { Divider } from 'antd'

import FlexBox from 'components/FlexBox'
import Layout from 'components/Layout'
import SignUpForm from 'components/SignUp'

export default function LoginPage() {
  return (
    <Layout>
      <FlexBox direction="column" justify="center" align="center" gap="2rem">
        <Image src="/agent.svg" alt="login-image" width={600} height={300} />
        <Divider>
          <h2>Let&apos;s get you started</h2>
        </Divider>
        <SignUpForm />
      </FlexBox>
    </Layout>
  )
}
