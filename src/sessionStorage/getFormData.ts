import { STEPPER_FORM_DATA_KEY } from 'constant'

export const getFormData = () => {
  const rawFormData = sessionStorage.getItem(STEPPER_FORM_DATA_KEY)

  if (!rawFormData) {
    return {}
  }

  return JSON.parse(rawFormData)
}
