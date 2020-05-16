import React, { Fragment } from "react";
import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";


const LayoutBread = props => {
  return <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item><Link to={'/home/sub'} >Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
}


export default LayoutBread;