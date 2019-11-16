import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Row, Col} from "antd";
import { NavBar, Icon, NoticeBar, WhiteSpace } from 'antd-mobile';

import './CommonHeader.scss'
import 'antd-mobile/dist/antd-mobile.css';

@observer
class CommonHeader extends Component {
  render() {
    const {email} = this.props;
    return (
      <React.Fragment>
        <NavBar className="header" mode="light">최저가 정보</NavBar>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          {email}님의 최근 구매 내역에 대한 실시간 최저가 검색 결과입니다! 구매 버튼을 통해 현재 최저가로 구매해보세요!
          </NoticeBar>
      </React.Fragment>
    );
  }
}

export default CommonHeader;
