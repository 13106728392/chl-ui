<!--
 * @Author: chl
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-04-28 15:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\input\input.vue
 -->

<template>
  <div class="wrapper" :class="{error, disabled ,readonly}">
    <template v-if="icon">
      <c-icon :name="icon"></c-icon>
    </template>
    <input
      type="text"
      ref="input"
      :readonly="readonly"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input',$event.target.value)"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <c-icon name="error"></c-icon>
      <span class="err-msg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import chlicon from "../icon/icon";
export default {
  name: "home",
  components: {
    "c-icon": chlicon
  },
  props: {
    icon: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>
<style lang="css" scoped>
.wrapper {
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  padding: 2px 8px;
  border-radius: 4px;
}
.wrapper.disabled {
  background: #bbb;
  cursor: not-allowed;
}
.wrapper > input {
  height: 32px;
  border-radius: 4px;
  padding: 0 8px;
  font-size: inherit;
  border: none;
  outline: none;
}
.wrapper > input:focus {
  outline: none;
}
.wrapper.error > input {
  border-color: #f1453d;
}
.wrapper input:disabled {
  background: #bbb;
}
.wrapper .icon-error {
  fill: #f1453d;
}
.wrapper .errorMessage {
  color: #f1453d;
}
</style>
