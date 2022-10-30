import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ToDoItem from './ToDoItem'

test('성공적으로 렌더링 되어야 합니다', () => {
  render(<ToDoItem id={'1'} title={'할일1'} isDone={false} onCheck={() => {}} onClick={() => {}} />)
  expect(screen.getByText(/할일1/)).toBeInTheDocument()
})

test('dueDate가 있으면 렌더링 되어야합니다.', () => {
  render(
    <ToDoItem id={'1'} title={'할일2'} isDone={false} onCheck={() => {}} dueDate={'2022.08.22'} onClick={() => {}} />
  )
  expect(screen.getByText(/due date: 2022.08.22/)).toBeInTheDocument()
})

test('isDone이 true일때 체크박스가 checked 되어야 합니다.', () => {
  render(
    <ToDoItem id={'1'} title={'할일3'} isDone={true} onCheck={() => {}} dueDate={'2022.08.22'} onClick={() => {}} />
  )
  expect(screen.getByTestId('toDoItemCheckbox')).toBeChecked()
})

test('체크박스 클릭시 onCheck가 실행되어야 합니다.', () => {
  const doneChange = jest.fn()
  render(<ToDoItem id={'1'} title={'할일4'} isDone={false} onCheck={doneChange} onClick={() => {}} />)
  fireEvent.click(screen.getByTestId('toDoItemCheckbox'))
  expect(doneChange).toBeCalled()
})

test('완료된 투두 항목의 제목은 strike 스타일로 변경됩니다.', () => {
  render(
    <ToDoItem id={'1'} title={'할일5'} isDone={true} onCheck={() => {}} dueDate={'2022.08.01'} onClick={() => {}} />
  )
  expect(screen.getByTestId('todoItemLabel')).toHaveStyle({ textDecoration: 'line-through' })
})

test('dueDate가 오늘 또는 그 이전인 경우 폰트 컬러가 red로 변경됩니다.', () => {
  render(
    <ToDoItem id={'1'} title={'할일5'} isDone={false} onCheck={() => {}} dueDate={'2022.08.01'} onClick={() => {}} />
  )
  expect(screen.getByTestId('todoItemDueDate')).toHaveStyle({ color: 'red' })
  expect(screen.getByTestId('todoItemLabel')).toHaveStyle({ color: 'red' })
})
