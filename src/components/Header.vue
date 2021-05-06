<template>
    <div class="sticky-top shadow-sm p-3 mb-5 bg-body rounded">
      <div id="nav" class="container-sm">
        <div class="row">
          <div class="col-sm">
            
            <router-link to="/"><img v-on:click="changeClassPolez" style="height:40px" alt="Ausens logo" src="../assets/logo.svg"></router-link>
          </div>
          <div class="col-sm" style="margin-top:0.5%" v-if="reglog">
            <a v-on:click="changeClassPolez"><router-link  :class="poleznoe" to="/">Полезное</router-link></a>
            <a v-on:click="changeClassRec"><router-link  :class="rec" style="margin-left:10%" to="/recomendation">Рекомендации</router-link></a>
            <a v-on:click="changeClassTren"><router-link  :class="tren" style="margin-left:10%" to="/trainings">Тренировки</router-link></a>

            <a v-if="!authed" v-on:click="changeClassProfLogin"><router-link  :class="prof" style="margin-left:10%" to="/login">Профиль</router-link></a>
            <a v-if="authed" v-on:click="changeClassProf"><router-link  :class="prof" style="margin-left:10%" to="/profile">Профиль</router-link></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      poleznoe: 'nav_link_active',
      rec: 'nav_link',
      tren: 'nav_link',
      prof: 'nav_link',
      authed: false,
      reglog: true
    }
  },
  methods:{
    changeClassPolez(){
      this.poleznoe = 'nav_link_active';
      this.rec = 'nav_link';
      this.tren = 'nav_link';
      this.prof = 'nav_link';

      console.log(this.poleznoe)
    },
    changeClassRec(){
      this.poleznoe = 'nav_link';
      this.rec = 'nav_link_active';
      this.tren = 'nav_link';
      this.prof = 'nav_link';

      console.log(this.poleznoe)
    },
    changeClassTren(){
      this.poleznoe = 'nav_link';
      this.rec = 'nav_link';
      this.tren = 'nav_link_active';
      this.prof = 'nav_link';

      console.log(this.poleznoe)
    },
    changeClassProf(){
      this.poleznoe = 'nav_link';
      this.rec = 'nav_link';
      this.tren = 'nav_link';
      this.prof = 'nav_link_active';

      console.log(this.poleznoe)
    },
    changeClassProfLogin(){
      this.poleznoe = 'nav_link';
      this.rec = 'nav_link';
      this.tren = 'nav_link';
      this.prof = 'nav_link_active';

      this.reglog = false;
    },
    checkLogged(){
        if(localStorage.getItem('token')!=null){
          this.authed = true;
        }else{
          this.authed = false;
        }
    }
  },
  created(){
    setInterval(()=>{
      this.checkLogged();
    },1000);
  }
}
</script>

<style scoped>
  .nav_link{
    text-decoration: none;
    color:black;
  }
  .nav_link_active{
    text-decoration: none;
    color:#3E8CBF;
  }
</style>