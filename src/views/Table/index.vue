<template>
   <div id="c-main" style="height:'600px';">
        <c-table ref="table" :config="tableConfig"> </c-table>
    </div> 
</template>

<script>
export default {
  data() {
    return {
   //table 配置参数
      tableConfig: {
        pagination: true,
        // autoComputedHeight: true,
        height:300,
        total: 1,
        data: [],
        columns: [
          {
            prop: "id",
            label: "id",
            prmaryKey: true,
            hidden: true,
          },
          {
            prop: "time",
            label: "时间",
            // width: 50,
            // formatter: (row, column, cellValue, index) => {
            //   return this.$utils.formatDate(cellValue, "yyyy-MM-dd HH:mm");
            // },
          },
        ],
      },
    };
  },
  mounted(){
      this.addData()
  },
  methods: {
     // 随机添加数据
    addData(arrNum =100) {
      let arr = [];
      for (let index = 0; index < arrNum; index++) {
        const element = {
          id: index,
          time: new Date().getTime(),
        };
        arr.push(element);
      }
      this.tableConfig.data = arr;
    },
  },
};
</script>

<style>
</style>