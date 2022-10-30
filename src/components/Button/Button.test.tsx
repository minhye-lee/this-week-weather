import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(<Button>추가하기</Button>)
  expect(screen.getByText(/추가하기/)).toBeInTheDocument()
})
