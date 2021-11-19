<template>

  <div v-if="isHorizontal"
    class="form-group"
  >

    <label :for="id" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <input
        :type="type"
        :class="[formControl, getSize]"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        v-model="value">
      </input>
    </div>

  </div>
  <input v-else
         :type="type"
         :class="[formControl, getSize]"
         :id="id"
         :placeholder="placeholder"
         :value="value"
         :disabled="isDisabled"
         v-model="value"
  />
</template>

<script>
export default {
  name: 'lte-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    size: {
      type: String
    },
    value: {
      type: String
    },
    isFormControl: {
      type: Boolean,
      default: true
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSize () {
      if (!this.size) {
        return ''
      }

      return 'input-' + this.size
    },
    formControl () {
      return this.isFormControl ? 'form-control' : ''
    }
  }
}
</script>
