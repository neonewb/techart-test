import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { clearFormData } from 'sessionStorage/clearFormData'
import { clearStore, fetchPrice } from 'store/store'

type Props = {
  title: string
  step?: number
}

export const Button: FC<Props> = ({ title, step }) => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  function handleClick() {
    switch (title) {
      case 'Отмена':
      case 'Новый рассчёт':
        clearFormData()
        dispatch(clearStore())
        history.push({
          ...location,
          state: {
            step: 1,
          },
        })
        break
      case 'Далее':
        if (step) {
          history.push({
            ...location,
            state: {
              step: ++step,
            },
          })
        }
        break
      case 'Рассчитать':
        if (step) {
          history.push({
            ...location,
            state: {
              step: ++step,
            },
          })
        }
        dispatch(fetchPrice())
        break
      case 'Назад':
        history.goBack()
        break

      default:
        break
    }
  }

  return (
    <button className='button' onClick={handleClick}>
      {title}
    </button>
  )
}
