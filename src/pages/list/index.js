import React from "react";
import { connect } from "react-redux";
import "./style.css";

const List = props => {
  return (
    <div className="list-container">
      <div className="list-title">
        <div className="list-title-left">浏览内容</div>
        <div className="list-title-right">最新内容</div>
      </div>
      <ul className="content-list">
        <li>
          <div className="content-img">
            <img alt="" src={require("../../static/images/list1.jpg")} />
          </div>
          <p className="content-name">航天器的降落方式可以多炫酷？</p>
        </li>
        <li>
          <div className="content-img">
            <img alt="" src={require("../../static/images/list1.jpg")} />
          </div>
          <p className="content-name">航天器的降落方式可以多炫酷？</p>
        </li>
        <li>
          <div className="content-img">
            <img alt="" src={require("../../static/images/list1.jpg")} />
          </div>
          <p className="content-name">航天器的降落方式可以多炫酷？</p>
        </li>
        <li>
          <div className="content-img">
            <img alt="" src={require("../../static/images/list1.jpg")} />
          </div>
          <p className="content-name">航天器的降落方式可以多炫酷？</p>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
