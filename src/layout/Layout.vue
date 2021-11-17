<template>
  <div class="wrapper">
    <navbar></navbar>
    <slider :slideMenuItems="slideMenuItems"></slider>
    <content-wrap></content-wrap>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Slider from './Slider'
import ContentWrap from './ContentWrap'
import slideMenuItems from '../lib/slideMenuItems'
import store from '../vuex/store'

export default {
  name: 'layout-component',
  components: {
    'navbar': NavBar,
    'slider': Slider,
    'content-wrap': ContentWrap
  },
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  created () {
  },
  store
}
</script>
