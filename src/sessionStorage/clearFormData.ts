import { STEPPER_FORM_DATA_KEY } from 'constant'

export const clearFormData = () => {
  sessionStorage.removeItem(STEPPER_FORM_DATA_KEY)
}
