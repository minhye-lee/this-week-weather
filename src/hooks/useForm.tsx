import React, { useCallback, useState } from 'react'
import { FormValidateProps } from 'utils/formValidate'

interface Props<T> {
  initialValues: T
  onSubmit: Function
  validate: Function
}

export function useForm<T>({ initialValues, onSubmit, validate }: Props<T>) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FormValidateProps>({})

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setValues((values) => ({ ...values, [name]: value }))
  }, [])

  const handleSubmit = useCallback(() => {
    const errors = validate(values)
    setErrors(validate(values))

    if (Object.keys(errors).length === 0) {
      onSubmit(values)
    }
  }, [onSubmit, validate, values])

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}
