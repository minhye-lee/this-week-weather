import React from 'react'
import { render, screen } from '@testing-library/react'
import List from './List'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(
    <List>
      <List.Row left={<div>목록</div>} right={<div>테스트</div>} />
    </List>
  )
  expect(screen.getByText(/목록/)).toBeInTheDocument()
  expect(screen.getByText(/테스트/)).toBeInTheDocument()
})
