<template>
  <div class="c-table-component">
    <div class="toolbar-worp"></div>
    <div class="toolbar">
      <!-- 自定义列，如按钮操作 -->
    </div>
    <el-table
      :id="tableConfig.id"
      :ref="tableConfig.id"
      v-loading="tableConfig.loading"
      class="c-table"
      :border="tableConfig.border"
      highlight-current-row
      :data="tableConfig.data"
      :row-key="tableConfig.rowKey"
      :max-height="autoHeight || tableConfig.height"
      @selection-change="onCheckboxChange"
      @row-click="onRowClick"
      @sort-change="onSortChange"
    >
      <!-- 多选CheckBox -->
      <el-table-column
        v-if="tableConfig.multipleSelect"
        type="selection"
        width="40"
        :selectable="checkboxDisable"
      >
      </el-table-column>
      <!-- 单选 -->
      <el-table-column v-if="tableConfig.singleSelect" width="40">
        <template v-slot="scope">
          <el-radio
            v-model="radioValue"
            :label="scope.row[tableConfig.rowKey]"
            :disabled="scope.row._disabled"
            class="radio-box"
            @change="onRadioChange"
          >
            &nbsp;
          </el-radio>
        </template>
      </el-table-column>
      <!-- 序号  -->
      <el-table-column
        v-if="!(tableConfig.hideIndexColeumn === true)"
        type="index"
        label="序号"
        width="50"
        :index="computedIndex"
      >
      </el-table-column>

      <!-- 正常列 -->
      <template
        v-for="(item, index) in tableConfig.columns.filter(
          (objs) => objs.hide !== true
        )"
      >
        <!-- 非slot -->
        <el-table-column
          v-if="item.type !== 'slot'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :sortable="item.sortable"
          :formatter="item.formatter"
          :class-name="item.className"
          :align="item.align"
        >
        </el-table-column>
        <!-- slot -->
        <el-table-column
          v-if="item.type === 'slot'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :sortable="item.sortable"
          :formatter="item.formatter"
          :class-name="item.className"
          :align="item.align"
        >
          <template v-slot="scope">
            <!-- 插入具名插槽 -->
            <slot :name="'column-' + item.prop" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 自定义内容，如添加操作列 -->
      <slot></slot>
    </el-table>
    <!-- 底部工具导航栏 -->
    <el-pagination
      v-if="tableConfig.pagination"
      :current-page="tableConfig.pageNum"
      :page-size="tableConfig.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableConfig.total"
      @size-chage="onPageSizeChange"
      @current-change="onPageNumChange"
    >
    </el-pagination>
  </div>
</template>

<script>
// import { Table, Radio , Pagination, TableColumn} from "element-ui";

export default {
  name: "cTable",
  props: {
    config: {
      type: Object,
      require: true,
      default: () => {},
    },
    data:{
      type:Array,
      require:false
    }
  },
  data() {
    return {
      selectedList: [],
      radioValue: "", // 当singleSlect为true有效
      autoHeight: "", // 自动高度
    };
  },
  computed: {
    // table的配置
    tableConfig() {
      // table的默认值
      let defaltConfig = {
        id: "cTable", // 默认为'cTable',当页面出现多个表格，务必指定不同的id
        border: true, // 表格是否带有边框
        data: [], // 表格数据
        loading: false, // 是否显示loading
        height: "auto", // 表格高度
        autoComputedHeight: false, // 是否自定计算表格高度，设为true则当页面出现滚动条时，自动把滚动条加到表格中，表格最大高度将填充页面
        multipleSelect: false, // 是否显示checkbox复选框
        singleSelect: false, // 是否显示radio单选框
        hideIndexColeumn: false, //是否显示序列号，默认显示
        checkOnRowClick: false, //如果设置为true，当用户点击某一行时，则会选中/取消选中该行，若有复选框则会选中/取消勾选
        pagination: false, // 是否显示分页组件
        pageNum: 1, // 当前页码，当前pagination有效
        pageSize: 10, // 每页的大小，当pagination为true有效
        total: 0, // 总数，当pagination为true有效
        rowKey: "id", // 行数据的key，用来优化table的渲染，默认为id
        // 表格列
        columns: [
          /**
                    简单例子
                        {
                            prop:'id',
                            prmaryKey:true,
                            hidden:true
                        },
                        {
                            prop:'time',
                            label:'时间',
                            width:200,
                            formatter:(row,column,cellValue,index)=>{
                                return this.$utils.formatDate(cellValue,'yyyy-MM-dd HH:mm')
                            }
                        }
                     */
        ],
      };
      // 合并默认参数和传入参数
      let config = { ...defaltConfig, ...this.config };
      if (this.data) {
        config.data = this.data;
      }
      return config;
    },
  },
  watch: {
    "config.data"(list) {
      if (list && list.length !== 0) {
        //监听 table data 的变化，根据数据变化计算合适的高度，使表格出现滚动条，而不是页面出现滚动条
        if (this.config.autoComputedHeight == true) {
          // 延迟等待页面数据渲染完成计算
          setTimeout(() => {
            this.computedTableHeight(false);
          }, 0);
        }
        // 校验数据必须包含rowkey属性
        if (!list[0][this.tableConfig.rowKey]) {
          window.DEBUG && alert("请指定数据表格“rowKey”属性");
        }
      }
    },
  },
  created() {
    if (this.tableConfig.autoComputedHeight) {
      // 重写该方法
      this.$eventBus.$off(this.$eventBus.keys.heightChange);
      this.$eventBus.$on(this.$eventBus.keys.heightChange, () => {
        this.computedTableHeight(true);
      });
    }
  },
  methods: {
    // 计算table序列号
    computedIndex(index) {
      if (this.tableConfig.pagination) {
        let pageNum = this.tableConfig.pageNum;
        let pageSize = this.tableConfig.pageSize;
        return index + 1 + (pageNum - 1) * pageSize;
      }
      return index + 1;
    },
    // 单选
    onRadioChange() {
      let selectedList = [];
      if (this.radioValue) {
        selectedList = this.tableConfig.data.filter(
          (item) => item[tableConfig.rowKey] === this.radioValue
        );
      }
      this.selectedList = selectedList;
      this.$emit("selectedChange", selectedList);
    },
    //清空选中的数据
    clearSelected() {
      this.$refs[this.tableConfig.id].clearSelection();
      this.$refs[this.tableConfig.id].setCurrentRow(null);
      this.radioValue = "";
      this.selectedList = [];
    },
    // 多选改变
    onCheckboxChange(selectedList) {
      this.selectedList = selectedList;
      this.$emit("selectedChange", selectedList);
    },
    // 改变页面大小
    onPageSizeChange(pagesize) {
      this.clearSelected();
      this.$emit("pageSizeChange", pagesize);
    },
    // 改变页号
    onPageNumChange(pagenum) {
      this.clearSelected();
      this.$emit("PageNumChange", pagenum);
    },
    // 自动计算table高度
    computedTableHeight(pagHeightChange) {
  
      let  height = this.$helper.computedTableHeight(
        this.tableConfig.id,
        'c-main',
        pagHeightChange
      )

      if(height){
        this.autoHeight = height
      }
    },
    // 判断是否被选中
    onRowClick(row){
      if(!row._disabled && this.tableConfig.checkOnRowClick){
        // 单选的情况
        if(this.tableConfig.singleSelect){
          this.radioValue = row[this.tableConfig.rowKey]
          this.selectedList = [row]
          this.$emit('electedChange',this.selectedList)
        }else{
          // 多选情况，使用toggleRowSelection后台使用onCheckboxChange方法
          this.$refs[this.tableConfig.id].toggleRowSelection(row)
        }
      }
      // 触发方法
      this.$emit('row-click',row)
    },
    // 列表排序
    onSortChange(sortData){
      this.$emit('sort-change',sortData)
    }
  },
};
</script>
<style scoped>
</style>