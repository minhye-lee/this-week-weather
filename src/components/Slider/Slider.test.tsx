import React from 'react'
import { render, screen } from '@testing-library/react'
import Slider from './Slider'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(
    <Slider>
      <Slider.Item>슬라이더 아이템</Slider.Item>
    </Slider>
  )
  expect(screen.getByText(/슬라이더 아이템/)).toBeInTheDocument()
})
