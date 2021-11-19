<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './layout/Layout'

export default {
  name: 'app',
  components: {
    'layout-component': Layout
  }
}
</script>

<style>

</style>
