import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const { Header } = Layout;

class LayoutHeader extends Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={'/home'}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/teste'}>teste</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={'/conf'}>
          <FontAwesomeIcon icon={faCogs} />
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default LayoutHeader; 