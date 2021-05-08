<template>
    <div class="container">
        <div style="width:50%">
            <div class="row">
            <p class="h3" style="font-weight:600">Ваши результаты</p>
            <p class="h4 mt-3" style="font-weight:600">Предрасположенность к болезням:</p>
            </div>

            <div class="row mt-2">
                <p>Высокая вероятность, что у Вас предрасположенность к {{testResult}}</p>
            </div>

            <div class="progress mt-3" style="width:77%">
                <div class="progress-bar" role="progressbar" style="width: 90%;background-color:#11B46F" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="row mt-5">
                <div class="col-sm">
                    <router-link to="/recomendation" class="btn backbtn" style="background-color:#11B46F;color:white">Перейти к рекомендациям</router-link>
                </div>
                <div class="col-sm">
                    <router-link to="/test" class="btn backbtn" style="border:0.01rem solid black">Пройти еще раз</router-link>
                </div>
            </div>
            <div class="row mt-5">
                <p class="text-muted">
                    *Данное тестирование не является диагностическим. При жалобах рекомендуется обратиться к специалисту
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{ 
            testResult:''
        }   
        
    },
    created(){
        axios
            .get('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'))
            .then(res=>{
                if(res.data.testResult==1){
                    this.testResult = 'Диабет';
                }
                if(res.data.testResult==2){
                    this.testResult = 'Артрит';
                }
                if(res.data.testResult==0){
                    this.testResult = 'Дименция';
                }
                if(res.data.testResult==4){
                    this.testResult = 'Сердечно-сосудистое заболевание';
                }
                
            })
            .catch(e=>{
                console.log(e);
            })
    }
}
</script>

<style scoped>
.backbtn{
    padding-top:2.5%;
    padding-bottom:2.5%;
    padding-left:10%;
    padding-right:10%;
    font-weight: 500;
}
</style>