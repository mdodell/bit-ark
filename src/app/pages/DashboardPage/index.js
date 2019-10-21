import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

import commonStyles from "../../common/styles/common.module.css";
import UrlCard from "./components/UrlCard";
import CreateLinkPrompt from "./components/CreateLinkPrompt";
import {isMobile} from "react-device-detect";
import CurrentLink from "./components/CurrentLink";
import Loading from "../../common/components/Loading";

const { Title } = Typography;

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    links: state.firestore.ordered.links
});

const renderCards = (links, setCurrLink) => {
    return links && links.map((link) =>
        <UrlCard
            key={link.id}
            id={link.id}
            createdAt={link.createdAt}
            originalUrl={link.originalUrl}
            shortUrl={link.shortUrl}
            urlCode={link.urlCode}
            setCurrLink={() => setCurrLink(link)}
        />
    );
};

const DeshboardPage = ({links}) => {
    const [currLink, setCurrLink] = useState(null);
    if(!links){
        return <Loading />
    }
    return (
        <Fragment>
            <Row type="flex" className={commonStyles.fullPage}>
                <Col xl={8} xs={24} className={commonStyles.fullPageHeight} style={{backgroundColor: '#DCDCDC'}} order={isMobile ? 1 : 0}>
                    <Row type="flex" justify="center" className={commonStyles.fullHeight}>
                        <Col span={23} className={commonStyles.marginBottom}>
                            <Title className={commonStyles.marginTop} level={4}>{links && links.length} {links.length === 1 ? 'Link' : 'Links'} Created</Title>
                            {links && links.length !== 0 ? renderCards(links, setCurrLink) : <CreateLinkPrompt />}
                        </Col>
                    </Row>
                </Col>
                <Col xl={16} xs={24} className={commonStyles.marginTop} order={isMobile ? 0 : 1}>
                    <Row type="flex" justify="center">
                        <Col span={23}>
                            <CurrentLink link={currLink} availableLinkCount={links.length} setCurrLink={() => setCurrLink(null)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect((props) => [{
        collection: 'links',
        where: [
            ['ownerId', '==', props.auth.uid]
        ]
    }]
))(DeshboardPage);
