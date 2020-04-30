


<!--
 * @Author: chl
 * @Date: 2020-04-26 15:44:50
 * @LastEditTime: 2020-04-29 10:18:40
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
####    组件设计的思想包括单数据流/ eventBus事件中心，核心动作是组件通信，会涉及到的vue api包括
* $childrem ： 获取当前组件子组件
* $parent：  获取当前组件父组件
* $refs： 获取当前组件某个组件或者dom
* $el: 组件的根dom结点
* provide && inject： 简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。
    需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。
* $on： 组件监听自定义事件
* $emit： 组件触发自定义事件
* .sync：语法糖，父组件监听到子组件修改props的意图后父组件修改传入的props



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


