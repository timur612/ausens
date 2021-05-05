<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2">
                <p><a v-on:click="goToUchet" :class="[isUchet ? 'btn_prof_active' : 'btn_prof']">Учетная запись</a></p>
                <p><a v-on:click="goToTest" :class="[isTest ? 'btn_prof_active' : 'btn_prof']">Тестирование</a></p>
                <p><a v-on:click="goToPodpiska" :class="[isPodpiska ? 'btn_prof_active' : 'btn_prof']">Подписка</a></p>
            </div>

            <div class="col-sm-4" v-if="isUchet">
                <p class="h2"> {{name}} </p>
                <p class=""> {{email}} </p>

                <p>
                    <span class="text-muted">Возраст:</span> 64 лет <br>
                    <span class="text-muted">Рост:</span> 170 см <br>
                    <span class="text-muted">Вес:</span> 70 кг
                </p>

                <p style="color:#3E8CBF;font-weight:600">Редактировать</p>
                <p style="color:#3E8CBF;font-weight:600">Выйти</p>              
            </div>

            <div class="col-sm-6" v-if="isTest">
                <p class="h3"> Предрасположенность к болезням: </p>
                <p class="h5 mt-4"> Чтобы узнать рекомендации, пройдите тестирование </p>

                <div class="row mt-5">
                    <div class="col-sm">
                        <p>Сердечно-сосудистые</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <p>Деменция</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 35%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm">
                        <p>Сахарный диабет</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <p>Артрит</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
            isUchet: true,
            isTest: false,
            isPodpiska: false,
            name:'Иванов Иван',
            email:'example@gmail.com'
        }
    },
    methods:{
        goToUchet(){
            this.isUchet = true;
            this.isTest = false;
            this.isPodpiska = false;
        },
        goToTest(){
            this.isUchet = false;
            this.isTest = true;
            this.isPodpiska = false;
        },
        goToPodpiska(){
            this.isUchet = false;
            this.isTest = false;
            this.isPodpiska = true;
        }
    }
}
</script>

<style scoped>
.btn_prof{
    color:black;
    text-decoration: none;
}
.btn_prof_active{
    color:#3E8CBF;
    text-decoration: none;
}
</style>