import { Component, } from 'react'
import { Menu, Layout } from "antd";
import RouterList from '../config/routerList'
import { Link,  Switch, Route, withRouter } from 'react-router-dom'
import NotFound from '../view/error/404'

import LoginPage from '../view/login/loginPage'
import Hello from '../view/home/hello'
import Book1 from '../view/hobby/book1'
import Book2 from '../view/hobby/book2'
import Book3 from '../view/hobby/book3'

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "11"
        }
    }
    initMenuItem(val) {
        const ele = val.map((item, index) => {
            if (item.showMenu) {
                return (
                    <SubMenu key={item.key} title={item.title} >
                        {
                            item.children.map((childItem, childIndex) => {
                                if (childItem.showMenu) {
                                    return (
                                        <Menu.Item key={childItem.key}>
                                            <Link to={childItem.path}>{childItem.title}</Link>
                                        </Menu.Item>
                                    )
                                } else {
                                    return ''
                                }
                            })
                        }
                    </SubMenu>
                )
            } else {
                return ""
            }
        })
        return ele
    }
    // initRoute(val){
    //     let ele = val.map((item,index)=>{
    //         if(item.children && item.children.length > 0) {
    //            item.children.map((childItem,childIndex )=>{
    //                if(childItem.showMenu) {
    //                 <Route path={childItem.path} component={childItem.component}></Route>
    //                }else {
    //                 <Route path="/404" component={NotFound}></Route>
    //                }
    //            })
    //         }
    //     })
    // }
    getMenuPage() {
        return (
            <Layout>
                <Sider>
                    <Menu style={{ width: 200, position: 'fixed', minHeight: '100%' }}
                        mode="inline"
                        theme="dark">
                        {
                            this.initMenuItem(RouterList)
                        }
                    </Menu>
                </Sider>
                <Layout style={{ width: '100%', position: 'relative', minHeight: '100vh' }}>
                    <Header style={{ background: "red" }}>Header</Header>
                    <Content style={{ background: "blue" }}>
                        <Switch>
                            <Route exact path="/home111" component={Hello}></Route>
                            <Route exact path="/book1" component={Book1}></Route>
                            <Route exact path="/book2" component={Book2}></Route>
                            <Route exact path="/book3" component={Book3}></Route>
                            <Route exact path="/404" component={NotFound}></Route>
                        </Switch>
                    </Content>
                    <Footer style={{ background: "yellow", position: 'absolute', bottom: 0, right: 0, width: '100%' }}>
                        <div style={{ width: '100%' }}>Footer</div>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
    getLoginPage() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/loginPage" component={LoginPage}></Route>
                </Switch>
            </Layout>
        )
    }
    componentDidMount() {
        this.setState({
            page: this.props.location.pathname
        })
    }
    render() {
        return (
            <div style={{ fontSize: 20 }}>
                {
                    this.state.page.indexOf('loginPage') > -1 ? this.getLoginPage() : this.getMenuPage()
                }
            </div>
        );
    }
}

export default withRouter(LeftMenu);