<template>
  <div class="container" style="margin-top:2%">
    <div class="row">
            <p class="h2" style="font-weight:500">О болезнях</p>
    </div>

    <div class="container-sm mt-5">
      <div class="row">
        <div class="col-sm">
          <div class="mb-3" style="max-width: 540px;">
            <div class="row g-0 " @mouseover="hoverOver_ssz" @mouseout="hoverOut_ssz">
              <div class="col-sm-3">
                <img src="../assets/arrhythmia.svg" alt="...">
              </div>
              <div class="col-sm-7 mt-4">
                  <router-link class="h3" to="/paper" :class="classes_ssz" style="text-decoration: none;">Сердечно-сосудистые</router-link>
              </div>
              <div class="col-sm-2" style="margin-top:5%">
                <img :src="src_ssz" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="mb-3" style="max-width: 540px;">
            <div class="row g-0 " @mouseover="hoverOver_dim" @mouseout="hoverOut_dim">
              <div class="col-sm-3">
                <img src="../assets/solution.svg" alt="...">
              </div>
              <div class="col-sm-7 mt-4">
                  <a class="h3" href="#" :class="classes_dim" style="text-decoration: none;">Деменция</a>
              </div>
              <div class="col-sm-2" style="margin-top:5%">
                <img :src="src_dim" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="mb-3" style="max-width: 540px;">
            <div class="row g-0 " @mouseover="hoverOver_dia" @mouseout="hoverOut_dia">
              <div class="col-sm-3">
                <img src="../assets/diabet.svg" alt="...">
              </div>
              <div class="col-sm-7 mt-4">
                  <a class="h3" href="#" :class="classes_dia" style="text-decoration: none;">Сахарный диабет</a>
              </div>
              <div class="col-sm-2" style="margin-top:5%">
                <img :src="src_dia" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="mb-3" style="max-width: 540px;">
            <div class="row g-0 " @mouseover="hoverOver_ar" @mouseout="hoverOut_ar">
              <div class="col-sm-3">
                <img src="../assets/arthritis.svg" alt="...">
              </div>
              <div class="col-sm-7 mt-4">
                  <a class="h3" href="#" :class="classes_ar" style="text-decoration: none;">Артрит</a>
              </div>
              <div class="col-sm-2" style="margin-top:5%">
                <img :src="src_ar" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return{
      src_ssz: require('../assets/ChevronRightOutline.svg'),
      classes_ssz: 'hov',
      src_dim:require('../assets/ChevronRightOutline.svg'),
      classes_dim:'hov',
      src_dia:require('../assets/ChevronRightOutline.svg'),
      classes_dia:'hov',
      src_ar:require('../assets/ChevronRightOutline.svg'),
      classes_ar:'hov',
    }
  },
  name: 'Home',
  methods:{
    hoverOver_dim(){
      this.src_dim = require('../assets/ChevronRightOutlineColored.svg');
      this.classes_dim = 'hov_colored';
    },
    hoverOut_dim(){
      this.src_ssz = require('../assets/ChevronRightOutline.svg');
      this.classes_dim = 'hov'
    },
    hoverOver_ssz(){
      this.src_ssz = require('../assets/ChevronRightOutlineColored.svg');
      this.classes_ssz = 'hov_colored';
    },
    hoverOut_ssz(){
      this.src_ssz = require('../assets/ChevronRightOutline.svg');
      this.classes_ssz = 'hov'
    },
    hoverOver_dia(){
      this.src_dia = require('../assets/ChevronRightOutlineColored.svg');
      this.classes_dia = 'hov_colored';
    },
    hoverOut_dia(){
      this.src_dia = require('../assets/ChevronRightOutline.svg');
      this.classes_dia = 'hov'
    },
    hoverOver_ar(){
      this.src_ar = require('../assets/ChevronRightOutlineColored.svg');
      this.classes_ar = 'hov_colored';
    },
    hoverOut_ar(){
      this.src_ar = require('../assets/ChevronRightOutline.svg');
      this.classes_ar = 'hov'
    }
  },
  components: {
    
  },
  
}
</script>

<style scoped>
  .hov{
    color:black;
  }
  .hov_colored{
    color:#3E8CBF;
  }
</style>
