<!--
 * @Author: chl
 * @Date: 2020-05-07 11:00:37
 * @LastEditTime: 2020-05-07 17:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\carousel\carousel.vue
 -->
<template>
  <div class="c-carousel">
    <div class="chl-window" @mouseenter="pause" @mouseleave="start">
      <slot></slot>
      <c-icon name="left" @click="onClickPrev" class="ico prev"></c-icon>
      <c-icon name="right" @click="onClickNext" class="ico next"></c-icon>

      <div class="chl-dot">
        <span
          v-for="(n, index) in carouselItemLength"
          :key="index"
          @click="changeSelect(index)"
          :class="{'index-active':selectedIndex=== index}"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import icon from "../icon/icon";
export default {
  name: "c-carousel",
  components: {
    "c-icon": icon
  },
  props: {
    // 当前选中的name
    value: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    height:{
      type:String,
      default:'150px'
    }
    
  },
  //触发更新  在父组件修改了select被执行 关键
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      //获取在当前数组的下标
      return this.namesList.indexOf(this.value);
    },
    namesList() {
      let arr = [];
      this.$children.forEach(vm => {
        if (vm.$options.name === "c-carousel-item") {
          arr.push(vm.name);
        }
      });
      return arr;
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      isReverse: false,
      carouselItemLength: 0,
      timerId: undefined,
      lastIndex: 0
    };
  },
  methods: {
    init() {
      this.checkSelectedValue();
      this.updateChildren();
      this.carouselItemLength = this.getcarouselItemCount();
      if (this.autoPlay) {
        this.playAutomatically();
      }
    },
    // 进入暂停
    pause() {
      window.clearTimeout(this.timerId);
    },
    // 出来滚动
    start() {
      // console.log('触发了这个')
      // debugger
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
      this.playAutomatically();
    },
    //上一张
    onClickPrev() {
      //获取当前下标
      this.isReverse = true;
      let prevIndex = this.selectedIndex - 1;
      this.setNewSelected(prevIndex);
    },
    //下一张
    onClickNext() {
      //获取当前下标
      this.isReverse = false;
      let prevIndex = this.selectedIndex + 1;
      this.setNewSelected(prevIndex);
    },
    changeSelect(idnex) {
      this.setNewSelected(idnex);
      this.isReverse = this.selectedIndex > idnex;
    },
    //使用默认第一张
    checkSelectedValue() {
      if (!this.value) {
        this.$emit("update:selected", this.$children[0].name);
      }
    },
    //自动播放
    playAutomatically() {
      // debugger
      if (this.timerId) {
        return;
      }

      let run = () => {
        let idx = this.selectedIndex === -1 ? 0 : this.selectedIndex;
        idx += 1;
        this.isReverse = false;
        this.setNewSelected(idx);
        this.timerId = setTimeout(run, this.duration);
      };

      //这样就不用定时器
      this.timerId = setTimeout(run, this.duration);
    },
    //计算长度
    getcarouselItemCount() {
      let count = 0;
      this.$children.forEach(vm => {
        if (vm.$options.name === "c-carousel-item") {
          count++;
        }
      });
      return count;
    },
    //设置新的下标 通知父组件去修改select
    setNewSelected(nowIndex) {
      this.lastIndex = this.selectedIndex;
      if (nowIndex === this.namesList.length) {
        nowIndex = 0;
      }
      if (nowIndex === -1) {
        nowIndex = this.namesList.length - 1;
      }

      //这样就是改变 父组件传进来的value 的值
      this.$emit("input", this.namesList[nowIndex]);
    },
    //更新
    updateChildren() {
      this.$children.forEach(item => {
        if (item.$options.name === "c-carousel-item") {
          item["selected"] = this.value;
          item["reverse"] = this.isReverse;
          item["height"]=this.height
        }
      });
    }
  }
};
</script>
<style scoped>
.c-carousel {
  display: inline-block;
  position: relative;
  /* background-color: red; */
}
.c-carousel .chl-window {
  position: relative;
  overflow: hidden;
}
.c-carousel .chl-window:hover .ico {
  display:inline;
}
.c-carousel .chl-window .ico {
  position: absolute;
  display:none;
  color: #909399;
  width: 30px;
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  /* background-color: red; */
  border-radius: 50%;
}
.c-carousel .chl-window .ico:hover {
  color: #606266;
  
}

.c-carousel .chl-window .ico.prev {
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
.c-carousel .chl-window .ico.next {
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}
.c-carousel .chl-dot {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-carousel .chl-dot .index-active {
  background: lightblue;
  color: #000;
}
.c-carousel .chl-dot > span {
  display: inline-block;
  width: 24px;
  height: 4px;
  font-size: 12px;
  line-height: 40px;
  margin-right: 0.4em;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
