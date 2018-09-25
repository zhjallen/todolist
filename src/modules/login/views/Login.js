// 用户登录
import React from "react";
import { Form, Input, Checkbox, Button, Card, Row, Icon } from "antd";
import "./styles/login.scss";

@Form.create()
class Login extends React.Component {
    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div>
                <Card className="login-card" style={{ width: 400 }}>
                    <Form className="login-form" layout="horizontal">
                        <Form.Item  >
                            {getFieldDecorator("userName")(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"></Input>
                            )}
                        </Form.Item>
                        <Form.Item  >
                            {getFieldDecorator("passWord")(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入密码" type="password"></Input>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("remember", {
                                valuePropName: "checked",
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <Button type="primary" htmlType="submit" >登录</Button>
                        </Form.Item>
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <a href="/register">立即注册</a>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Login;