<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2">
                <p><a v-on:click="goToUchet" :class="[isUchet ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Учетная запись</a></p>
                <p><a v-on:click="goToTest" :class="[isTest ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Тестирование</a></p>
                <p><a v-on:click="goToPodpiska" :class="[isPodpiska ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Подписка</a></p>
            </div>

            <div v-if="clicked" class="row shadow-sm p-3 mb-5 bg-body rounded" :class="classModal" style="background-color:white;position:absolute; width:30%; left:21rem;top:15.8rem">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Введите адрес</label>
                            <input  v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="row">
                            <div class="col-sm"><button class="btn backbtn" v-on:click="changeEmail" style="background-color: #11B46F;">Сохранить</button></div>
                            <div class="col-sm"><p v-on:click="onChangeClose" class="btn backbtn" style="cursor: pointer;background-color: #fffff;color:black;border:0.01rem solid black">Отменить</p></div>
                        </div>
                        
                    </form>
            </div>

            <div v-if="exitClicked" class="row shadow-sm p-3 mb-5 bg-body rounded" style="background-color:white;position:absolute; width:45%; left:16rem;top:14rem">
                    <form>
                        <div class="mb-3 text-center">
                            <p class="h4"> Вы уверены, что хотите выйти? </p>
                        </div>
                        <div class="row">
                            <div class="col-sm d-flex justify-content-center"><p v-on:click="exit" class="btn backbtn" style="background-color: #11B46F;">Выйти</p></div>
                            <div class="col-sm d-flex justify-content-center"><p v-on:click="onChangeCloseExit" class="btn backbtn" style="cursor: pointer;background-color: #fffff;color:black;border:0.01rem solid black">Отмена</p></div>
                        </div>
                        
                    </form>
            </div>

            <div class="col-sm-4" v-if="isUchet">
                <div class="row">
                    <div class="col-sm-9">
                        <p class="h2"> {{name}} {{lastname}}</p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF">Изменить</p>
                    </div>
                </div>

                <div class="row mt-3" >
                    <div class="col-sm-9">
                        <span class="text-muted" style="font-size:0.8rem">Электронная почта</span>
                        <p style="font-size:1.3rem"> {{email}} </p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF" v-on:click="onChangeShow">Изменить</p>
                    </div>
                    <div style="border-top:0.01rem solid #9B9B9B;"></div>
                </div>
                
                
                <div class="row mt-3" style="border-bottom:0.01rem solid #9B9B9B">
                    <div class="col-sm-9">
                        <span class="text-muted" style="font-size:0.8rem">Пароль</span>
                        <p style="font-size:1.5rem"> •••••••••• </p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF">Изменить</p>
                    </div>
                </div>

                <div class="row mt-3" style="border-bottom:0.01rem solid #9B9B9B">
                    <div class="col-sm-9">
                        <span class="text-muted" style="font-size:0.8rem">Возраст</span>
                        <p style="font-size:1.3rem"> {{age}} </p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF">Изменить</p>
                    </div>
                </div>
                <div class="row mt-3" style="border-bottom:0.01rem solid #9B9B9B">
                    <div class="col-sm-9">
                        <span class="text-muted" style="font-size:0.8rem">Рост(см)</span>
                        <p style="font-size:1.3rem"> {{height}} </p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF">Изменить</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-9">
                        <span class="text-muted" style="font-size:0.8rem">Вес(кг)</span>
                        <p style="font-size:1.3rem"> {{weight}} </p>
                    </div>
                    <div class="col-sm">
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF">Изменить</p>
                    </div>
                </div>

                <div class="row">
                    <a v-on:click="onChangeShowExit" style="color:#3E8CBF;font-weight:600;text-decoration:none;margin-top:5%;cursor:pointer">Выйти</a>
                </div>
                       
            </div>

            <div class="col-sm-6" v-if="isTest">
                <p class="h3"> Предрасположенность к болезням: </p>
                <p class="h5 mt-4" v-if="testResult===''"> Чтобы узнать рекомендации, пройдите тестирование </p>
                <p class="h4 mt-5" v-if="testResult!==''">У вас предрасположенность к <span style="color:#11B46F">{{testResult}}</span> </p>
                <!-- <div class="row mt-5">
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            isUchet: true,
            isTest: false,
            isPodpiska: false,
            clicked: false,
            exitClicked: false,
            testResult:'',
            classModal:'',
            name:'',
            lastname: '',
            age:'64',
            height:'170',
            weight:'70',
            email:'',
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
        },
        onChangeShow(){
            this.clicked = true;
            // this.classModal = 'modalBox';
        },
        onChangeClose(){
            this.clicked = false;
            // this.classModal = '';
        },
        onChangeShowExit(){
            this.exitClicked = true;
        },
        onChangeCloseExit(){
            this.exitClicked = false;
        },
        exit(){
            localStorage.removeItem('token');
            this.$router.push('/')
        },
        changeEmail(){
            axios
                .patch('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'),
                JSON.stringify({
                    email: this.email
                }),
                {headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    console.log(res.data.email);
                })
                .catch(e=>{
                    console.log(e)
                })
        }
        
    },
    created(){
        axios
            .get('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'))
            .then(res=>{
                this.name = res.data.name;
                this.lastname = res.data.lastName;
                this.email = res.data.email;
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
.btn_prof{
    color:black;
    text-decoration: none;
}
.btn_prof_active{
    color:#3E8CBF;
    text-decoration: none;
}
.backbtn{
    padding-top:2.5%;
    padding-bottom:2.5%;
    padding-left:15%;
    padding-right:15%;
    color:white;
    font-weight: 500;
}

.modalBox{
    animation: box 0.5s ease-in-out;
}

@keyframes box {
 from { top: 10rem; }
 to { top: 15rem; }
}
</style>