import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const LayoutFooter = props => {
  return <Footer style={{ textAlign: 'center' }}>{props.text} </Footer>
}

export default LayoutFooter;