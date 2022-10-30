/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import TextArea from 'components/TextArea/TextArea'
import Top01 from 'components/Top/Top01'
import { Header } from 'constants/style'
import { useForm } from 'hooks/useForm'
import useQuery from 'hooks/useQuery'
import { useRouter } from 'hooks/useRouter'
import { useCallback } from 'react'
import FormValidation from 'utils/formValidate'
import { findTodoItem, setTodoItem } from 'utils/localStorageUtils'

function Edit() {
  const router = useRouter()
  const query = useQuery()
  const initialValues = query.get('id')
    ? findTodoItem(query.get('id') as string)
    : {
        id: '',
        title: '',
        content: '',
        isDone: false,
        dueDate: '',
      }

  const onSubmit = useCallback(
    (values: Todo) => {
      setTodoItem(values)
      alert('완료되었습니다!')
      router.push('/home')
    },
    [router]
  )

  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues,
    onSubmit,
    validate: FormValidation,
  })

  return (
    <>
      <Header>
        <Top01>To-Do</Top01>
      </Header>
      <main
        css={css`
          height: calc(100vh - 160px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <Input
          data-testid='inputTitle'
          label='제목'
          placeholder='텍스트 입력'
          name='title'
          onChange={handleChange}
          errorMsg={errors.title}
          value={values.title}
        />
        <TextArea
          data-testid='textAreaContent'
          label='내용'
          placeholder='텍스트 입력'
          name='content'
          onChange={handleChange}
          errorMsg={errors.content}
          value={values.content}
        />
        <Input
          data-testid='inputDueDate'
          label='Due Date (Option)'
          placeholder='날짜 입력(YYYY-MM-DD)'
          name='dueDate'
          onChange={handleChange}
          errorMsg={errors.dueDate}
          value={values.dueDate}
        />
        <Button data-testid='saveBtn' onClick={handleSubmit}>
          저장 버튼
        </Button>
      </main>
    </>
  )
}

export default Edit
