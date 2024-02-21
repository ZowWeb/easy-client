import { Divider } from 'antd'

import Layout from 'components/Layout'
import SignInForm from 'components/Form/SignIn'
import ResponsiveNextImage from 'components/Image'
import { ImageAndFormWrapper } from './signup'

export default function LoginPage() {
  return (
    <Layout>
      <ImageAndFormWrapper>
        <ResponsiveNextImage
          wrapperStyle={{ width: '100%', height: '100%' }}
          nextImgProps={{
            src: '/agent.svg',
            alt: 'login-image',
            objectFit: 'contain',
            fill: true,
          }}
        />
        <Divider className="heading">
          <h2>Here you are again!</h2>
        </Divider>
        <SignInForm />
      </ImageAndFormWrapper>
    </Layout>
  )
}
