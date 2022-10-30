export interface FormValidateProps {
  title?: string
  content?: string
  dueDate?: string
}

export default function FormValidation({ title, content, dueDate }: FormValidateProps) {
  const errors: FormValidateProps = {}
  if (!title) errors.title = '제목이 입력되지 않았습니다.'

  if (!content) errors.content = '내용이 입력되지 않았습니다.'

  if (dueDate && !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(dueDate)) {
    errors.dueDate = '입력된 날짜가 유효하지 않습니다. (YYYY-MM-DD)'
  }
  return errors
}
