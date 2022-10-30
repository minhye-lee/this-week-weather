import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(<TextArea label='제목' placeholder='텍스트 입력' />)
  expect(screen.getByTestId('textarea')).toBeInTheDocument()
})

test('placeholder 값이 있으면 렌더링 되어야 합니다.', () => {
  render(<TextArea label='제목' placeholder='텍스트 입력' />)
  expect(screen.getByTestId('textarea')).toHaveAttribute('placeholder', '텍스트 입력')
})

test('input에 값 입력시 렌더링 되어야 합니다.', () => {
  render(<TextArea label='제목' placeholder='텍스트 입력' />)
  fireEvent.change(screen.getByTestId('textarea'), { target: { value: '할일1' } })
  expect(screen.getByTestId('textarea')).toHaveDisplayValue('할일1')
})
