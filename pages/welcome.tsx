import { deleteCookie, getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'
import jwt from 'jsonwebtoken'

const Welcome = () => {
  return <div>Welcome to the application.</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie('token', { req, res })
  if (!token) {
    return {
      redirect: {
        destination: '/login',
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
        destination: '/login',
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
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default Welcome
