import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

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

const initialState = {
  building: Building.none,
  height: 0,
  material: Material.none,
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      state.building = payload.building
      state.height = payload.height
      state.material = payload.material
    },
    clearStore: (state) => {
      state.building = Building.none
      state.material = Material.none
      state.height = 0
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
  },
})

export const {
  setState,
  clearStore,
  selectBuilding,
  selectMaterial,
  setHeight,
} = stepperSlice.actions

export const store = configureStore({
  reducer: stepperSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
