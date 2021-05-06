<template>
    <div class="container" style="margin-top:2%">
        <div class="row text-center">
            <h1 class="р2" style="font-weight:620">Регистрация</h1>
        </div>
        <div class="row mt-5 mx-auto" style="width:35rem">
            <form>
                <div class="mb-3">
                    <input type="email" v-model="email" placeholder="Еmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <input type="password" v-model="pass" placeholder="Пароль" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="Повотрите пароль"  class="form-control" id="exampleInputPassword2">
                </div>
                <div v-on:click="signIn" class="mt-5 d-flex justify-content-center">
                    <a type="submit" class="btn backbtn">Зарегистрироваться</a>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <a href="" style="text-decoration:none;color:black">Не можете зарегистрироваться?</a>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <router-link to="/login" style="text-decoration:none;color:#11B46F">Войти</router-link >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            pass:''
        }
    },
    methods:{
        signIn(){
            axios
                .post('http://localhost:3000/users',JSON.stringify({
                    email: this.email,
                    password: this.pass
                }),{headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    localStorage.setItem('token',res.data.user._id);
                    this.$router.push({ path: '/', })
                })
                .catch(e=>{
                    console.log(e)
                })
        }
    }
}
</script>

<style scoped>
.backbtn{
    width:40%;
    padding-top:1.5%;
    padding-bottom:1.5%;
    color:white;
    font-weight: 500;
    background-color: #11B46F;
}
</style>