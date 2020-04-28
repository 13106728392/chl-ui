<template>
  <button class="chl-button" :class="btnClass" @click="$emit('click')">
    <chl-icon v-if="icon && !loading" :name="icon" class="icon"></chl-icon>
    <chl-icon v-if="loading" name="loading" class="icon loading"></chl-icon>
    <div class="btn-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import chlicon from "../icon/icon";
export default {
  name: "home",
  components: {
    "chl-icon": chlicon
  },
  props: {
    type: {
      type: String,
      validator(val) {
        return ["primary", "info", "success", "warning", "danger"].includes(
          val
        );
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(val) {
        return val === "left" || val === "right";
      }
    }
  },
  computed: {
    btnClass() {
      let classList = [];
      if (this.iconPosition) classList.push(`ico-${this.iconPosition}`);
      if (this.type) classList.push(`btn-${this.type}`);
      if (this.disabled) classList.push(`btn-disabled`);
      return classList.join(" ");
    }
  }
};
</script>
<style lang="css" scoped>
.chl-button {
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #999;
  background: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 70px;
}
.chl-button:hover {
  border-color: #666;
}
.chl-button:active {
  background-color: #eee;
}
.chl-button:focus {
  outline: none;
}
.chl-button.ico-left > .icon {
  order: 1;
  margin-right: 0.4em;
}
.chl-button.ico-left > .btn-content {
  order: 2;
}
.chl-button.ico-right > .icon {
  order: 2;
  margin-left: 0.4em;
}
.chl-button.ico-right > .btn-content {
  order: 1;
}
.chl-button.btn-disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
.chl-button.btn-disabled:hover, .chl-button.btn-disabled:active {
  opacity: 0.7;
}
.chl-button.btn-primary {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.chl-button.btn-primary:hover {
  opacity: 0.85;
}
.chl-button.btn-primary:active {
  opacity: 0.7;
}
.chl-button.btn-info {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.chl-button.btn-info:hover {
  opacity: 0.85;
}
.chl-button.btn-info:active {
  opacity: 0.7;
}
.chl-button.btn-success {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.chl-button.btn-success:hover {
  opacity: 0.85;
}
.chl-button.btn-success:active {
  opacity: 0.7;
}
.chl-button.btn-warning {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.chl-button.btn-warning:hover {
  opacity: 0.85;
}
.chl-button.btn-warning:active {
  opacity: 0.7;
}
.chl-button.btn-danger {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.chl-button.btn-danger:hover {
  opacity: 0.85;
}
.chl-button.btn-danger:active {
  opacity: 0.7;
}
</style>
