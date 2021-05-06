<template>
    <div class="container">
        <div v-if="!authed">
            <div class="row text-center" style="margin-top:15%">
                <p class="h2" style="font-weight:600">Чтобы узнать рекомендации, пройдите тестирование</p>
            </div>
            <div class="row justify-content-center mt-5">
                <a href="" class="btn backbtn" style="background:#11B46F;">
                    Перейти
                <a href="" style="background-image:../assets/ChevronRightOutline.svg;width:6%;color:white"></a>
                </a>
                
            </div>
        </div>
        <div v-if="authed">
            <div class="row" >
                <p class="h2" style="font-weight:600">Ежедневные советы</p>
            </div>
            <div class="row mt-4">
                <div class="col-sm" v-for="(sovet,index) in sovets" :key="index">
                    <div class="card text-white" style="border-radius:40%;width:18rem">
                        <img :src="sovet.img" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <a href="" class="card-title d-flex justify-content-end" style="color:white"> <img style="width:12%" src="../assets/whiteRight.svg" alt=""> </a>
                            <p class="card-text" style="margin-top:54%;margin-left:2%;font-size:1.4rem;font-weight: 550;width:12rem"> {{sovet.text}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top:5%">
                <p class="h2" style="font-weight:600">Специалисты рассказывают</p>
            </div>
            <div class="row mt-4 mb-5">
                <div class="col-sm" v-for="(specialist,index) in specialisti" :key="index">
                    <div class="card text-white " style="border-radius:40%;width:38rem">
                        <img :src="specialist.img" class="card-img" alt="...">
                        <div class="card-img-overlay row position:relative" >
                            <div class="row rounded video-time">
                                <div class="col-sm-2">
                                    <img src="../assets/clock.svg" style="width:1.1rem" alt="">
                                </div>
                                <div class="col-sm">
                                    <p>10:54</p>
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            authed: false,
            sovets:[{img:require('../assets/cardpic.svg'),text:'Ограничьте курение и употребление алкоголя'},
                    {img:require('../assets/cardpic2.svg'),text:'Питаться сбалансированои пить достаточно воды'},
                    {img:require('../assets/cardpic.svg'),text:'Ограничьте курение и употребление алкоголя'},
                    {img:require('../assets/cardpic2.svg'),text:'Питаться сбалансированои пить достаточно воды'}],
            specialisti:[
                {img:require('../assets/cardpic3.svg'),text:'Как пройти обследование?'},
                {img:require('../assets/cardpic3.svg'),text:'Как пройти обследование?'}
            ]
        }
    },
    created(){
        if(localStorage.getItem("token")!=null){
            this.authed = true;
        }
  }
}
</script>

<style scoped>
.backbtn{
    width:15%;
    padding-top:1%;
    padding-bottom:1%;
    color:white;
    font-weight: 550;
}
.video-time{
    top:18rem;
    left:3rem;
    position:absolute;
    opacity:0.5;
    background-color:black;
    width:19%; height:7%;
}
</style>