import React, {Component} from 'react';
import {Spin, Icon} from 'antd';
import {inject, observer} from 'mobx-react/index';
import CommonHeader from "../common/CommonHeader";
import ParkingImg from "../ParkingImg"
import TitleInfo from "../TitleInfo"
import BasicInfo from "../BasicInfo"
import AdditionalInfo from "../AdditionalInfo"
import HourInfo from "../HourInfo"
import queryString from "query-string";


@inject('parkingInfoStore')
@observer
class MainContainer extends Component {
    componentDidMount () {
        // fixme
        const query = queryString.parse(this.props.location.search);
        console.log(query.email);
        this.props.parkingInfoStore.handleEmail(query.email);
        this.props.parkingInfoStore.getParkingData(query.email);
    }

    render() {
      const {parkingInfoStore} = this.props;
      const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

        return (
            <React.Fragment>
                <CommonHeader email={parkingInfoStore.email}/>
                <Spin indicator={antIcon} spinning={parkingInfoStore.loading} tip="로딩중">
                  <BasicInfo dataList={parkingInfoStore.parkingData}/>
                </Spin>
            </React.Fragment>
        )
    }
}

export default MainContainer;
