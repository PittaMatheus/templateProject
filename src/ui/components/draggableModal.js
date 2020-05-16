import React, { Component } from "react";
import { Modal } from "antd";

class DraggableModal extends Component {
  constructor(props) {
    super(props);

    this.container = null;

    const { width } = props;
    this.state = {
      newBodyStyle: { ...props.bodyStyle, height: props.height },
      isDragging: false,
      originalX: parseInt(((window.innerWidth / 2) - (width / 2))),
      originalY: 50,
      translateX: parseInt(((window.innerWidth / 2) - (width / 2))),
      translateY: 120,
      lastTranslateX: parseInt(((window.innerWidth / 2) - (width / 2))),
      lastTranslateY: 50,
      pristine: true,
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { width } = props;
    if (!props.visible) {
      return {
        ...state,
        pristine: true,
      }
    }
    if (state.pristine) {
      return {
        originalX: parseInt(((window.innerWidth / 2) - (width / 2))),
        originalY: 50,
        translateX: parseInt(((window.innerWidth / 2) - (width / 2))),
        translateY: 120,
        lastTranslateX: parseInt(((window.innerWidth / 2) - (width / 2))),
        lastTranslateY: 50,
        pristine: false,
      }
    }
    return state;
  }

  handleResize = () => this.updateHeight();

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('resize', this.handleResize);
  }
  handleMouseDown = (event) => {
    let { clientX, clientY, target } = event;
    if (target.className != "ant-modal-title" && target.className != "ant-modal-header")
      return false;

    event.preventDefault();
    event.stopPropagation();

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true,
      pristine: false
    });
  }
  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => {

      const maxX = window.innerWidth - 50;
      const maxY = window.innerHeight - 50;

      if (clientX < 50) clientX = 50;
      if (clientX > maxX) clientX = maxX;

      if (clientY < 20) clientY = 20;
      if (clientY > maxY) clientY = maxY;

      let translateX = clientX - prevState.originalX + prevState.lastTranslateX;
      let translateY = clientY - prevState.originalY + prevState.lastTranslateY;

      return {
        translateX: (translateX),
        translateY: (translateY)
      }
    }, () => {
      if (onDrag) {
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  }
  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,
        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );
  }

  updateHeight = () => {
    const { height, bodyStyle } = this.props;
    const { newBodyStyle } = this.state;
    if (height != 'auto') {
      if (height + 180 > window.innerHeight) {
        if (newBodyStyle.height != window.innerHeight - 180) {
          this.setState({
            newBodyStyle: {
              ...bodyStyle,
              height: window.innerHeight - 180,
              overflowY: 'scroll'
            }
          })
        }
      } else {
        if (newBodyStyle.height != height) {
          this.setState({
            newBodyStyle: {
              ...bodyStyle,
              height,
            }
          })
        }
      }
    }
  }

  render() {
    const { isDragging, translateX, translateY, width, newBodyStyle: bodyStyle } = this.state;
    return <div draggable={true}
      onMouseDown={this.handleMouseDown}>
      <Modal
        className='ui-draggable-modal'
        maskClosable={false}
        width={width}
        style={{ top: translateY, left: translateX }}
        {...this.props}
        bodyStyle={bodyStyle}
      >
        {this.props.before}
        {this.props.children}
        {this.props.after}
      </Modal>
    </div>;
  }
}

DraggableModal.defaultProps = {
  cancelText: "Cancel",
  before: null,
  after: null,
  height: "auto",
  message: "",
  onCancel: null,
  onConfirm: null,
  okText: "Confirm",
  title: "",
  visible: true,
  width: 520
}

export default DraggableModal;