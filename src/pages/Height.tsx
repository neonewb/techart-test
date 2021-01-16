import { Button } from 'components/Button'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setHeight } from 'store/store'

type Props = {
  title: string
  step: number
}

export const Height: FC<Props> = ({ title, step }) => {
  const dispatch = useDispatch()
  
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeight(+e.target.value))
  }

  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <input
          onChange={handleHeight}
          // value={height}
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
