import React from 'react';
import { Row, Col, Icon, Typography } from 'antd';
import commonStyles from '../../styles/common.module.css'

const { Title } = Typography;

const Loading = () => {
    return (
        <Row type="flex" justify="center" align="middle" className={commonStyles.fullPage}>
            <Row type="flex" justify="center">
                <Col span={24}>
                    <Row type="flex" justify="center">
                        <Icon type="loading" className={commonStyles.largeIcon}/>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row type="flex" justify="center">
                        <Title>Loading...</Title>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};

export default Loading;
