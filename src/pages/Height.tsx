import { Button } from 'components/Button'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from 'sessionStorage/setFormData'
import { RootState, setHeight, store } from 'store/store'

type Props = {
  title: string
  step: number
}

export const Height: FC<Props> = ({ title, step }) => {
  const dispatch = useDispatch()
  const height = useSelector<RootState, RootState['height']>(
    (state) => state.height
  )
  const state = store.getState()

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...state, height: +e.target.value })
    dispatch(setHeight(+e.target.value))
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select()

  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <input
          autoFocus
          onFocus={handleFocus}
          onChange={handleHeight}
          value={height}
          className='inputNum'
          type='number'
        />
      </div>

      <Button title='Отмена' />
      <Button title='Назад' />
      <Button title='Далее' step={step} />
    </>
  )
}
