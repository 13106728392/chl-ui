<template>
  <div class="item">
    <div class="header" @click="toggle">
      {{title}}
      <div class="ico" :class="icoClass">
        <chl-button name="right"></chl-button>
      </div>
    </div>
    <div class="body" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import chlbutton from "../button/button";
export default {
  name: "collapse-item",
  components: {
    "chl-button": chlbutton
  },
  data() {
    return {
      visible: false
    };
  },
  //作为子组件获取祖先级别的传下来的数据
  inject: ["eventBus"],
  computed: {
    icoClass () {
      return { 'ico-active': this.visible }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", v => {
      if (v.includes(this.name)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  },

  methods: {
    addSelectItem() {
      this.eventBus.$emit("update:addSelected", this.name);
    },
    removeSelectItem() {
      this.eventBus.$emit("update:removeSelected", this.name);
    },
    showPane() {
      this.addSelectItem();
    },
    closePane() {
      this.removeSelectItem();
    },
    toggle() {
      this.visible = !this.visible;
      if (this.visible) {
        this.showPane();
      } else {
        this.closePane();
      }
    }
  }
};
</script>
<style lang="css" scoped>
.item {
  border-bottom: 1px solid #ccc;
}
.item .header {
  padding: 0.5em 0em;
  display: flex;
  justify-content: space-between;
}
.item .body {
  padding: 0.6em 0em;
}
.item:last-child {
  border-bottom: none;
}
.item .ico {
  margin-left: auto;
  transition: all 0.3s;
}
.item .ico-active {
  transform-origin: center;
  transform: rotate(90deg);
}
</style>
