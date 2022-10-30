import React from 'react'
import { render, screen } from '@testing-library/react'
import Top01 from './Top01'
import Top02 from './Top02'

test('Top 01 성공적으로 렌더링 되어야 합니다', () => {
  render(<Top01>THIS WEEK</Top01>)
  expect(screen.getByText(/THIS WEEK/)).toBeInTheDocument()
})

test('Top 02 성공적으로 렌더링 되어야 합니다', () => {
  render(<Top02>THIS WEEK</Top02>)
  expect(screen.getByText(/THIS WEEK/)).toBeInTheDocument()
})
