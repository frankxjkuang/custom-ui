<template>
  <input type="text"
    class="moor-input"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    @input="handleInput($event)">
</template>

<script>
export default {
  name: 'MoorInput',
  data() {
    return {}
  },
  props: {
    value: [String, Number],
    placeholder: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 34px;
  outline: none;
  border: 1px solid #999;
  font-size: 14px;
  color: #333;
  padding-left: 10px;
  border-radius: 4px;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
    border-color: #eee;
    color: #999;
  }

  &:focus {
    border-color: #409EFF;
  }
}
</style>


