import classNames from 'classnames'
import { Button } from 'components/Button'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

type Props = {
  title: string
}

export const Result: FC<Props> = ({ title }) => {
  const result = useSelector<RootState, RootState['result']>(
    (state) => state.result
  )
  const resultStatus = result === 'ok' ? 'Успешно' : 'Ошибка'

  const message = useSelector<RootState, RootState['message']>(
    (state) => state.message
  )

  const getMessageClass = classNames('form__message', {
    form__message__error: resultStatus === 'Ошибка',
  })

  return (
    <>
      <div className='subHeader'>{title}</div>
      <div className='form__wrapper'>
        <div className='form__header'>{resultStatus}</div>
        <div className={getMessageClass}>{message}</div>
      </div>
      <Button title='Новый рассчёт' />
    </>
  )
}
