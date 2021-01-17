import axios from 'axios'
import { apiResponse, RootState } from 'store/store'

const axiosInstance = axios.create({
  baseURL: 'https://data.techart.ru/lab/json/',
})

export const apiFetchPrice = async (
  building: RootState['building'],
  height: RootState['height'],
  material: RootState['material'],
  sizex: RootState['sizex'],
  sizey: RootState['sizey']
): Promise<apiResponse> => {
  const response = await axiosInstance.get(
    `?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`
  )
  return response.data
}
