import React, {useState, useMemo, createElement} from 'react';
import {render} from 'react-dom';
import {Layout, Menu, Button, Input, Tabs, Checkbox, Divider} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/antd/lib/style/index.css';
import './style.less';
import tabIcon from './assets/img/tab.png';
import DynamicTab from './lib/index';

const {Header, Sider, Content} = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((collapsed) => !collapsed);
  return (
    <Layout id="custom-trigger">
      <Sider width={250} trigger={null} collapsible collapsed={collapsed} className="site-layout-sider">
        <div className="logo">
          {collapsed ? (
            <div className="text">
              <img src={tabIcon} alt="icon" width="32" height="32" />
            </div>
          ) : (
            <div className="text">
              <h3>Динамик таб</h3>
            </div>
          )}
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Багцын мэдээлэл adasad
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Туршилт
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Тохиргоо
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
