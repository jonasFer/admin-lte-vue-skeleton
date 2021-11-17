<template>
  <div class="form-group">
    <label>{{ title }}</label>
    <lte-textarea
      :rowCount="rowCount"
      :placeholder="placeholder"
      :isDisabled="isDisabled"
    ></lte-textarea>
  </div>
</template>

<script>
import LteTextarea from './LteTextarea'

export default {
  name: 'lte-textarea-group',
  props: {
    title: {
      type: String,
      default: 'Textarea'
    },
    rowCount: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      defualt: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  created () {

  },
  components: {
    'lte-textarea': LteTextarea
  }
}
</script>
