/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from 'components/Button/Button'
import List from 'components/List/List'
import Slider from 'components/Slider/Slider'
import ToDoItem from 'components/ToDoItem/ToDoItem'
import Top01 from 'components/Top/Top01'
import Top02 from 'components/Top/Top02'
import { Header } from 'constants/style'
import useFetch from 'hooks/useFetch'
import { useRouter } from 'hooks/useRouter'
import { useEffect, useRef, useState } from 'react'
import { getTodos, setTodoListToLocalStorage } from 'utils/localStorageUtils'
import { fetchThisWeekWeather, getISODay } from 'utils/weatherUtil'
function Home() {
  const router = useRouter()
  const [todos, setTodos] = useState<Todo[]>(getTodos())
  const { loading, data: weathers, error } = useFetch({ fetchFn: fetchThisWeekWeather })
  const weekRefs = useRef<HTMLElement[]>([])

  /* todos가 변할 때 로컬 스토리지에 저장합니다. */
  useEffect(() => {
    setTodoListToLocalStorage(todos)
  }, [todos])

  /* 현재 요일이 보이게 스크롤합니다. */
  useEffect(() => {
    if (weathers) {
      const today = getISODay()
      weekRefs.current[today].scrollIntoView({ inline: 'start' })
    }
  }, [weathers])

  const onCheckTodo = (id: string) => {
    const newTodos = todos.map((todo: Todo) => {
      if (id === todo.id) return { ...todo, isDone: !todo.isDone }
      else return todo
    })

    setTodos(newTodos)
  }

  const onDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo: Todo) => id !== todo.id)
    setTodos(newTodos)
  }

  return (
    <>
      <Header>
        <Top01>THIS WEEK</Top01>
        <span>신나는 일주일을 계획합시다!</span>
      </Header>
      <main
        css={css`
          height: calc(100vh - 160px);
          display: flex;
          flex-direction: column;
        `}
      >
        <section
          css={css`
            margin-bottom: 25px;
          `}
        >
          <Top02>이번주 날씨</Top02>
          <Slider>
            {loading ? (
              <div>날씨 정보를 불러오고 있습니다!</div>
            ) : error ? (
              <div>에러가 발생하였습니다.</div>
            ) : weathers ? (
              weathers.map((weather, idx) => (
                <Slider.Item key={idx} ref={(el) => (weekRefs.current[idx] = el as HTMLElement)}>
                  <p>{weather.date}</p>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.weather} />
                  <p>{weather.temp}도</p>
                </Slider.Item>
              ))
            ) : null}
          </Slider>
        </section>
        <section>
          <Top02>이번주 To-Do</Top02>
          <Button data-testid='addBtn' onClick={() => router.push('/edit')}>
            추가 버튼
          </Button>
          {todos.length ? (
            <List>
              {todos.map((todo: Todo) => (
                <List.Row
                  key={todo.id}
                  left={
                    <ToDoItem
                      id={todo.id}
                      title={todo.title}
                      onCheck={() => onCheckTodo(todo.id)}
                      onClick={() => router.push('/edit', { id: todo.id })}
                      isDone={todo.isDone}
                      dueDate={todo.dueDate}
                    />
                  }
                  right={<span onClick={() => onDeleteTodo(todo.id)}>X</span>}
                />
              ))}
            </List>
          ) : null}
        </section>
      </main>
    </>
  )
}

export default Home
