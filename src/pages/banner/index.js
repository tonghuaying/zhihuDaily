import React , { Component } from 'react';
import './style.css';

class Banner extends Component {

    render() {
        return (
            <div className="banner-container">
                <div className="banner-left"></div>
                <div className="banner-right">
                    <div className="banner-info">
                        <p class="banner-title">每天三次 每次七分钟</p>
                        <p class="banner-desc">在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</p>
                    </div>
                    <div className="banner-imgs">
                        <div className="banner-imgs-qr"></div>
                        <div className="banner-imgs-phone">
                            <div className="banner-imgs-iphone">
                                <span class="img-icon"></span>
                                <span class="img-name">iOS 版</span>
                            </div>
                            <div className="banner-imgs-android">
                                <span class="img-icon"></span>
                                <span className="img-name">Android 版</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;