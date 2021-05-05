<template>
  <div id="app">
    <TopHeader></TopHeader>
    <Header ></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TopHeader from './components/TopHeader.vue'
export default {
  components: {
    Header,TopHeader
  }
}
</script>

<style>
body{
  font-family: 'Open Sans', sans-serif;
}
</style>
