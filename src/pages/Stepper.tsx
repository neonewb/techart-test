import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { clearFormData } from 'sessionStorage/clearFormData'

import { BuildingPage } from './Building'
import { Height } from './Height'
import { MaterialPage } from './Material'
import { Size } from './Size'
import { Result } from './Result'
import { RootState, setState } from 'store/store'
import { getFormData } from 'sessionStorage/getFormData'
import { useDispatch } from 'react-redux'

const TABS = [
  {
    component: BuildingPage,
    title: 'Что будем строить?',
  },
  {
    component: Height,
    title: 'Количество этажей (число)',
  },
  {
    component: MaterialPage,
    title: 'Материал стен:',
  },
  {
    component: Size,
    title: 'Длина стен (в метрах)',
  },
  {
    component: Result,
    title: 'Результат расчёта',
  },
] as const

export const Stepper = () => {
  const { state = { step: 1 } } = useLocation<{ step: number }>()

  const tab = TABS[state.step - 1]

  const [initState] = useState<RootState>(getFormData())
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(initState).length !== 0) {
      dispatch(setState(initState))
    }
  }, [initState, dispatch])

  useEffect(() => {
    return () => {
      clearFormData()
    }
  }, [])

  return (
    <div>
      <div className='header'>Калькулятор цены конструкций</div>
      {state.step < 5 && <div className='subHeader'>Шаг {state.step}</div>}
      {tab && <tab.component title={tab.title} step={state.step} />}
    </div>
  )
}
