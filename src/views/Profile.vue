<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2">
                <p><a v-on:click="goToUchet" :class="[isUchet ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Учетная запись</a></p>
                <p><a v-on:click="goToTest" :class="[isTest ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Тестирование</a></p>
                <p><a v-on:click="goToPodpiska" :class="[isPodpiska ? 'btn_prof_active' : 'btn_prof']" style="cursor: pointer;">Подписка</a></p>
            </div>

            <div v-if="bscreen" class="overlay"></div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="row p-3">
                        <div class="col-sm-9" style="margin-left:7%"><h4 style="font-weight:600" class="modal-title" id="exampleModalLabel">Доступ к индивидуальным рекомендациям всего <span style="color:#11B46F">530 ₽</span></h4></div>
                        <div class="col-sm" style="margin-left:4%"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    </div>
                    <div class="modal-body" >
                        <p style="font-weight:600;margin-left:7%">Вы получаете:</p>
                        <ul style="list-style-type: none;">
                            <li style="font-weight:590"><span style="color:#3E8CBF;font-size:1.5rem;margin-right:2%">✦</span> индивидуальные тренировки</li>
                            <li style="font-weight:590"><span style="color:#3E8CBF;font-size:1.5rem;margin-right:2%">✦</span> рекомендации от наших специалистов</li>
                            <li style="font-weight:590"><span style="color:#3E8CBF;font-size:1.5rem;margin-right:2%">✦</span> доступ к полезным статьям</li>
                        </ul>
                    </div>
                    <div class="mb-5 text-center">
                        <a v-on:click="goToPodpiskaPage" data-bs-dismiss="modal"  class="btn" style="padding-top:1.5%;
    padding-bottom:1.5%;
    padding-left:10%;
    padding-right:10%;
    color:white;
    font-weight: 500;background-color:#11B46F">Купить</a>
                    </div>
                    </div>
                </div>
            </div>

            <div v-if="clicked" class=" row shadow-sm p-3 mb-5 bg-body rounded" :class="classModal" style="background-color:white;position:absolute; width:30%; left:21rem;top:15.8rem">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Введите адрес</label>
                            <input  v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="row">
                            <div class="col-sm"><a class="btn backbtn" v-on:click="changeEmail" style="background-color: #11B46F;">Сохранить</a></div>
                            <div class="col-sm"><p v-on:click="onChangeClose" class="btn backbtn" style="cursor: pointer;background-color: #fffff;color:black;border:0.01rem solid black">Отменить</p></div>
                        </div>
                        
                    </form>
            </div>

            <div v-if="clickedName" class=" row shadow-sm p-3 mb-5 bg-body rounded" :class="classModal" style="background-color:white;position:absolute; width:30%; left:21rem;top:10rem">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Введите имя</label>
                            <input  v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Введите фамилию</label>
                            <input  v-model="lastname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="row">
                            <div class="col-sm"><a class="btn backbtn"  v-on:click="changeName" style="background-color: #11B46F;">Сохранить</a></div>
                            <div class="col-sm"><p v-on:click="onChangeNameClose" :class="namebtnclose" class="btn backbtn" style="cursor: pointer;background-color: #fffff;color:black;border:0.01rem solid black">Отменить</p></div>
                        </div>
                        
                    </form>
            </div>

            <div v-if="exitClicked" class="overlay-message row shadow-sm p-3  bg-body rounded" style="background-color:white;position:absolute; width:45%; left:30%;top:50%;">
                    <form>
                        <div class="mb-3 text-center" style="padding-top:2rem">
                            <p class="h4"> Вы уверены, что хотите выйти? </p>
                        </div>
                        <div class="row" style="padding-bottom:1.2rem">
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
                        <p class="mt-3" style="cursor: pointer;color:#3E8CBF" v-on:click="onChangeNameShow">Изменить</p>
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
                <p class="h4 mt-5" v-if="testResult!==''">Высокая вероятность, что у Вас предрасположенность к <span style="">{{testResult}}</span> </p>
                <div class="progress mt-3">
                    <div class="progress-bar" role="progressbar" style="width: 90%;background-color:#11B46F" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm">
                        <router-link to="/test" class="btn backbtn" style="background-color:#3E8CBF">Пройти еще раз</router-link>
                    </div>
                    <div class="col-sm">
                        <router-link to="/recomendation" class="btn backbtn" style="background-color:#11B46F">Перейти к рекомендациям</router-link>
                    </div>
                </div>
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

            <div class="col-sm-6" v-if="isPodpiska">
                <p class="h3" style="font-weight:590"> Подписка не оформлена </p>
                
                <p class="h5 mt-5" style="color:#11B46F;cursor:pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">Оформить подписку</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            namebtnclose:'',
            clickedName: false,
            bscreen:false,
            isUchet: true,
            isTest: false,
            isPodpiska: false,
            clicked: false,
            exitClicked: false,
            testResult:'',
            classModal:'',
            name:'',
            lastname: '',
            age:'',
            height:'',
            weight:'',
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
        onChangeNameShow(){
            this.namebtnclose = '';
            this.clickedName = true;
        },
        onChangeNameClose(){
            this.clickedName = false;
            
        },
        onChangeShowExit(){
            this.exitClicked = true;
            this.bscreen = true;
        },
        onChangeCloseExit(){
            this.exitClicked = false;
            this.bscreen = false;
        },
        exit(){
            localStorage.removeItem('token');
            this.$router.push('/')
        },
        changeEmail(){
            this.clicked = false;
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
        },
        changeName(){
            this.clickedName = false;
            axios
                .patch('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'),
                    JSON.stringify({
                        name: this.name,
                        lastname: this.lastname
                    }),
                    {headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    console.log(res.data.name);
                })
                .catch(e=>{
                    console.log(e)
                })
        },
        goToPodpiskaPage(){
            this.$router.push({path:'/subscribe'})
        }
        
    },
    created(){
        axios
            .get('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'))
            .then(res=>{
                this.name = res.data.name;
                this.lastname = res.data.lastName;
                this.age = res.data.age;
                this.weight = res.data.weight;
                this.height = res.data.height;
                if(res.data.name=='' || res.data.lastName==''){
                    this.clickedName =  true;
                    this.namebtnclose = 'disabled';
                }
                this.email = res.data.email;
                if(res.data.testResult==1){
                    this.testResult = 'Диабет';
                }
                if(res.data.testResult==2){
                    this.testResult = 'Артрит';
                }
                if(res.data.testResult==0){
                    this.testResult = 'Деменция';
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
.blackScreen{
    background-color: black;
    opacity: 0.5;
}
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

.overlay {
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:black;
    opacity:0.7;
    z-index:1001;
}
.overlay-message{
    position: fixed;
    background-color:#fff;
    opacity:1;
    z-index:1002;
}
</style>