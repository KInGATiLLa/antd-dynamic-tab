import React, {useState, useMemo, createElement} from 'react';
import {render} from 'react-dom';
import {Layout, Menu, Button, Input, Tabs, Checkbox, Divider} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/antd/lib/style/index.css';
import './style.less';
import DynamicTab from '../dist/index';

const {Header, Sider, Content} = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((collapsed) => !collapsed);
  return (
    <Layout id="custom-trigger">
      <Sider width={250} trigger={null} collapsible collapsed={collapsed} className="site-layout-sider">
        <div className="logo">
          <div className="text">
            <h3>{collapsed ? 'DT' : 'Dynamic Tab'}</h3>
          </div>
        </div>
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
      <Layout className="site-layout" style={{width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 250px)'}}>
        <Header className="site-layout-header" style={{padding: 0}}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-content"
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '100vh',
          }}
        >
          <DynamicTab
            config={{
              size: 'large',
              defaultActiveKey: '2',
            }}
            tabs={[
              {key: '1', tab: 'Tab 1', icon: VideoCameraOutlined, content: <Divider orientation="center">Tab 1</Divider>},
              {key: '2', tab: 'Tab 2', icon: UploadOutlined, content: <Divider orientation="center">Tab 2</Divider>},
            ]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

const App = () => <MainLayout />;

render(<App />, document.getElementById('root'));
