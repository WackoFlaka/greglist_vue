<template>
    <div class="container">
        <section class="row">
            <div class="col-12">
                <h1 class="my-3">Car Details</h1>
            </div>
        </section>
        
        <section class="row" v-if="car">
            <div class="col-12">
                <h2>Make: {{ car.make }} Model: {{ car.model }}</h2>
                <h3>Year: {{ car.year }}</h3>
                <h3>Listed by: {{ car.creator.name }}</h3>
                <img :src="car.imgUrl" :alt="car.make + ' ' + car.model">
                <p>{{ car.description }}</p>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js'

export default {
setup(){
    
    const route = useRoute()
    
    async function getCarById() {
        try {
            const carId = route.params.carId
            await carsService.getCarById(carId)
        } catch (error) {
            Pop.error(error)
        }
    }
    
    onMounted(() => {
        /* console.log('Mounted details page');
        logger.log('Route information', route)
        logger.log('Id from route', route.params.carId) */
        getCarById()
    })
    
return{
    car: computed(() => AppState.activeCar)
}
}
}
</script>


<style lang="scss" scoped>
    img {
        max-height: 40vh;
    }
</style>