import { Dropdown, MenuProps } from 'antd'
import { ExportOutlined, HeartTwoTone, UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'

import Image from 'next/image'
import { AntLayout, StyledHeader, Main, StyledFooter, User, MaxWidth, LogoutBtn } from './styles'

const Layout = ({ children, name }: { children: React.ReactNode; name?: string }) => {
  const router = useRouter()

  const handleLogout = () => {
    deleteCookie('token')
    router.push('/')
  }

  const dropdownItems: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <LogoutBtn onClick={handleLogout}>
          <ExportOutlined />
          Logout
        </LogoutBtn>
      ),
    },
  ]

  return (
    <AntLayout>
      <StyledHeader>
        <MaxWidth>
          <Image src="/logo.svg" alt="Logo" width={100} height={80} priority />
          {name && (
            <Dropdown menu={{ items: dropdownItems }} arrow placement="bottomCenter">
              <User>
                <UserOutlined />
                {name}
              </User>
            </Dropdown>
          )}
        </MaxWidth>
      </StyledHeader>
      <Main>{children}</Main>
      <StyledFooter>
        <h4 style={{ marginBottom: '2rem' }}>
          Made with <HeartTwoTone twoToneColor="#eb2f96" /> by <a href="dev.zohaib.in">zowweb</a>
        </h4>
        <p>&copy; {new Date().getFullYear()} Zohaib Khan</p>
      </StyledFooter>
    </AntLayout>
  )
}

export default Layout
