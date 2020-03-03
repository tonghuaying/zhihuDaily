import React , {Component} from 'react';
import './style.css'

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    
                </div>
                <div className="header-right">
                    <div className="app-download">APP下载</div>
                    <div className="view-content">浏览内容</div>
                </div>
            </div>
        )
    }
}
export default Header;