import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(<Input label='제목' placeholder='텍스트 입력' />)
  expect(screen.getByTestId('input')).toBeInTheDocument()
})

test('placeholder 값이 있으면 렌더링 되어야 합니다.', () => {
  render(<Input label='제목' placeholder='텍스트 입력' />)
  expect(screen.getByTestId('input')).toHaveAttribute('placeholder', '텍스트 입력')
})

test('input에 값 입력시 렌더링 되어야 합니다.', () => {
  render(<Input label='제목' placeholder='텍스트 입력' />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: '할일1' } })
  expect(screen.getByTestId('input')).toHaveDisplayValue('할일1')
})
