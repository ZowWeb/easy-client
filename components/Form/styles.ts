import styled from 'styled-components'
import { Form } from 'antd'
import { flex } from 'styles/themeUtils'

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: calc(100vw - 3rem);

  .ant-form-item-control-input-content {
    ${flex('row', 'center', 'space-between')}
  }
  .form-button-wrapper .ant-form-item-control-input-content {
    ${flex()}
    gap: 0.3rem;

    button {
      margin-right: auto;
    }
  }
`
