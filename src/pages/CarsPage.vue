<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="m-3">Cars</h1>
            </div>
        </div>
        
        <section class="row">
            <div class="col-12">
                {{ cars }}
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

</style>