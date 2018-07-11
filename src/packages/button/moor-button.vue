<template>
  <button
    class="moor-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :style="{backgroundColor: bgcolor, borderColor: bgcolor, color: color}">
    <img :src="icon" v-if="icon">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MoorButton',
  props: {
    buttonDisabled: Boolean,
    autofocus: Boolean,
    icon: String,
    bgcolor: String,
    color: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
.moor-button {
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  color: #666;
  cursor: pointer;
}
</style>

