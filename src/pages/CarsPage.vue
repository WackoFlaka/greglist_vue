<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="m-3">Cars</h1>
            </div>
        </div>
        
        <section class="row">
            <div class="col-md-4 car-card mb-5" v-for="car in cars" :key="car.id">
                <CarCard :carProp="car"/>
            </div>
        </section>
    </div>
    
</template>




<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'
import CarCard from '../components/CarCard.vue';

export default {
    setup() {
        async function getCars() {
            try {
                await carsService.getCars();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            console.log('Page is mounted');
            getCars();
        });
        return {
            cars: computed(() => AppState.cars)
        };
    },
    components: { CarCard }
}
</script>


<style lang="scss" scoped>

    
    .car-card {
        position: relative;
    }
    
</style>