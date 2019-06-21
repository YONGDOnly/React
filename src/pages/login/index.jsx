import React,{ Component } from "react";
import logo from "./logo.png";
import "./index.less";
import { Form, Icon, Input, Button } from 'antd';

const Item = Form.Item;
export default class Login extends Component {

  login = (e) => {
    e.preventDefault();
  }
  render(){
    return <div className="login">
      <header className="head_top">
        <img src={logo} alt="logo"/>
        <h1>React项目：后台管理系统</h1>
      </header>
        <section className="login_content">
          <h2>用户登录</h2>
          <Form onSubmit={this.login} className="form_login">
            <Item>
              <Input  className="login_ipt" prefix={<Icon type="user"/>} placeholder="用户名"/>
            </Item>
            <Item>
              <Input className="login_ipt" prefix={<Icon type="safety" />} placeholder="密码" type="password"/>
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="form_btn">登录</Button>
            </Item>
          </Form>
        </section>
    </div>;


  }
}