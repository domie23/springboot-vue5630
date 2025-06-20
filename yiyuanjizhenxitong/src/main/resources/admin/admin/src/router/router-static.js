import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import bingfang from '@/views/modules/bingfang/list'
    import bingfangOrder from '@/views/modules/bingfangOrder/list'
    import bingli from '@/views/modules/bingli/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengOrder from '@/views/modules/yishengOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yonghujiankangma from '@/views/modules/yonghujiankangma/list'
    import config from '@/views/modules/config/list'
    import dictionaryBingfang from '@/views/modules/dictionaryBingfang/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJiankangjiaoyu from '@/views/modules/dictionaryJiankangjiaoyu/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYisheng from '@/views/modules/dictionaryYisheng/list'
    import dictionaryYishengOrder from '@/views/modules/dictionaryYishengOrder/list'
    import dictionaryYishengOrderStatus from '@/views/modules/dictionaryYishengOrderStatus/list'
    import dictionaryYishengOrderYesno from '@/views/modules/dictionaryYishengOrderYesno/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBingfang',
        name: '病房类型',
        component: dictionaryBingfang
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiankangjiaoyu',
        name: '健康教育类型',
        component: dictionaryJiankangjiaoyu
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYisheng',
        name: '科室',
        component: dictionaryYisheng
    }
    ,{
        path: '/dictionaryYishengOrder',
        name: '时间类型',
        component: dictionaryYishengOrder
    }
    ,{
        path: '/dictionaryYishengOrderStatus',
        name: '挂号状态',
        component: dictionaryYishengOrderStatus
    }
    ,{
        path: '/dictionaryYishengOrderYesno',
        name: '挂号审核',
        component: dictionaryYishengOrderYesno
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/bingfang',
        name: '病房信息',
        component: bingfang
      }
    ,{
        path: '/bingfangOrder',
        name: '病房预约',
        component: bingfangOrder
      }
    ,{
        path: '/bingli',
        name: '病例信息',
        component: bingli
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛信息',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengOrder',
        name: '急诊预约',
        component: yishengOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yonghujiankangma',
        name: '用户健康码',
        component: yonghujiankangma
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
