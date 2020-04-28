<template>
  <div class="chl-collapse-item">
    <div class="header" @click="toggle">
      {{title}}
      <div class="ico" :class="icoClass">
        <chl-button name="right" icon="right"></chl-button>
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
.chl-collapse-item {
  border-bottom: 1px solid #ccc;
}
.chl-collapse-item .header {
  padding: 0.5em 0em;
  display: flex;
  justify-content: space-between;
}
.chl-collapse-item .header .chl-button{
  border: none;
  background-color:transparent;
}

.chl-collapse-item .body {
  padding: 0.6em 0em;
}
.chl-collapse-item:last-child {
  border-bottom: none;
}
.chl-collapse-item .ico {
  margin-left: auto;
  transition: all 0.3s;
}
.chl-collapse-item .ico-active {
  transform-origin: center;
  transform: rotate(90deg);
}
</style>
