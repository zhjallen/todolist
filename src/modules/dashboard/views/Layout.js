import React from "react";
import { Layout, Menu, Icon } from 'antd';
import "../styles/layout.scss";
const { Header, Content, Footer, Sider } = Layout;

class LayoutView extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }
    onCollapse(collapsed) {
        this.setState({ collapsed })
    }
    render() {
        const { collapsed } = this.state;
        return (
            <div>
                <header>
                    头部信息太卡了吧
                </header>
                <Layout>
                    <Sider
                        collapsible
                        onCollapse={(collapsed, type) => this.onCollapse(collapsed, type)}
                        collapsed={collapsed}
                        style={{ overflow: 'auto', height: '100vh', backgroundColor: "light", position: 'fixed', left: 0, top: 50 }}>
                        <div className="logo" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="bar-chart" />
                                <span className="nav-text">nav 4</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="cloud-o" />
                                <span className="nav-text">nav 5</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="appstore-o" />
                                <span className="nav-text">nav 6</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="team" />
                                <span className="nav-text">nav 7</span>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="shop" />
                                <span className="nav-text">nav 8</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default LayoutView;
