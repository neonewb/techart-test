import { STEPPER_FORM_DATA_KEY } from 'constant'
import { RootState } from 'store/store'

export const setFormData = (formData: RootState) => {
  sessionStorage.setItem(STEPPER_FORM_DATA_KEY, JSON.stringify(formData))
}
