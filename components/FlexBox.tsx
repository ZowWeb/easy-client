import { CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Property } from 'csstype'

import { flex } from 'styles/themeUtils'

type FlexBoxProps = Partial<{
  direction: Property.FlexDirection
  justify: Property.JustifyItems
  align: Property.AlignItems
  wrap: Property.FlexWrap
  flex: Property.Flex
  gap: Property.Gap
  colGap: Property.ColumnGap
  rowGap: Property.RowGap
  height: Property.Height
  responsive: boolean
  style: CSSProperties
  className: string
  children: ReactNode
}>

const Container = styled.div<FlexBoxProps>`
  ${({ direction, align = 'normal', justify = 'normal', wrap }) => flex(direction, align, justify, wrap)}
  flex: ${props => props.flex || '0 1 auto'};
  height: ${props => props.height || 'auto'};
  gap: ${props => (props.gap ? props.gap : null)};
  row-gap: ${props => (props.rowGap ? props.rowGap : null)};
  column-gap: ${props => (props.colGap ? props.colGap : null)};
  ${({ responsive }) =>
    responsive
      ? css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `
      : null};
`

const FlexBox = ({ className, children, wrap, ...rest }: FlexBoxProps) => (
  <Container className={className} {...rest}>
    {children}
  </Container>
)

export default FlexBox
