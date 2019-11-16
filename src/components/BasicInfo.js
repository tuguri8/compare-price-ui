import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon, List, Tag, Button} from "antd";
import './BasicInfo.scss'
import './ParkingImg.scss'

@observer
class BasicInfo extends Component {
  render() {
    const {dataList} = this.props;
    console.log(dataList);
    return (
      <List dataSource={dataList}
            renderItem={(item, idx) => (
              <div className="basic">
                <div>
                  <img className="parking-img" alt="parking-img" src={item.image}/>
                </div>
                <Typography.Text type="" className="title">{item.original_name}</Typography.Text>
                  <div className="row">
                    <Typography.Text className="item-key">구매 가격</Typography.Text>
                    <Typography.Text className="">{item.original_price} 원</Typography.Text>
                  </div>
                  <div className="row">
                    <Typography.Text className="item-key">현재 최저가</Typography.Text>
                    <Typography.Text style={{color: item.lprice - item.original_price > 0 ? "red" : "blue"}} className="">{item.lprice}({item.lprice-item.original_price >= 0 ? "+" : null}{item.lprice-item.original_price}) 원</Typography.Text>
                  </div>
                  <div><Button className="buy-button" href={item.link} ghost="true" icon="shopping-cart" type="danger" block>구매하기</Button></div>
              </div>
            )}
      />
    );
  }
}

export default BasicInfo;
