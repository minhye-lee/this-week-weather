import styled from '@emotion/styled'
import colors from 'constants/colors'
import { memo } from 'react'

const Button = styled.button`
  width: 100%;
  height: 52px;
  border: 0 solid transparent;
  background-color: ${colors.grey300};
  color: ${colors.grey900};
  font-size: 17px;
  font-weight: 600;
`

export default memo(Button)
