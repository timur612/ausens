<template>
    <div class="container" style="margin-top:2%">
        <div class="row text-center">
            <h1 class="р2" style="font-weight:620">Вход</h1>
        </div>
        <div class="row mt-5 mx-auto" style="width:35rem">
            <form>
                <div class="mb-3">
                    <input v-model="email" type="email" placeholder="Еmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <input v-model="pass" type="password" placeholder="Пароль" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mt-5 d-flex justify-content-center">
                    <a v-on:click="logIn" class="btn backbtn">Войти</a>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <a href="" style="text-decoration:none;color:black">Не можете войти?</a>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <router-link to="/registration" style="text-decoration:none;color:#11B46F">Зарегистрироваться</router-link >
                </div>
                <div class="mt-2 d-flex justify-content-center" v-if="errs.length>0">
                    <p style="color:red">Вы неправильно ввели пароль или Email</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            email:'',
            pass:'',
            errs:[]
        }
    },
    methods:{
        logIn(){
            // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            this.errs = [];
            const body = JSON.stringify({
                    email:this.email,
                    password:this.pass
                })
            axios
                .post('http://localhost:3000/users/login',body,{headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    localStorage.setItem('token',res.data);
                    this.$router.push({ path: '/', })
                })
                .catch((e,res)=>{
                    console.log(e);
                    console.log(body)
                    this.errs.push(e);
                })
        }
    }
}
</script>

<style scoped>
.backbtn{
    width:30%;
    padding-top:1.5%;
    padding-bottom:1.5%;
    color:white;
    font-weight: 500;
    background-color: #11B46F;
}
</style>