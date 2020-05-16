import React, { Component } from "react";
import ImgCard from "../components/imgCard"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        title: 'Title 1',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card'
      },
      {
        title: 'Title 2',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card'
      },
      {
        title: 'Title 3',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card'
      },
      {
        title: 'Title 4',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card'
      },
      {
        title: 'Title 5',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card'
      },
      {
        title: 'Title 6',
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt: 'example_alt',
        desc: 'here is description of the Card',

      }],
      confGrid: {
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 3
      }
    }
  }

  render() {
    const { dataSource, confGrid } = this.state;
    return <ImgCard
      confGrid={confGrid}
      dataSource={dataSource}
    />
  }
}

export default Home; 
