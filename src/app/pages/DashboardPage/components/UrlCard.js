import React from 'react';
import { Card, Typography, Row, Col, Icon, Tooltip } from 'antd';

import commonStyles from "../../../common/styles/common.module.css";

const { Paragraph, Title } = Typography;

const UrlCard = ({createdAt, originalUrl, shortUrl, urlCode, id, setCurrLink}) => {
    return (
        <Card
            size="small"
            className={`${commonStyles.fullWidth} ${commonStyles.marginTop}`}
            extra={
                <Row type="flex" justify="start" gutter={4} className={commonStyles.fullWidth}>
                    <Col>
                        <Paragraph className={commonStyles.noMargin} strong>Link: </Paragraph>
                    </Col>
                    <Col>
                        <Paragraph className={commonStyles.noMargin}>{urlCode}</Paragraph>
                    </Col>
                    <Col style={{flexGrow: '1'}}>
                        <Row type="flex" justify="end" align="middle" className={` ${commonStyles.fullHeight} ${commonStyles.fullWidth}`}>
                            <Tooltip title="edit" placement="left">
                                <Icon type="edit" onClick={setCurrLink}/>
                            </Tooltip>
                        </Row>
                    </Col>
                </Row>
            }
        >
            <Title level={4}>Created at: {(new Date(createdAt.seconds * 1000)).toDateString()}</Title>
            <Row type="flex" justify="start" gutter={4} className={commonStyles.fullWidth}>
                <Col>
                    <Paragraph className={commonStyles.noMargin} strong>Short Url:</Paragraph>
                </Col>
                <Col>
                    <Paragraph className={commonStyles.noMargin} copyable>{shortUrl}</Paragraph>
                </Col>
            </Row>
            <Row type="flex" justify="start" gutter={4} className={commonStyles.fullWidth}>
                <Col>
                    <Paragraph className={commonStyles.noMargin} strong>Long Url:</Paragraph>
                </Col>
                <Col>
                    <Paragraph className={commonStyles.noMargin} copyable>{originalUrl}</Paragraph>
                </Col>
            </Row>
        </Card>
    );
};

export default UrlCard;
