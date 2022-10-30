import styled from '@emotion/styled'
import colors from 'constants/colors'
import { InputHTMLAttributes, memo } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMsg?: string
}

function Input({ label, errorMsg, ...rest }: Props) {
  return (
    <section>
      <h3>{label}</h3>
      <StyledInput data-testid='input' {...rest} />
      <StyledErrorMsg>{errorMsg}</StyledErrorMsg>
    </section>
  )
}

export default memo(Input)

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0 solid transparent;
  background-color: ${colors.grey300};
  color: ${colors.grey900};
  font-size: 17px;
  font-weight: 600;
  padding-left: 10px;
  box-sizing: border-box;
`

const StyledErrorMsg = styled.p`
  margin: 5px 0;
  color: ${colors.red};
  height: 18px;
  font-size: 15px;
`
