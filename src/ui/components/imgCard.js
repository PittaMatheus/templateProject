import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { List, Card } from 'antd';
const { Meta } = Card;


const ImgCard = props => {
  return <List
    grid={{ ...props.confGrid }}
    dataSource={props.dataSource}
    renderItem={item => (
      <List.Item>
        <Card
          hoverable
          style={{
            width: '100%',
            height: '100%'
          }}
          cover={<img alt={item.alt} src={item.img} />}
        >

          <Meta style={{ color: "white" }} title={item.title} description={item.desc} />
        </Card>
      </List.Item>
    )}
  />
}

ImgCard.defaultProps = {
  confGrid: {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 6,
    xxl: 3
  },
};

export default ImgCard;