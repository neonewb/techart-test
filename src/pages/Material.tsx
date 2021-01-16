import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { setFormData } from 'sessionStorage/setFormData'
import { Button } from 'components/Button'
import { Building, Material, selectMaterial, store } from 'store/store'
import classNames from 'classnames'

type Props = {
  title: string
  step: number
}

export const MaterialPage: FC<Props> = ({ title, step }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const state = store.getState()

  const handleMaterial = (material: Material) => {
    setFormData({ ...state, material })
    dispatch(selectMaterial(material))
    history.push({
      ...location,
      state: {
        step: 4,
      },
    })
  }

  const getClass = (material: Material) => {
    return classNames('form__link', {
      form__link__active: state.material === material,
    })
  }

  return (
    <>
      <div className='form__wrapper'>
        <div className='form__header'>{title}</div>
        <ul className='form__list'>
          {state.building === Building.house && (
            <>
              <li>
                <button
                  className={getClass(Material.brick)}
                  onClick={() => handleMaterial(Material.brick)}>
                  Кирпич
                </button>
              </li>
              <li>
                <button
                  className={getClass(Material.woodenBar)}
                  onClick={() => handleMaterial(Material.woodenBar)}>
                  Деревянный брус
                </button>
              </li>
            </>
          )}

          {state.building === Building.garage && (
            <>
              <li>
                <button
                  className={getClass(Material.metal)}
                  onClick={() => handleMaterial(Material.metal)}>
                  Металл
                </button>
              </li>
              <li>
                <button
                  className={getClass(Material.sandwichPanel)}
                  onClick={() => handleMaterial(Material.sandwichPanel)}>
                  Сендвич-панели
                </button>
              </li>
            </>
          )}

          <li>
            <button
              className={getClass(Material.slagBlock)}
              onClick={() => handleMaterial(Material.slagBlock)}>
              Шлакоблок
            </button>
          </li>
        </ul>
      </div>

      <Button title='Отмена' />
      <Button title='Назад' />
      <Button title='Далее' step={step} />
    </>
  )
}
