<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="m-3">Cars</h1>
            </div>
        </div>
    </div>
    
</template>




<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'

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
    
        }
    }
}
</script>


<style lang="scss" scoped>

</style>