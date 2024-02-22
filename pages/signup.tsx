import { Divider } from 'antd'
import styled from 'styled-components'

import Layout from 'components/Layout'
import SignUpForm from 'components/Form/SignUp'
import ResponsiveNextImage from 'components/Image'
import { flex } from 'styles/themeUtils'

export const ImageAndFormWrapper = styled.div`
  ${flex('column')}
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  .heading {
    margin-top: -5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    .next-image-wrapper {
      margin-top: -2rem;
    }
    form {
      width: 80%;
    }
  }
`

export default function SignUpPage() {
  return (
    <Layout>
      <ImageAndFormWrapper>
        <ResponsiveNextImage
          nextImgProps={{
            src: '/agent.svg',
            alt: 'login-image',
            objectFit: 'contain',
            fill: true,
          }}
        />
        <Divider className="heading">
          <h2>Let&apos;s get you started</h2>
        </Divider>
        <SignUpForm />
      </ImageAndFormWrapper>
    </Layout>
  )
}
