<template>
  <div>
    <button
      :type="type"
      class="btn"
      :class="buttonTypeClass"
      :disabled="disabled"
      :value="value"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'secondary'
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    buttonTypeClass() {
      return `btn-${this.color}`
    }
  }
}
</script>
