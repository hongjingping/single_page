<template>
  <div id="app">
    <transition name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import './css/animate.css'
import { slide } from './js/common.js'
export default {
  name: 'app',
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  data: function () {
    return {
      transitionName: 'slide-right'
    }
  },
  mounted: function () {
    var _this = this
    slide(function () {
      _this.$router.push({ path: 'two' })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
