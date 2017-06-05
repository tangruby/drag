# 资产配置
## 简介
* 安装 nodejs并设置环境变量
  * node --version
  * npm --version

* 项目

  > gitlab 地址：http://gitf-stock.paic.com.cn/spss_aa/aa_fe_h_cust/
  >
  > git clone http://gitf-stock.paic.com.cn/spss_aa/aa_fe_h_cust.git


## 运行
> npm install webpack-dev-server -g  (一次)
>
> npm run dll (一次)

* 开发环境: npm start 
* 编译打包: npm run [uat/prd]
* windows环境构建uat包: npm run windows-uat

## 平安证券APP，UAT下载地址

1.ios: fir.im/pazqiosuat
2.android: fir.im/pazquat

## 项目入口

1. 首页 `->` 资产配置
2. 理财 `->` 更多 `->` 资产配置
3. 理财 `->` 我的资产 `->` 资产配置
4. 我的 `->` 安全型
5. 我的 `->` 增值服务 (更多) `->` 资产配置
6. 微信[平安证券] `->` 理财 `->` 理财产品 `->` 我的资产 `->` 资产配置



## 常用地址

1. [uat 测试环境地址](https://stocklc.stg.pingan.com/spss-aa/mobile/index.html#/)
2. [prd 生产环境地址](https://asset.stock.pingan.com/mobile/index.html?_v=20170214173624#/)
3. [后台接口文档地址](http://conf-stock.paic.com.cn:8080/pages/viewpage.action?pageId=1214320)
4. [RAP文档地址](http://10.25.174.171:30074/platform/home.do)
5. [jenkins 打包发布地址](http://jenkins-stock.paic.com.cn:8080/view/PRISM_SPSS_AA/job/SPSS-AA-STATIC/ws/)

## UAT测试账号（密码统一为：123123）

	资金账号	 		  usercode	手机号		      用户类别		    用户名
	301719995038	189629942	15289250347       高门槛	    	占二六
	301719995078	189629945	15289250348       高门槛	　   	　	　	　
	301719995045	189629931	15289250349       高门槛	　   	　	　	　
	301719995046	189630032	15289250350       高门槛	    	占二九
	301719995089	189630041	15289250351       高门槛	　   	   　	　	　
	301319992859	189627059	13110000039       高门槛	　   	陈三十九
	301319992969	189627060	13110000040       高门槛
	301319992866	189627145	13110000043       高门槛	　	　	　	　


## 测试环境(uat) 打包发布

1. 进入 [jenkins 地址](http://jenkins-stock.paic.com.cn:8080/view/PRISM_SPSS_AA/job/SPSS-AA-STATIC/ws/)

2. Build with Parameters `->` BRANCH_TO_BUILD (输入 git 分支名称) `->` 开始构建

3. 工作空间 `->` build `->` output `->` uat `->` 打包下载全部文件

4. 把下载的全部文件通过 SSH Secure File Transfer(FTP) 上传到 uat 服务器上

   > uat 服务器信息如下
   >
   > ip: 10.25.164.177
   >
   > user: wls81
   >
   > pwd: Spss@1234
   >
   > 目录路径：/nfsc/spss_aa_data_vol1/spssaa_data/mobile



## 规范

### 工程目录结构
    -- aa_fe_h_cust
        |-- config              [webpack 配置文件]
        |-- node_modules        [npm模块目录]
        |-- server              [server api]
        |-- src                 [源代码]
            |-- components      [react 组件]
            |-- constants       [工程常量]
            |-- images          [图片]
            |-- layout          [布局]
            |-- modules         [模块，包含路由配置、页面、组件、actions、scss样式文件]
            |-- reducers        [reducer]
            |-- styles          [通用.scss样式文件]
            |-- utils           [各类helper]
            |-- app.js          [入口文件]
            |-- root.js         [顶级组件]
            |__ routes.js       [路由配置]
        |-- test               [测试目录]
        |-- .babelrc            [转码配置]
        |-- .eslintrc
        |-- .gitignore
        |-- build.sh           [jenkins构建脚本]
        |-- index.js           [服务器程序]
        |-- package.json   
        |-- README.md



### 页面

| 名称    | 路径                | 模块             |
| ----- | ----------------- | -------------- |
| 首页    | /                 | Home           |
| 引导页   | /#/guideAnimation | guideAnimation |
| 问答页   | /#/askTest        | askTest        |
| 产品页   | /#/products       | Products       |
| 常见问题页 | /#/question       | Question       |
| 自定义页面 | /#/custom         | Custom         |
| 404页面 | /#/notfound       | notfound       |


### css 结构及模块化

1 结构

```javascript
styles 全局样式
app
|— _flex.scss   flexbox 布局公用类
  |— _animation.scss animation动画公用类
  |— _mixins.scss 常用mixin
  |— _variable.scss 变量声明
|— app.scss 入口
|— _page.scss 
|— _pi-button.scss ...
components 组件下的样式一一对应
modules 组件与样式一一对应
```

   ​

2 写法

1 在 sass 文件中

```javascript
// 全局样式
:global {
  .class1 {}
  .class2 {}
}

// 局部样式
.class1 {}
.class2 {}

// 局部样式中嵌入全局样式
.class1 {
  :global {
    .class2 {}
  }
}

// 如果局部样式下是标签选择器，则默认就是全局
.class1 {
  h1 {}
}

// animation 动画全局
@keyframes :global(fadeIn){
  from {}
  to {}
}
```

2 在组件中调用

```javascript
import styles from './tmp.scss';

// 简单调用
<div className={styles.class1}></div>

// 同时输出局部与全局类名
<div className={`globalClass ${styles.localClass}`}></div>

// 根据state状态判断是否需要输出
<div className={this.state.foo ? "list" : "list2"}></div>
```

### 开发规范

* 所有代码必须进过编译运行才能提交代码库，避免因为报错影响其它开发进度
* 页面代码放modules文件夹,index.js为路由配置文件
* 组件代码放components文件夹
* 页面组件继承RComponent
* 页面组件自动引入Loading、Sdc组件
* 第三方组件必须经过评审才能引进



### 图片规范
* 图片按照设计稿导出每个icon的png|jpg|svg|gif图
* 图片导出为两种规格：xxx.png xxx@2x.png
* 网站icon的宽高比是1/1
* 图片大小必须是偶数，如100px、102px，避免使用奇数：101px、91px、83px



### scss/css规范
* 使用scss编写样式
* 公共样式放style文件夹
* 页面样式放modules对应模块文件夹
* 组件样式文件放跟组件同一个目录
* 以中横线区分名称，如图标以pi-icon-图标命名、按钮以pi-btn-样式｜大小｜等命名



### 组件设计原则
* 页面拆分成多个react组件
* 尽量使用无状态组件，父组件与子组件通过props传递
* 动画交互效果的组件可使用自有状态




## 新增页面 demo

```javascript
// 第一步：src/routers中的 childRoutes 变量里，添加个组件
require('./modules/demo').default

// 第二步：src/modules 下创建目录及文件
Demo
	|-- index.js 配置路由
	|-- Demo.js 组件
	|-- Demo.scss 样式

// 第三步：编辑index.js
export default {
    path: 'demo',
    getComponent:(nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./Demo').default)
        },'demo')
    }
}
  
// 第四步：编辑demo.js
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import RComponent from '../../components';
import styles from './Demo.scss';

class Demo extends RComponent{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
           <h1 className={styles.demo}>this is a h1</h1>
        )
    }
}
export default connect(
    state => ({
        
    })
)(Demo)
  
// 第五步 编辑 demo.scss
.demo {
	color: red;
}
```



## 其他

1. 浏览器跨域

```javascript
// chrome 浏览器
open -a "Google Chrome" --args --disable-web-security  --user-data-dir

// windows 下的chrome浏览器 【保证关闭 chrome 浏览器的前提下运行】
1 进入 cmd 控制台
2 输入 "chrome浏览器地址" --args --disable-web-security  --user-data-dir
```

1. layers 弹出框设置

```javascript
/**
 * 第一个参数： 内容，默认是：服务器忙
 * 第二个参数： 存在时间，单位s，默认2s
 */
layers.tip(content,time)

/**
 * 参数：
 * content： 内容
 * yesText: '确认文本', 默认确定
 * noText: '取消文本', 默认是 取消
 * shadeClose 是否允许点击遮罩关闭
 * yes: function(){} 确认回调函数
 * no:function(){} 取消回调函数
 */
layers.confirm({
  content: '',
  yesText:'',
  noText:'',
  shadeClose: false,
  yes:function(){},
  no:function(){}
})
```



## 特性
* react
* react-router
* redux
* redux-thunk
* react-router-redux
* es6
* webpack
* express


## 参考资料
* thinking in React
  * https://facebook.github.io/react/docs/thinking-in-react.html
  * https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html

* react 组件生命周期
  * http://reactjs.cn/react/docs/component-specs.html

* react-router
  * https://github.com/reactjs/react-router/tree/master/docs/guides

* redux-tutorial
  * https://github.com/react-guide/redux-tutorial-cn

* Flux 架构入门教程
  * http://www.ruanyifeng.com/blog/2016/01/flux.html

* react-redux
  * https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples

* fetch API
  * https://github.com/github/fetch

* flex 布局
  * http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
  * http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

* es6
  * http://es6.ruanyifeng.com

* immutable-js
  * https://facebook.github.io/immutable-js/

* git
  * http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html
