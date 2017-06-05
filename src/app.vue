<template>
  <div id="app-content">
    <div class="head">
      <v-header :input-value="hello"></v-header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'Vue';
import './styles/app.scss';
import VHeader from './components/Header'

export default {
  name: 'app',
  data() {
    return {
      hello: "lllll"
    }
  },
  components: {
    VHeader,
  }
}
</script>

<style lang="scss" scoped>
html {
  width: 100%;
  height: 100%;
  
   body {
    margin: 0;
    width: 100%;
    height: 100%
  }
}
</style>