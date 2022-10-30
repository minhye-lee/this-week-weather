import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import * as routerHooks from 'hooks/useRouter'
import * as formHooks from 'hooks/useForm'

import Edit from '../Edit/Edit'

describe('Title을 렌더링 합니다.', () => {
  it('Title : "To-Do"가  렌더링 됩니다.', () => {
    render(<Edit />, { wrapper: MemoryRouter })
    expect(screen.getByText(/To-Do/)).toBeInTheDocument()
  })
})

describe('제목과 내용, DueDate에 텍스트를 입력할 수 있습니다.', () => {
  it('제목에 텍스트를 입력할 수 있습니다.', () => {
    render(<Edit />, { wrapper: MemoryRouter })
    fireEvent.change(screen.getByTestId('inputTitle'), { target: { value: '할일 제목입니다' } })
    expect(screen.getByTestId('inputTitle')).toHaveDisplayValue('할일 제목입니다')
  })

  it('내용에 텍스트를 입력할 수 있습니다.', () => {
    render(<Edit />, { wrapper: MemoryRouter })
    fireEvent.change(screen.getByTestId('textAreaContent'), { target: { value: '할일 내용입니다' } })
    expect(screen.getByTestId('textAreaContent')).toHaveDisplayValue('할일 내용입니다')
  })

  it('Due Date에 텍스트를 입력할 수 있습니다.', () => {
    render(<Edit />, { wrapper: MemoryRouter })
    fireEvent.change(screen.getByTestId('inputDueDate'), { target: { value: '2022-08-30' } })
    expect(screen.getByTestId('inputDueDate')).toHaveDisplayValue('2022-08-30')
  })
})

it('저장 버튼을 선택하면, 작성한 내용이 반영되고, 목록 화면으로 이동합니다.', () => {
  const push = jest.fn()
  const handleSubmit = jest.fn()
  jest.spyOn(routerHooks, 'useRouter').mockImplementation(() => ({ goBack: () => {}, push }))
  jest.spyOn(formHooks, 'useForm').mockImplementation(() => ({
    values: { id: '1', title: '할일1', content: '할일내용입니다', isDone: true, dueDate: '' },
    errors: {},
    handleChange: jest.fn(),
    handleSubmit,
  }))

  render(<Edit />, { wrapper: MemoryRouter })
  fireEvent.click(screen.getByTestId('saveBtn'))
  expect(handleSubmit).toBeCalled()
})
