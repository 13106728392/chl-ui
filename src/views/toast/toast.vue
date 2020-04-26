<template>
  <div class="outer" :class="toastClass">
    <div class="toast-wrapper" :class="wrapperClass">
      <div v-if="enableHtml" v-html="message" class="message"></div>
      <div v-else class="message">{{message}}</div>
      <div v-if="closeBtn" class="close-btn" @click="userCustClose">{{closeBtn.btnText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "toast",
  props: {
    type:{
        default:'default',
        validator(val){
            return['default','success','warning','danger']
        }
    },
    duration: {
      type: Number,
      default: 600
    },
    message: {
      type: String
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    //出现位置
    position: {
      default: 'top',
      validator (val) {
        return ['top', 'middle', 'bottom'].includes(val)
      }
    },
    // 自动关闭前用户可以看文字按钮手动关闭
    closeBtn: {
      validator (val) {
        let flag = true
        for (let key of Object.keys(val)) {
          if (!['btnText', 'callback'].includes(key)) {
            flag = false
            break
          }
        }
        if (flag) {
          val['btnText'] = val['btnText'] || '关闭'
        }
        return flag
      }
    },
  },
   computed: {
    toastClass () {
      return `show-on-${this.position}`
    },
    wrapperClass(){
        return `wrapperClass-${this.type}`
    }
  },
  mounted(){
    this.autoClose();
  },
  methods:{
    autoClose(){
        setTimeout(() => {
            this.close();
        }, this.duration);
    },
    close () {
      this.$el.remove()
      this.$emit('closed')
      this.$destroy()
    },
    userCustClose(){
        this.close()
        this.closeBtn.callback(this)
    },
    componentMethod () {
      // console.log('我是组件方法')
    }
  }
};
</script>
<style lang="css" scoped>
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.outer {
  z-index: 30;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
}
.outer.show-on-top {
  top: 20px;
}
.outer.show-on-top .toast-wrapper {
  animation: slide-down 0.5s;
}
.outer.show-on-middle {
  top: 50%;
  transform: translate(-50%, -50%);
}
.outer.show-on-middle .toast-wrapper {
  animation: fade-in 0.5s;
}
.outer.show-on-bottom {
  bottom: 20px;
}
.outer.show-on-bottom .toast-wrapper {
  animation: slide-up 0.5s;
}

.toast-wrapper {
  padding: 0.8em 0em;
  color: #fff;
  border-radius: 4px;
  display: flex;
}
.toast-wrapper > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast-wrapper .message {
  max-width: 400px;
  padding: 0 1.2em;
}
.toast-wrapper .close-btn {
  padding: 0 1.2em;
  flex-shrink: 0;
  border-left: 1px solid #fff;
}

.wrapperClass-default {
  background: #909399;
}

.wrapperClass-success {
  background: #67C23A;
}

.wrapperClass-warning {
  background: #E6A23C;
}

.wrapperClass-danger {
  background: #F56C6C;
}
</style>
