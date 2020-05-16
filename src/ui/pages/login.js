import React, { Component, Fragment } from "react";
import DraggableModal from "../components/draggableModal"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }


  close = () => {
    this.setState({
      visible: false
    })
  }


  render() {
    const { visible } = this.state
    return <>
      <DraggableModal
        title={<Fragment>'teesteeeee'</Fragment>}
        onCancel={this.close}
        visible={visible}
      ></DraggableModal>
    </>
  }
}
export default Login;

