<!--
 * @Author: your name
 * @Date: 2020-04-27 14:34:13
 * @LastEditTime: 2020-04-28 17:48:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\tab\tab.vue
 -->
<template>
  <div class="chl-tab" :class="`tab-${tabPosition}`">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "chl-tab",
  props: {
    value: {
      tepe: String
    },
    tabPosition: {
      default: "top",
      validator(val) {
        return ["top", "left"].includes(val);
      }
    },
    test: {}
  },
  data() {
    return {
      // 其实就是用一个类似vuex的bus去进行事件的广播
      eventBus: new Vue()
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  mounted() {
    // todo 找到被选中的item，发送给eventBus
    this.$children.forEach(child => {
      if (child.$options.name === "chl-tab-head") {
        child.$children.forEach(grandChild => {
          if (grandChild.name === this.value) {
            this.eventBus.$emit("update:selected", this.value, grandChild);
          }
        });
      }
    });

    this.eventBus.$on("update:selected", $event => {
      
      this.$emit("input", $event);
    });

    // this.eventBus.$emit("update:selected", this.selected)
    if (this.tabPosition === "left") {
      this.$children.forEach(child => {
        child.align = child.$options.name === "chl-tab-head" ? "left" : "";
      });
    }
  }
};
</script>
<style scoped>
.chl-tab {
  display: flex;
  border: 1px solid slategray;
}
.chl-tab.tab-top {
  flex-direction: column;
}
.chl-tab.tap-left {
  flex-direction: row;
}
</style>
