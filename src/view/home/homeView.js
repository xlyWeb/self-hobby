import {Component} from 'react'
import LeftMenu from '../../component/menu'
class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menu:"测试用的"
         }
    }
    render() { 
        return ( 
            // <LeftMenu data={this.state.menu}/>
            <LeftMenu/>
         );
    }
}
 
export default HomeView;