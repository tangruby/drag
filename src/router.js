// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routerConfig = [
  {
    path: '*', component: (resolve) => {
      // require.ensure(['./views/welcome'], () => {
      //   resolve(require('./views/welcome'))
      // })
      // require(['./views/welcome'], resolve)
      // require.ensure(['./views/welcome'], () => resolve(require('./views/welcome')), 'welcome')
    }
  },
  {
    path: '/', component: (resolve) => {
      // require(['./views/welcome'], resolve)
      // require.ensure(['./views/welcome'], () => resolve(require('./views/welcome')), 'welcome')      
    }
  },
  {
    path: '/home', component: (resolve) => {
      // require(['./views/home'], resolve)
      // require.ensure(['./views/home'], () => resolve(require('./views/home')), 'home')
    }
  },
  {
    path: '/about', component: (resolve) => {
      // require(['./views/about'], resolve)
      // require.ensure(['./views/about'], () => resolve(require('./views/about')), 'about')
    }
  },
  {
    path: '/invite', component: (resolve) => {
      // require(['./views/invite'], resolve)
    }
  },
  {
    path: '/test', component: (resolve) => {
      require(['./views/test'], resolve)
    }
  },
  {
    path: '/products',component:(r)=>{
      require.ensure(['./views/products'],()=>r(require('./views/products')),'products');
    }
  },
  {
    path: '/mychart',component:(r)=>{
      require.ensure(['./views/mychart'],()=>r(require('./views/mychart')),'mychart');
    }
  },
  {
    path: '/drag',component:(r)=>{
      require.ensure(['./views/drag'],()=>r(require('./views/drag')),'drag');
    }
  }
];

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes: routerConfig,
})

router.beforeEach((to, from, next) => {
  let toPath = to.path
  let fromPath = from.path
  // console.log(`to: ${toPath} from: ${fromPath}`)
  next();
})

// 输出router
export default router;