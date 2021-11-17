<template>
  <div :class="classe">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'column',
  props: {
    classe: {
      type: String,
      default: ''
    }
  },
  created () {

  }
}
</script>
