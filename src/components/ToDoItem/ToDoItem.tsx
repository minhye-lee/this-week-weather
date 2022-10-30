import styled from '@emotion/styled'
import React from 'react'
import colors from 'constants/colors'
import moment from 'moment'

interface Props {
  isDone: boolean
  title: string
  id: string
  onCheck: () => void
  onClick: () => void
  dueDate?: string
}

function ToDoItem({ isDone, title, id, onCheck, onClick, dueDate }: Props) {
  const isDue = !isDone && dueDate ? moment(dueDate, 'YYYY.MM.DD').isSameOrBefore(moment()) : false
  return (
    <Container isDue={isDue} isDone={isDone} onClick={onClick} data-testid={`todoItem-${id}`}>
      <section>
        <input
          type='checkbox'
          data-testid='toDoItemCheckbox'
          checked={isDone}
          onClick={(e) => e.stopPropagation()}
          onChange={onCheck}
        />
        <label data-testid='todoItemLabel'>{title}</label>
      </section>
      {dueDate && (
        <section>
          <span data-testid='todoItemDueDate'>due date: {dueDate}</span>
        </section>
      )}
    </Container>
  )
}

export default ToDoItem

export const Container = styled.span<{ isDue: boolean; isDone: boolean }>`
  input {
    position: relative;
    width: 18px;
    height: 18px;
    background-color: white;
    vertical-align: middle;
    border: 1.5px solid ${colors.grey900};
    background-color: ${colors.white};

    border-radius: 50vh;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    &:checked {
      background-color: ${colors.black};
    }
  }

  label {
    position: relative;
    font-size: 18px;
    color: ${(props) => (props.isDue ? colors.red : colors.black)};
    padding-left: 10px;
    text-decoration: ${(props) => (props.isDone ? 'line-through' : '')};
  }

  span {
    padding-left: 28px;
    color: ${(props) => (props.isDue ? colors.red : colors.grey600)};
  }
`
