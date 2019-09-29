import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/upload', //上传器测试
                meta: { auth: false },
                component: resolve => require(['../pages/upload/'], resolve)
            },
            {
                path: '/dad-to-child', //上传器测试
                meta: { auth: false },
                component: resolve => require(['../pages/dad-to-child/dad'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]