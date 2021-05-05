<template>
    <div class="container">
        <div class="row">
            <p class="h2" style="font-weight:600">Тренировки для вас</p>
        </div>
        <div class="row">
            <div class="col-sm mt-5" v-on:click="goTo">
                <div class="shadow-sm mb-5 bg-body rounded" style="width: 30rem;">
                    <img style="width:30rem" src="../assets/yoga.svg" class="card-img-top" alt="...">
                    <div class="card-body row">
                        <h5 class="card-title">Разминка перед сном</h5>
                        <div class="col-sm-2"><img style="width:35%" src="../assets/clock.svg" alt="..."></div>
                        <div class="col-sm-10"><p class="card-text text-muted">10 мин</p></div>
                    </div>
                </div>
            </div>
            <div class="col-sm mt-5" v-on:click="goTo">
                <div class="shadow-sm mb-5 bg-body rounded" style="width: 30rem;">
                    <img style="width:30rem" src="../assets/yoga.svg" class="card-img-top" alt="...">
                    <div class="card-body row">
                        <h5 class="card-title">Разминка перед сном</h5>
                        <div class="col-sm-2"><img style="width:35%" src="../assets/clock.svg" alt="..."></div>
                        <div class="col-sm-10"><p class="card-text text-muted">10 мин</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router'
export default {
    methods:{
        goTo(){
            this.$router.push({ path: 'video', query: { id: 'CJbDakXf8rw' } })
        }
    }
}
</script>

<style scoped>

</style>