<template>
  <div :class="[groupType + '-group', getTheme]">
    <label v-if="$slots.title" class="control-label">
      <slot name="title"></slot>
    </label>
    <label v-else-if="title" :for="id">
      <span>{{ title }}</span>
    </label>
    <div v-if="$slots.slotPrefixButton" class="input-group-btn">
      <slot name="slotPrefixButton"></slot>
      <slot name="slotPrefixDropdown"></slot>
    </div>
    <span v-if="prefixAddonText || $slots.slotPrefixAddonText" class="input-group-addon">
      {{ prefixAddonText }}
      <slot name="slotPrefixAddonText"></slot>
    </span>
    <input-form
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :size="size"
        :value="value"
        :isFormControl="type!='file'"
        :isDisabled="isDisabled"
    ></input-form>
    <span v-if="suffixAddonText || $slots.slotSuffixAddonText" class="input-group-addon">
      {{ suffixAddonText }}
      <slot name="slotSuffixAddonText"></slot>
    </span>
    <div v-if="$slots.slotSuffixButton" class="input-group-btn">
      <slot name="slotSuffixButton"></slot>
      <slot name="slotSuffixDropdown"></slot>
    </div>
    <p v-show="helpBlock" class="help-block">{{ helpBlock }}</p>
  </div>
</template>

<script>
import Input from './Input'
export default {
  name: 'input-group',
  props: {
    groupType: {
      type: String,
      default: 'form'
    },
    theme: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter Text...'
    },
    size: {
      type: String
    },
    value: {
      type: String
    },
    helpBlock: {
      type: String
    },
    prefixAddonText: {
      type: String
    },
    suffixAddonText: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getTheme () {
      if (!this.theme) {
        return ''
      }

      return 'has-' + this.theme
    }
  },
  created () {

  },
  components: {
    'input-form': Input
  }
}
</script>
