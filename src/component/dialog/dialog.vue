<!--
 * @Author: chl
 * @Date: 2021-04-16 11:02:66
 * @LastEditTime: 2020-05-18 15:57:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\dialog\dialog.vue
 -->
<template>
  <div class="dialog-wrapper" v-if="visible" v-dialogDrag>
    <div class="mask" key="mask">
      <div class="outer-dialog">
        <div class="dialog" v-if="visible" key="dialog">
          <div class="dialog-header">
            <span class="title">{{ config.title }}</span>
            <c-icon
              name="false"
              ref="closeIco"
              class="close-ico"
              @click="closeDialog"
            ></c-icon>
          </div>
          <div class="dialog-body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Cdialog",
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          title: "这是标题"
        };
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // this.init();
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
 
 <style scoped>
.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5) !important;
  z-index: 1000;
}

.outer-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog {
  animation: slide-down 0.5s;
  /* width: 200px; */
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.dialog .dialog-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
.dialog .dialog-header .title {
  font-size: 18px;
}
.dialog .close-ico:hover {
  transform: rotate(180deg);
  cursor: pointer;
  transition: all 0.8s;
}
.dialog .dialog-body {
  padding: 14px 0;
  font-size: 14px;
}
.dialog .dialog-action {
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
}
.dialog .dialog-action button:last-child {
  margin-left: 14px;
}
</style>
