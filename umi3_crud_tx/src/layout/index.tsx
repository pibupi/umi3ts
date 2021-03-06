import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.scss';
import { Link, useHistory } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

// 根据获取到的所有地址,来决定选中状态
const getMenuSeletedKeys = (pathname: string): string[] => {
  if (pathname == '') return [];

  let paths: string[] = pathname.split('/');
  let selectedKeys: string[] = [];

  paths.forEach((_, i) => {
    selectedKeys.push(paths.slice(0, paths.length - i).join('/'));
  });

  return selectedKeys;
};

const index = (props: { children: React.ReactNode }) => {
  const { location } = useHistory();
  // console.log(location);
  return (
    <Layout className={styles.layout}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="title">米修在线</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={getMenuSeletedKeys(location.pathname)}
        >
          <Menu.Item key="/course">
            <Link to="/course">课程记录</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于我们</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{ margin: '24px 16px', padding: 24, minHeight: 'max-content' }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          umi3-demo created by 米修在线
        </Footer>
      </Layout>
    </Layout>
  );
};

export default index;
