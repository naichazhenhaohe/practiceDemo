import React from 'react';
import { Card, Carousel } from 'antd'

import img_1 from '@/img/carousel-img/carousel-1.jpg'
import img_2 from '@/img/carousel-img/carousel-2.jpg'
import img_3 from '@/img/carousel-img/carousel-3.jpg'

export default class CarouselDemo extends React.Component {
  render() {
    return (
      <div>
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>Ant Motion Banner - 1 </h3></div>
            <div><h3>Ant Motion Banner - 2</h3></div>
            <div><h3>Ant Motion Banner - 3</h3></div>
          </Carousel>
        </Card>
        
        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src={img_1} alt="" />
            </div>
            <div>
              <img src={img_2} alt="" />
            </div>
            <div>
              <img src={img_3} alt="" />
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}