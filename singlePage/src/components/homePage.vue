<template>
  <div>
    <div class="content">
      <h1>{{ msg }}</h1>
      <router-link to="/two">Go to two</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'wikiHong'
    }
  }
}
</script>

<style scoped>
  body {
    background:pink;
  }
  .content {
    width: 100%;
    height: 100%;
    background: pink;
  }
</style>
