<!--
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-04-26 16:30:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\collapse\collapse.vue
 -->
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "chl-collapse",
  props: {
    value: {
      default: () => {
        return [];
      },
      type: [String, Array]
    },
    accordion: {
      type: Boolean
    },
   
  },
   data() {
      return {
        eventBus: new Vue()
      };
    },
    //创建一个vue对象作为数据传输的介质
    provide() {
      return { eventBus: this.eventBus };
    },
  mounted() {
    this.eventBus.$emit("update:selected", this.value);
    // 父组件自己修改selected数组，然后子组件监听到数据变化更新视图
    this.eventBus.$on("update:addSelected", name => {
      let selectedCopy =
        typeof this.value === "string" ? [this.value] : [...this.value];
      if (this.accordion) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      // this.$emit('update:selected', this.accordion ? name : selectedCopy)
      this.$emit("input", this.accordion ? name : selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });

    this.eventBus.$on("update:removeSelected", name => {
      let selectedCopy =
        typeof this.value === "string" ? [this.value] : [...this.value];
      if (!this.accordion) {
        let idx = selectedCopy.indexOf(name);
        selectedCopy.splice(idx, 1);
        // this.$emit('update:selected', selectedCopy)
        this.$emit("input", selectedCopy);
        this.eventBus.$emit("update:selected", selectedCopy);
      } else {
        if (name === this.value) {
          // this.$emit('update:selected', '')
          this.$emit("input", "");
        }
      }
    });
  }
};
</script>
<style lang="css" scoped>
.collapse {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5em 1em;
}
</style>
