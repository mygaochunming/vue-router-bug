import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 2. 定义各个路由下使用的组件，简称路由组件
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: HelloWorld ,children: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
    ]},
    {path: '*', redirect: '/'}
  ]
})
