import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Affix } from 'antd';
import {
  MenuFoldOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './componentes/Home';
import Login from './componentes/Login';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {  
  const [collapsed, activador] = useState(false);
  const toggle = () => activador(!collapsed);
  const [top, setTop] = useState(0);

  return(
    <Layout>
      <Router>
        <Affix offsetTop={top}>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/nav1">nav 1</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/nav2">nav 2</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/nav3">nav 3</Link></Menu.Item>
            </Menu>
          </Header>    
        </Affix>
      <Layout>       
        <Sider width={200} collapsible collapsed={collapsed} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1"><Link to="/home">option1</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/login">option2</Link></Menu.Item>
              <Menu.Item key="3"><Link to="">option3</Link></Menu.Item>
              <Menu.Item key="4"><Link to="">option4</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5"><Link>option5</Link></Menu.Item>
              <Menu.Item key="6"><Link>option6</Link></Menu.Item>
              <Menu.Item key="7"><Link>option7</Link></Menu.Item>
              <Menu.Item key="8"><Link>option8</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9"><Link>option9</Link></Menu.Item>
              <Menu.Item key="10"><Link>option10</Link></Menu.Item>
              <Menu.Item key="11"><Link>option11</Link></Menu.Item>
              <Menu.Item key="12"><Link>option12</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <MenuFoldOutlined onClick={ () => activador(!collapsed)} className='trigger'/>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
            >
            <Switch>
              <Route exact={true} path="/home" component={Home} />
              <Route exact={true} path="/login" component={Login} />                
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  </Layout>
    )
}
    export default App;