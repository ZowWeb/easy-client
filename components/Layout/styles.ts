import { Layout } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

import { RESPONSIVE_MAX_WIDTH, HEADER_HEIGHT } from 'constants/global'
import { flex } from 'styles/themeUtils'
import FlexBox from 'components/FlexBox'

const { Header, Content, Footer } = Layout

export const MaxWidth = styled.div`
  ${flex('row', 'normal', 'space-between')}
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
`

export const HeaderWrapper = styled(FlexBox)`
  width: 100%;
`

export const StyledFooter = styled(Footer)``

export const LogoLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  img {
    object-fit: contain;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  max-height: 1.5rem;
  margin: auto 0;
`
