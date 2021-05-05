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
                <p class="h2" style="font-weight:600">Еждневные советы</p>
            </div>
            <div class="row" v-for="(sovet,index) in sovets" :key="index">
                <div class="col-sm">
                    sovet
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
            sovets:['1 совет','2 совет','3 совет']
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
</style>