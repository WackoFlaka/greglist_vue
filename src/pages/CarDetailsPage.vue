<template>
    <h1>Car Details</h1>
</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';

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
    
return{}
}
}
</script>


<style lang="scss" scoped>

</style>