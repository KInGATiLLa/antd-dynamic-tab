import {useState, createElement} from 'react';
import {render} from 'react-dom';

import {Layout, Menu, Button, Input} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
// import '../node_modules/antd/dist/antd.less';
// import '../node_modules/antd/lib/style/themes/default.less';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/antd/lib/style/index.css';
import './style.less';

const {Header, Sider, Content} = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((collapsed) => !collapsed);
  return (
    <Layout id="custom-trigger">
      <Sider
        style={{
          width: '250px',
          maxWidth: '250px',
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="site-layout-sider"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Info
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Component
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Builder
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

const App = () => {
  return <MainLayout />;
};

render(<App />, document.getElementById('root'));
