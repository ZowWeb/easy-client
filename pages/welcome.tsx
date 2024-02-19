import { deleteCookie, getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'
import jwt from 'jsonwebtoken'
import { Result } from 'antd'

import Layout from 'components/Layout'
import Image from 'next/image'

const Welcome = ({ name }: { name: string }) => {
  return (
    <Layout name={name}>
      <Image
        src="/welcome.webp"
        alt="welcome"
        width={800}
        height={500}
        priority
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie('token', { req, res })
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const decodedToken = jwt.decode(token)
  console.log(
    `constgetServerSideProps:GetServerSideProps= ~ decodedToken:`,
    decodedToken,
  )
  // Invalid token
  if (
    typeof decodedToken === 'string' ||
    !decodedToken?.email ||
    !decodedToken.exp
  ) {
    deleteCookie('token')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  // Check if the token is expired
  if (decodedToken.exp < Date.now() / 1000) {
    // The token is expired
    deleteCookie('token')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  console.log('decodedToken', decodedToken)

  return {
    props: {
      name: decodedToken.name,
    },
  }
}

export default Welcome
