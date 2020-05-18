<!--
 * @Author: chl
 * @Date: 2020-05-18 10:59:23
 * @LastEditTime: 2020-05-18 15:57:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\modal\modal.vue
 -->

 <template>
  <div class="modal-wrapper">
    <div class="mask" v-show="isVisible" key="mask">
      <div class="outer-modal">
        <div class="modal" v-show="isVisible" key="modal">
          <div class="modal-header">
            <span class="title">{{title}}</span>
            <c-icon name="false" ref="closeIco" class="close-ico"></c-icon>
          </div>
          <div class="modal-body" v-if="enableContentHtml" v-html="content"></div>
          <div class="modal-body" v-else>{{content}}</div>

          <div class="modal-action">
            <c-button ref="cancelBtn" v-if="btnConfig.cancelText">{{btnConfig.cancelText}}</c-button>
            <c-button ref="confirmBtn" type="primary">{{btnConfig.confirmText}}</c-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
import Icon from "../icon/icon";
import Button from "../button/button";
export default {
  name: "Modal",
  props: {
    title: {
      default: "这是标题"
    },
    content: {
      default: "这是内容"
    },
    btnConfig: {
      //校验这是
      type: Object,
      validator(val) {
        
        if (val.confirmCallback && typeof val.confirmCallback !== "function") {
          return false;
        }

        if (val.cancelCallback && typeof val.cancelCallback !== "function") {
          return false;
        }
        Object.keys(val).forEach(key => {
          if (
            ![
              "confirmCallback",
              "cancelCallback",
              "cancelModalCallback",
              "confirmText",
              "cancelText"
            ].includes(key)
          ) {
            return false;
          }
        });
        // debugger
        return true;
      }
    },
    enableContentHtml: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "c-button": Button,
    "c-icon": Icon
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    modalStyle() {
      return this.isVisible ? "" : { display: "none" };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.bindBtnEvent();
      this.bindIcoEvent();
    },
    bindBtnEvent() {
      this.$refs.confirmBtn.$el.addEventListener("click", () => {
        // debugger
        this.isVisible = false;
        this.btnConfig.confirmCallback && this.btnConfig.confirmCallback();
      });
      if (!this.btnConfig.cancelText) return;

      this.$refs.cancelBtn.$el.addEventListener("click", () => {
        
        this.isVisible = false;
        this.btnConfig.cancelCallback && this.btnConfig.cancelCallback();
      });
    },
    bindIcoEvent() {
      // console.log(this.$refs.closeIco);
      this.$refs.closeIco.$el.addEventListener("click", () => {
        this.isVisible = false;
        this.btnConfig.cancelModalCallback && this.btnConfig.cancelModalCallback();
          
      });
    }
  }
};
</script>
 
 <style scoped>
.modal-wrapper {
  width: 100%;
  height: 100%;
}

.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5) !important;
  z-index: 1000;
}

.outer-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal {
  animation: slide-down 0.5s ;
  width: 200px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.modal .modal-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
.modal .modal-header .title {
  font-size: 18px;
}
.modal .close-ico:hover {
  transform: rotate(180deg);
  transition: all 0.8s;
}
.modal .modal-body {
  padding: 14px 0;
  font-size: 14px;
}
.modal .modal-action {
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
}
.modal .modal-action button:last-child {
  margin-left: 14px;
}
</style>
