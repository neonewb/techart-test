import { setFormData } from './../sessionStorage/setFormData'
import {
  createSlice,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { apiFetchPrice } from 'api/api'

export enum Building {
  none,
  house,
  garage,
}

export enum Material {
  none,
  brick,
  slagBlock,
  woodenBar,
  metal,
  sandwichPanel,
}

export type apiResponse = {
  result: 'ok' | 'error'
  message: string
}

const initialState = {
  building: Building.none,
  height: 0,
  material: Material.none,
  sizex: 0,
  sizey: 0,
  result: null as apiResponse['result'] | null,
  message: null as apiResponse['message'] | null,
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      state.building = payload.building
      state.height = payload.height
      state.material = payload.material
      state.sizex = payload.sizex
      state.sizey = payload.sizey
      state.result = payload.result
      state.message = payload.message
    },
    clearStore: (state) => {
      state.building = Building.none
      state.material = Material.none
      state.height = 0
      state.sizex = 0
      state.sizey = 0
      state.result = null
      state.message = null
    },
    selectBuilding: (state, { payload }: PayloadAction<Building>) => {
      state.building = payload
    },
    selectMaterial: (state, { payload }: PayloadAction<Material>) => {
      state.material = payload
    },
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.height = payload
    },
    setSize: (
      state,
      { payload }: PayloadAction<{ name: 'sizex' | 'sizey'; num: number }>
    ) => {
      state[payload.name] = payload.num
    },
    setResponse: (state, { payload }: PayloadAction<apiResponse>) => {
      state.result = payload.result
      state.message = payload.message
    },
  },
})

export const {
  setState,
  clearStore,
  selectBuilding,
  selectMaterial,
  setHeight,
  setSize,
  setResponse,
} = stepperSlice.actions

export const store = configureStore({
  reducer: stepperSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export const fetchPrice = (): AppThunk => async (dispatch, getState) => {
  const state = getState()
  try {
    const res = await apiFetchPrice(
      state.building,
      state.height,
      state.material,
      state.sizex,
      state.sizey
    )
    dispatch(setResponse({ result: res.result, message: res.message }))
    setFormData({ ...state, result: res.result, message: res.message })
  } catch (err) {
    dispatch(
      setResponse({
        result: 'error',
        message: 'Что-то пошло не так, попробуйте снова',
      })
    )
    setFormData({
      ...state,
      result: 'error',
      message: 'Что-то пошло не так, попробуйте снова',
    })
  }
}
