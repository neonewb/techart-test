import { Button } from 'components/Button'
import React, { FC } from 'react'

type Props = {
  title: string
}

export const Result: FC<Props> = ({ title }) => {
  return (
    <>
      <div className='subHeader'>{title}</div>
      <div className='form__wrapper'>
        <div className='form__header'></div>
      </div>
      <Button title='Новый рассчёт' />
    </>
  )
}
