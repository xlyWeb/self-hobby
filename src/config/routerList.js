/*
    path:路由路径，
    key: 每一个key都必须不一样
    title:名称，
    showMenu:是否在左边菜单栏展示，
    icon：图标，
    permission：权限
    children:子路由
*/

let RouterList = [
    {
        path: "/login",
        key:"login",
        title: "登录",
        showMenu: false,
        icon: "<SkinOutlined />",
        permission: 1,
        children:[
            {
                path: "/loginPage",
                key:"loginPage",
                title: "登录页面",
                showMenu: false,
                icon: "<SkinOutlined />",
                permission: 1,
            }
        ]
    }, {
        path: "/home",
        key:"home",
        title: "首页",
        showMenu: true,
        icon: "icon-tuichu",
        permission: 1,
        children:[
            {
                path: "/home111",
                key:"home111",
                title: "首页111",
                showMenu: true,
                icon: "icon-tuichu",
                permission: 1,
            }
        ]
    }, {
        path: "/hobby",
        title: "爱好",
        key:"hobby",
        showMenu: true,
        icon: "icon-tuichu",
        permission: 1,
        children: [
            {
                path: "/book1",
                key:"book1",
                title: "书籍1",
                showMenu: true,
                icon: "icon-tuichu",
                permission: 1,
            },
            {
                path: "/book2",
                key:"book2",
                title: "书籍2",
                showMenu: true,
                icon: "icon-tuichu",
                permission: 1,
            },
            {
                path: "/book3",
                key:"book3",
                title: "书籍3",
                showMenu: true,
                icon: "icon-tuichu",
                permission: 1,
            },
            {
                path: "/book4",
                key:"book4",
                title: "书籍4",
                showMenu: true,
                icon: "icon-tuichu",
                permission: 1,
            }
        ]
    }
]
export default RouterList