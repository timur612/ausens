<template>
    <div class="container">
        <div v-if="!authed">
            <div class="row text-center" style="margin-top:15%">
                <p class="h2" style="font-weight:600">Чтобы узнать рекомендации, пройдите тестирование</p>
            </div>
            <div class="row justify-content-center mt-5">
                <router-link to="/registration" class="btn backbtn" style="background:#11B46F;">
                    Перейти
                    <a href="" style="background-image:../assets/ChevronRightOutline.svg;width:6%;color:white"></a>
                </router-link>
                
            </div>
        </div>
        <div v-if="authed">
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="padding:2rem">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">Ограничьте курение и употребление алкоголя</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="lead">
                        Первичная профилактика – предотвращение развития заболевания, вторичная профилактика – предотвращение осложнений сердечно-сосудистых заболеваний (например, повторных инфарктов миокарда или инсульта).
                        Вторичная профилактика ССЗ – это комплекс мер по предупреждению осложнений и смертельных случаев ССЗ, включая наиболее полную коррекция факторов риска и лечение пациентов, уже имеющих ССЗ. Профилактические мероприятия у данной категории лиц должны проводиться наиболее агрессивно[22]. Вторичная профилактика ССЗ осуществляется на двух этапах:
                        в рамках диспансерного наблюдения за больными ССЗ врачами-кардиологами и врачами участковой службы в организациях первичной медико-санитарной помощи;
                        путем оказания специализированной, в том числе высокотехнологичной, медицинской помощи, проведения медицинской реабилитации и санаторно-курортного лечения.
                        Всем пациентам с ССЗ для достижения безрецидивного течения и профилактики осложнений должны быть проведены
                        своевременная консультация врача-специалиста,
                        обследование на наличие показаний к специализированному лечению,
                        специализированное, в том числе высокотехнологичное лечение при наличии показаний к его проведению,
                        профилактическое консультирование и коррекция устранимых факторов риска в стационаре в процессе (до или сразу после) специализированного (высокотехнологичного) вмешательства с участием врача, осуществляющего это вмешательство для повышения мотивации пациента к коррекции выявленных факторов риска и ведению здорового образа жизни,
                        медицинская реабилитация.
                    </p>
                </div>
                </div>
            </div>
            </div>

            <div class="row" >
                <p class="h2" style="font-weight:600">Ежедневные советы</p>
            </div>
            <div class="row mt-4">
                <div class="col-sm" v-for="(sovet,index) in sovets" :key="index">
                    <div class="card text-white" style="border-radius:40%;width:18rem">
                        <img :src="sovet.img" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card-title d-flex justify-content-end" style="color:white"> <img style="width:12%" src="../assets/whiteRight.svg" alt=""> </a>
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