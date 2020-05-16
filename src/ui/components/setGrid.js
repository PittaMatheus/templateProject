import React, { Component } from "react";
import { Row, Col, Slider, Tag } from 'antd';

const gutters = {};
const vgutters = {};
const colCounts = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[1,2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

class SetGrid extends Component {
  state = {
    gutterKey: 1,
    vgutterKey: 1,
    colCountKey: 2,
  };

  onGutterChange = gutterKey => {
    this.setState({ gutterKey });
  };

  onVGutterChange = vgutterKey => {
    this.setState({ vgutterKey });
  };

  onColCountChange = colCountKey => {
    this.setState({ colCountKey });
  };

  render() {
    const { gutterKey, vgutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <Tag color="#87d068">exe</Tag>
        </Col>,
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    return (
      <>
        <span style={{ marginRight: 6 }}>Vertical Margin (px): </span>
        <div style={{ width: '50%' }}>
          <Slider
            min={0}
            max={Object.keys(vgutters).length - 1}
            value={vgutterKey}
            onChange={this.onVGutterChange}
            marks={vgutters}
            step={null}
            tipFormatter={value => vgutters[value]}
          />
        </div>
        <span style={{ marginRight: 6 }}>Column Count:</span>
        <div style={{ width: '50%', marginBottom: 48 }}>
          <Slider
            min={0}
            max={Object.keys(colCounts).length - 1}
            value={colCountKey}
            onChange={this.onColCountChange}
            marks={colCounts}
            step={null}
            tipFormatter={value => colCounts[value]}
          />
        </div>
        <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
        <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>

      </>
    );
  }
}

export default SetGrid;