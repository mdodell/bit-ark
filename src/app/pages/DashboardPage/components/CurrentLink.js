import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {Typography, Row, Col, Divider, Button, Icon} from 'antd';
import commonStyles from '../../../common/styles/common.module.css';
import {deleteLink, toggleLinkDrawer} from "../../../redux/link/linkActions";

const { Title } = Typography;

const mapDispatchToProps = {
    toggleLinkDrawer,
    deleteLink
};

const CurrentLink = ({link, deleteLink, availableLinkCount, setCurrLink}) => {
    if(!link){
        if(availableLinkCount !== 0) {
            return <Title level={2}>Click the edit icon on a card to select a link!</Title>
        } else {
            return <Title level={2}>Create a link!</Title>
        }
    }
    return (
        <Fragment>
            <Title level={1} className={commonStyles.noMargin}>{link.urlCode}</Title>
            <Title level={2} className={commonStyles.noMargin}>Created at: {(new Date(link.createdAt.seconds * 1000)).toDateString()}</Title>
            <Divider />
            <Row type="flex" justify="start" gutter={4}>
                <Col>
                    <Title level={3} className={commonStyles.noMargin}>Short URL: </Title>
                </Col>
                <Col>
                    <Title level={3} className={`${commonStyles.noMargin} ${commonStyles.fontWeightLighter}`} copyable>{link.shortUrl}</Title>
                </Col>
            </Row>
            <Row type="flex" justify="start" aling="middle" gutter={4}>
                <Col>
                    <Title level={3} className={commonStyles.noMargin}>Long URL: </Title>
                </Col>
                <Col>
                    <Title level={3} className={`${commonStyles.noMargin} ${commonStyles.fontWeightLighter}`} copyable>{link.originalUrl}</Title>
                </Col>
            </Row>
            <Row>
                <Button type="danger" size="large" className={`${commonStyles.marginTop}`} onClick={() => {
                    deleteLink(link);
                    setCurrLink();
                }}>Delete Link<Icon type="delete" /></Button>
            </Row>
        </Fragment>
    );
};

export default connect(null, mapDispatchToProps)(CurrentLink);
