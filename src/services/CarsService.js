import { AppState } from "../AppState.js"
import { Cars } from "../models/Cars.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CarsService {
    async getCars() {
        const response = await api.get('api/cars')
        logger.log('FOUND CARS', response.data)
        const newCars = response.data.map(carPoJO => new Cars(carPoJO))
        AppState.cars = newCars
    }
    
    async getCarById(carId) {
        const response = await api.get(`api/cars/${carId}`)
        logger.log("got car by id", response.data)
        const newCar = new Cars(response.data)
        AppState.activeCar = newCar
    }
}

export const carsService = new CarsService()