import styled from 'styled-components'
import { Form } from 'antd'
import { flex } from 'styles/themeUtils'

export const StyledForm = styled(Form)`
  .ant-form-item-control-input-content {
    ${flex('row', 'center', 'space-between')}
  }
  .signup-form-button-wrapper .ant-form-item-control-input-content {
    ${flex()}
    gap: 0.3rem;

    button {
      margin-right: auto;
    }
  }
`
