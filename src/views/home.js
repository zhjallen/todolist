import React, { Component } from "react";
import api from "../utils/api/index";
import { Button } from "antd";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2
        };
    }
    request() {
        api.get("http://api.douban.com/v2/movie/top250")
            .then(data => {
                console.log(data, "data")
            })
            .catch(error => {
            
            })
    }
    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                8999<br />
                当前计数：{this.state.count}<br />
                <button onClick={() => this._handleClick()}>自增</button>
                {/* <img src={img}/> */}
                <button onClick={this.request.bind(this)}>请求数据</button>
                <Button type="primary">ant design</Button>
            </div>
        );
    }
}