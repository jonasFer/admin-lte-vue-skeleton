<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p> Nome do usuário </p>
          <a href="#"><i class="fa fa-circle" :style="`color:green`"></i> Online </a>
        </div>
      </div>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <lte-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </lte-slide-item>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import LteSliderItem from '../components/LteSlideItem'

export default {
  name: 'slider',
  props: {
    slideMenuItems: {
      type: Array,
      default: []
    }
  },
  created () {

  },
  components: {
    'lte-slide-item': LteSliderItem
  }
}
</script>
