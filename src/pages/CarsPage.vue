<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="m-3">Cars</h1>
            </div>
        </div>
        
        <section class="row">
            <div class="col-md-4 car-card mb-5" v-for="car in cars" :key="car.id">
                <img :src="car.imgUrl" :alt="car.make + ' ' + car.model" class="img-fluid">
                <div class="car-title">
                    <p class="fs-4 mb-1 ms-3">{{ car.make }} {{ car.model }}</p>
                </div>
            </div>
        </section>
    </div>
    
</template>




<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'

export default {
setup(){
    
    async function getCars() {
        try {
            await carsService.getCars()
        } catch (error) {
            Pop.error(error)
        }
    }
    
    onMounted(() => {
        console.log('Page is mounted');
        getCars()
    })
    
return{
    cars: computed(() => AppState.cars)
    }
  }
}
</script>


<style lang="scss" scoped>
    img {
        height: 40vh;
        width: 40vh;
        border-radius: 16px;
        object-fit: cover;
        object-position: center;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        filter: brightness(80%);
    }
    
    .car-card {
        position: relative;
    }
    
    .car-title {
        position: absolute;
        bottom: 0;
        margin: auto;
        color: white;
        text-shadow: 1px 1px 3px black;
    }
</style>