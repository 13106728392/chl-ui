


<!--
 * @Author: chl
 * @Date: 2020-04-26 15:44:50
 * @LastEditTime: 2020-04-28 17:50:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\README.md
 -->
# chl-ui  参照element ui 写的vue ui 框架 小demo   

## 使用
```
npm install chl-ui -s 
```
## 第一引入使用
#### 引入全局样式 
```
main.js文件    	import 'chlui/dist/chl-ui.css'
```
#### 按需引入组件(已完成以下组件)
```
import {
	Input,
	Button, 
	Collapse, 
	Icon,
	Toast,
    TabBody,
    TabItem, 
    TabPane,
    Tab 
} from 'chl-ui'
```

```
<template>
    <c-button type='info' @click="btn_click">按钮</c-button>
</template>
<script>
import {Button} from 'chlui'
    export default {
        name:"user",
        components:{
            'c-button':Button
        },
        methods:{
            btn_click(){
                
            }
        }
    }
</script>
```

#### 组件参数文档

##### 1.Button

 配置|  |  | | | |
---|---|---|---|---|---|---
type(string)类型 | primary | info |  success |  warning |  danger | 
(Boolean)disabled禁用 | true / flase | 
loading(Boolean) |  |
loading | true / flase | 
icon(string)图标 | 看icon详情  | 
iconPosition(string)图标位置 |  left / right |



##### 2.input

 配置|  |  
---|---|---|---|---|---|---
icon(string)图标 |  |  |  
value(string)绑定值 |  | 
disabled(Boolean)是否点击 |  |
readonly(Boolean只读 | true / flase | 
error(string)错误 | | 
placeholder(string)空白值|  |


