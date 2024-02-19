import { Layout } from 'antd'
import styled from 'styled-components'

import { RESPONSIVE_MAX_WIDTH, HEADER_HEIGHT } from 'constants/global'
import { flex } from 'styles/themeUtils'
import FlexBox from 'components/FlexBox'

const { Header, Content, Footer } = Layout

export const MaxWidth = styled.div`
  ${flex()}
  flex: 1;
  width: 100%;
  max-width: ${RESPONSIVE_MAX_WIDTH};
`

export const AntLayout = styled(Layout)`
  min-height: 100vh;
`

export const Main = styled(Content)`
  ${flex('column')}
  flex-grow: 1;
  background: #fff;
`

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 1;

  &.ant-layout-header {
    height: ${HEADER_HEIGHT};
    color: #fff;
    box-shadow: 0px 3px 6px #00000029;
  }

  .ant-dropdown-trigger {
    ${flex()}
    gap: 0.5rem;
  }
`

export const HeaderWrapper = styled(FlexBox)`
  width: 100%;
`

export const StyledFooter = styled(Footer)`
  ${flex('column', 'center', 'center')}
`

export const User = styled.div`
  cursor: pointer;
  max-height: 1.5rem;
  margin-left: auto;
`

export const LogoutBtn = styled.div`
  ${flex()}
  width: 10rem;
  gap: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
`
