import styled from '@emotion/styled'
import colors from 'constants/colors'
import React, { memo, TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errorMsg?: string
}

function TextArea({ label, errorMsg, ...rest }: Props) {
  return (
    <section>
      <h3>{label}</h3>
      <StyledTextArea data-testid='textarea' rows={10} {...rest}></StyledTextArea>
      <StyledErrorMsg>{errorMsg}</StyledErrorMsg>
    </section>
  )
}

export default memo(TextArea)

const StyledTextArea = styled.textarea`
  width: 100%;
  border: 0 solid transparent;
  background-color: ${colors.grey300};
  color: ${colors.grey900};
  font-size: 17px;
  font-weight: 600;
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;
`
const StyledErrorMsg = styled.p`
  margin: 5px 0;
  color: ${colors.red};
  height: 18px;
  font-size: 15px;
`
