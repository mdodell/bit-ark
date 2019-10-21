import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {Layout, Typography, Row, Button, Icon} from 'antd';
import commonStyles from "../../styles/common.module.css";
import navbarStyles from "./navbar.module.css";
import {toggleLinkDrawer} from "../../../redux/link/linkActions";
import CreateLinkDrawer from '../CreateLinkDrawer';

const { Header } = Layout;
const { Title } = Typography;

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    link: state.link
});

const mapDispatchToProps = {
    toggleLinkDrawer
};


const NavBar = ({auth, toggleLinkDrawer}) => {
    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
        <Fragment>
            <Layout>
                <Header className={navbarStyles.navbarContainer}>
                    <Row type="flex" justify="space-between" align="middle" className={navbarStyles.navbarContentContainer}>
                        <Title level={1} className={`${commonStyles.white} ${commonStyles.noMargin}`}>BIT-ARK</Title>
                        {authenticated &&
                            <Button size="large" onClick={() =>
                                toggleLinkDrawer()
                            }>
                                Create<Icon type="edit" />
                            </Button>
                        }
                    </Row>
                </Header>
            </Layout>
            <CreateLinkDrawer />
        </Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
