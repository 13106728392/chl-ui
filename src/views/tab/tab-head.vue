<!--
 * @Author: your name
 * @Date: 2020-04-28 10:35:17
 * @LastEditTime: 2020-04-28 16:37:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\tab\tab-head.vue
 -->
<template>
  <div class="chl-tab-head" :class="headClass" ref="tabHead">
    <div class="item-wrapper" :class="itemWrapperClass">
      <slot></slot>
    </div>

    <div class="line" :style="lineStyle" ref="line"></div>
  </div>
</template>
<script>
export default {
  name: "chl-tab-head",
  data() {
    return {
      align: "top"
    };
  },
  inject: ["eventBus"], //获取父组件传入的bus，类似vuex的设计
  computed: {
    tabPosition() {
      return `tab-${this.align}`;
    },
    headClass() {
      let headDirection = this.align === "top" ? "column" : "row";
      return `head-in-${headDirection}`;
    },
    itemWrapperClass() {
      let itemDirection = this.align === "top" ? "row" : "column";
      return `item-in-${itemDirection}`;
    },
    lineStyle() {
      let mixinStyleObj;
      if (this.align === "top") {
        mixinStyleObj = {
          width: "100px",
          borderBottom: "2px solid #3ba0e9"
        };
      } else {
        mixinStyleObj = {
          height: "20px",
          borderLeft: "2px solid #3ba0e9"
        };
      }
      return mixinStyleObj;
    }
  },
  mounted() {
    // tab head 监听事件 设置line
    this.eventBus.$on("update:selected", (name, vm) => {
      // debugger
      this.$nextTick(() => {
        let tabHeadStyle = this.$refs.tabHead.getBoundingClientRect()
        let { width, left, height, top } = vm.$refs.item.getBoundingClientRect()
        if (this.align === 'top') {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - tabHeadStyle.left}px`
        } else {
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top - tabHeadStyle.top}px`
        }
      })
    });
  }
};
</script>
<style scoped>
.chl-tab-head {
  display: flex;
}
.chl-tab-head.head-in-row {
  flex-direction: row;
  border-right: 1px solid #ccc;
}
.chl-tab-head.head-in-column {
  flex-direction: column;
  border-bottom: 1px solid #ccc;
}
.chl-tab-head .item-wrapper {
  display: flex;
}
.chl-tab-head .item-wrapper.item-in-row {
  flex-direction: row;
}
.chl-tab-head .item-wrapper.item-in-column {
  flex-direction: column;
}
.chl-tab-head .line {
  position: relative;
  transition: all 0.5s;
}
</style>
