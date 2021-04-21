export default {

    // 计算表格高度,让滚动条出现在表格的内部，而不是页面外面
    computedTableHeight(
        tableRef = 'cTable', // 要计算的tableId
        warpRef = 'c-main', // 组页面的容器
        pageHeightChange = false // 是否要进行计算高度
    ) {
        let table = document.getElementById(tableRef)
        if (!table) {
            window.DEBUG && alert('使用自动计算表格高度，请给表格添加id属性')
            return
        }
        // 清除默认高度
        if (pageHeightChange) {
            let tableBody = table.getElementsByClassName('el_table_body-weapper')[0]

            console.log(tableBody)
            debugger
            table.style.maxHeight = 'none'
            tableBody.style.maxHeight = 'none'
        }

        // 计算高度
        let main = document.getElementById(warpRef)
        let scrollNumber = main.scrollHeight - main.offsetHeight
    
        if (scrollNumber !== 0) {
            let tableHight = table.scrollHeight - scrollNumber
   
            // 若表格高度计算后小于200，则不使用自动计算高度
            if (tableHight < 200) {
                return
            }
            // 修复高度为小数出现滚动条
            return Math.floor(tableHight)
        }
    }



}