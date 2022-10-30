import styled from '@emotion/styled'
import colors from 'constants/colors'

import React, { forwardRef, ReactNode, Ref } from 'react'

function Slider({ children }: { children: ReactNode }) {
  return <StyledSlider>{children}</StyledSlider>
}

function Item({ children }: { children: ReactNode }, forwardRef: Ref<HTMLElement>) {
  return <StyledSliderItem ref={forwardRef}>{children}</StyledSliderItem>
}
Slider.Item = forwardRef(Item)

const StyledSlider = styled.div`
  overflow: auto;
  white-space: nowrap;
`

const StyledSliderItem = styled.article`
  display: inline-block;
  background-color: ${colors.grey300};
  font-size: 18px;
  width: 130px;
  text-align: center;
  text-decoration: none;
  margin: 10px;

  :first-of-type {
    margin-left: 0;
  }
`

export default Slider
