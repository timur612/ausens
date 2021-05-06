<template>
    <div class="container">
        <div class="row">
            <p class="h2" style="font-weight:600">Тренировки для вас</p>
        </div>
        <div class="row mt-4">
                <div class="col-sm" v-for="(specialist,index) in specialisti" :key="index">
                    <div class="card text-white " style="border-radius:40%;width:38rem">
                        <img :src="specialist.img" class="card-img" alt="...">
                        <div class="card-img-overlay row position:relative" >
                            <div class="row rounded video-time">
                                <div class="col-sm-2">
                                    <img src="../assets/clock.svg" style="width:1.1rem" alt="">
                                </div>
                                <div class="col-sm">
                                    <p> {{specialist.time}} </p>
                                </div>
                            </div>
                            <div class="row" style="margin-top:52%;">
                                <div class="col-sm-8">
                                    <p class="card-text" style="margin-left:2%;font-size:1.4rem;font-weight: 550;"> {{specialist.text}} </p>
                                </div>
                                <div class="col-sm">
                                    <router-link to="video" class="card-title d-flex justify-content-end" style="color:white"> <img style="width:16%" src="../assets/whiteRight.svg" alt=""> </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router'
export default {
    data(){
        return{
            specialisti:[
                {img:require('../assets/cardpic4.svg'),text:'Легкая пробежка утром',time:"15:44"},
                {img:require('../assets/cardpic4.svg'),text:'Легкая пробежка утром',time:"15:44"}
            ]
        }
    },
    methods:{
        goTo(){
            this.$router.push({ path: 'video', query: { id: 'CJbDakXf8rw' } })
        }
    }
}
</script>

<style scoped>
.video-time{
    top:18rem;
    left:3rem;
    position:absolute;
    opacity:0.5;
    background-color:black;
    width:19%; height:7%;
}
</style>