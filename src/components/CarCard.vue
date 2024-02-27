<template>
    <img :src="carProp.imgUrl" :alt="carProp.make + ' ' + carProp.model" class="img-fluid" role="button">
        <div class="car-title">
            <p class="fs-4 mb-1 ms-3">{{ carProp.make }} {{ carProp.model }}</p>
        </div>
</template>


<script>
import { Carousel } from 'bootstrap';
import { Cars } from '../models/Cars.js';

export default {
    props: {
        carProp: {type: Cars, required: true}
    },
setup(){
return{
    
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
    img:hover {
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
    
    .car-title {
        position: absolute;
        bottom: 0;
        margin: auto;
        color: white;
        text-shadow: 1px 1px 3px black;
    }
</style>