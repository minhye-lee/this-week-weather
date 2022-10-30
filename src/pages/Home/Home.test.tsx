import { screen, render, fireEvent } from '@testing-library/react'
import * as hooks from 'hooks/useRouter'
import * as todos from 'utils/localStorageUtils'

import { MemoryRouter } from 'react-router-dom'
import Home from '../Home/Home'

const todoData = [
  { id: '1', title: '할일1', content: '할일내용입니다', isDone: true, dueDate: '' },
  { id: '2', title: '할일2', content: '할일내용입니다', isDone: false, dueDate: '' },
]

describe('Title과 Subtitle을 렌더링 합니다.', () => {
  it('Title : "THIS WEEK"이 렌더링 됩니다.', () => {
    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByText(/THIS WEEK/)).toBeInTheDocument()
  })

  it('Subtitle : "신나는 일주일을 계획합시다!"가 렌더링 됩니다.', () => {
    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByText(/신나는 일주일을 계획합시다!/)).toBeInTheDocument()
  })
})

it('추가 버튼을 선택하면 투두 생성 페이지로 이동합니다.', () => {
  const push = jest.fn()
  jest.spyOn(hooks, 'useRouter').mockImplementation(() => ({ goBack: () => {}, push }))

  render(<Home />, { wrapper: MemoryRouter })
  fireEvent.click(screen.getByTestId('addBtn'))
  expect(push).toBeCalledWith('/edit')
})

describe('저장된 투두 항목이 1개 이상 있으면 리스트를 노출합니다.', () => {
  it('1개 이상 있으면 노출 합니다.', () => {
    jest.spyOn(todos, 'getTodos').mockImplementation(() => todoData)

    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByTestId('list')).toBeInTheDocument()
  })

  it('0개 있으면 노출하지 않습니다.', () => {
    jest.spyOn(todos, 'getTodos').mockImplementation(() => [])

    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.queryByTestId('list')).not.toBeInTheDocument()
  })
})

it('투두 항목을 선택하면 편집화면으로 이동합니다.', () => {
  const push = jest.fn()
  jest.spyOn(hooks, 'useRouter').mockImplementation(() => ({ goBack: () => {}, push }))
  jest.spyOn(todos, 'getTodos').mockImplementation(() => todoData)

  render(<Home />, { wrapper: MemoryRouter })
  fireEvent.click(screen.getByTestId(`todoItem-${todoData[0].id}`))

  expect(push).toBeCalledWith('/edit', { id: todoData[0].id })
})
