import FlexBox from 'components/FlexBox'
import {
  AntLayout,
  StyledHeader,
  Main,
  StyledFooter,
  User,
  MaxWidth,
  HeaderWrapper,
} from './styles'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntLayout>
      <StyledHeader>
        <MaxWidth>
          <HeaderWrapper justify="space-between">
            <Link href="/">Logo</Link>
            <User>
              <UserOutlined />
              Zohaib Khan
            </User>
          </HeaderWrapper>
        </MaxWidth>
      </StyledHeader>
      <Main>{children}</Main>
      <StyledFooter>StyledFooter</StyledFooter>
    </AntLayout>
  )
}

export default Layout
