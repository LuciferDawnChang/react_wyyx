import Vue from 'vue';
import VueRouter from 'vue-router';

//严选首页隔层
import InterLayer from '../pages/InterLayer/InterLayer.vue';
//首页主路由
import Home from '../pages/Home/Home.vue';
import Discern from '../pages/Discern/Discern.vue';
import Category from '../pages/Category/Category.vue';
import ShopCart from '../pages/ShopCart/ShopCart.vue';
import Personal from '../pages/Personal/Personal.vue';
import login from '../pages/login/login.vue';
import logUser from "../pages/login/logUser/LogUser.vue"
// import logUser from '../pages/login/logUser/logUser.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login/loguser'
    },
    {
      path: '/interlayer',
      component: InterLayer,
      meta: {
        isShow: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true
      }
    },
    {
      path: '/discern',
      component: Discern,
      meta: {
        isShow: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        isShow: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        isShow: true
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        isShow: false
      },
    },
    {
      path:"/login/loguser",
      component:logUser
    },
    // {
    //   path: '/msite',
    //   component: Msite,
    //   /*
    //   * 路由元信息
    //   * 配合App中v-show，来处理FooterGuide的显示隐藏，需要显示的路由组件，都要有
    //   * */
    //   meta: {
    //     showFooter: true
    //   }
    // }
  ]
});