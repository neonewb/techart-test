import { Button } from 'components/Button'
import React, { FC } from 'react'

type Props = {
  title: string
  step: number
}

export const Size: FC<Props> = ({ title, step }) => {
  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <div className='inputSize'>
          <input className='inputNum' type='number' /> X
          <input className='inputNum' type='number' />
        </div>
      </div>

      <Button title='Отмена' />
      <Button title='Назад' />
      <Button title='Рассчитать' step={step} />
    </>
  )
}
