import { Component } from 'react'
import imgUrl from '../../common/image/loginBack.jpg'
import './loginPage.less'
class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        console.log(this.props,'loginPage')
    }
    render() {
        return (
            <div className="loginBox" style={{width:'100%',maxHeight:'100%'}}>
                {/* <img style={{height:'100%',}} src={imgUrl} alt="登录背景图"/> */}
                {/* <iframe title="登录背景页" id="iframe" src="https://www.17sucai.com/preview/127800/2014-05-12/html5彩色火焰球/index.html" width="100%" height="704px" frameborder="0"></iframe> */}
            </div>
        );
    }
}

export default loginPage;