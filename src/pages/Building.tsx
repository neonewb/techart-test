import React, { FC, useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { setFormData } from 'sessionStorage/setFormData'
import { Button } from 'components/Button'
import { Building, selectBuilding, store } from 'store/store'

type Props = {
  title: string
  step: number
}

export const BuildingPage: FC<Props> = ({ title, step }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const state = store.getState()

  const handleBuilding = useCallback(
    (building: Building) => {
      setFormData({ ...state, building })
      dispatch(selectBuilding(building))
      history.push({
        ...location,
        state: {
          step: building === Building.house ? 2 : 3,
        },
      })
    },
    [history, location, dispatch, state]
  )

  const getClass = (building: Building) => {
    return classNames('form__link', {
      form__link__active: state.building === building,
    })
  }

  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <ul className='form__list'>
          <li>
            <button
              className={getClass(Building.house)}
              onClick={() => handleBuilding(Building.house)}>
              Жилой дом
            </button>
          </li>
          <li>
            <button
              className={getClass(Building.garage)}
              onClick={() => handleBuilding(Building.garage)}>
              Гараж
            </button>
          </li>
        </ul>
      </div>

      <Button title='Отмена' />
      <Button title='Далее' step={step} />
    </>
  )
}
