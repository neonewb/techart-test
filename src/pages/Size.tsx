import { Button } from 'components/Button'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from 'sessionStorage/setFormData'
import { RootState, setSize, store } from 'store/store'

type Props = {
  title: string
  step: number
}

export const Size: FC<Props> = ({ title, step }) => {
  const dispatch = useDispatch()
  const sizex = useSelector<RootState, number>((state) => state.sizex)
  const sizey = useSelector<RootState, number>((state) => state.sizey)
  const state = store.getState()

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as 'sizex' | 'sizey'
    setFormData({ ...state, [name]: +e.target.value })
    dispatch(setSize({ name, num: +e.target.value }))
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select()

  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <div className='inputSize'>
          <input
            autoFocus
            onChange={handleSize}
            onFocus={handleFocus}
            value={sizex}
            name='sizex'
            className='inputNum'
            type='number'
          />{' '}
          X
          <input
            onChange={handleSize}
            onFocus={handleFocus}
            value={sizey}
            name='sizey'
            className='inputNum'
            type='number'
          />
        </div>
      </div>

      <Button title='Отмена' />
      <Button title='Назад' />
      <Button title='Рассчитать' step={step} />
    </>
  )
}
