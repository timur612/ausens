<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-2">
                <router-link to="/trainings" style="width:6%;height:6%;color:black;"> <img src="../assets/back.svg" alt=""> </router-link>
            </div>
            <div class="col-sm-10" style="width:65%">
                <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
                <div class="card-body row">
                    <h5 class="card-title">Разминка перед сном</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'CJbDakXf8rw',
      playerVars: {
        autoplay: 0
      }
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
}
</script>