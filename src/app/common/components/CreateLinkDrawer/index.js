import React from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import { isMobile } from 'react-device-detect';
import {createShortLink, toggleLinkDrawer} from "../../../redux/link/linkActions";
import {Formik} from "formik";
import CreateNewLink from "../../forms/CreateNewLink";
import {createLinkInitialValues} from "../../forms/initialValues";
import {createLinkSchema} from "../../forms/schemas";
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";

const mapStateToProps = state => ({
    drawerVisible: state.link.visible,
    links: state.firestore.ordered.links
});

const mapDispatchToProps = {
    toggleLinkDrawer,
    createShortLink
};

const CreateLinkDrawer = ({drawerVisible, toggleLinkDrawer, createShortLink}) => {
    return (
        <Drawer
            title="Create a new Link"
            placement="right"
            closable={true}
            onClose={() => toggleLinkDrawer()}
            visible={drawerVisible}
            width={isMobile ? '100%' : '30%'}
        >
            <Formik
                initialValues={createLinkInitialValues}
                validationSchema={createLinkSchema}
                enableReinitialize
                onSubmit={(formProps) => {
                    createShortLink(formProps);
                    toggleLinkDrawer()
                }}
                render={CreateNewLink}
            />
        </Drawer>
    );
};

export default compose(
    firebaseConnect(),
    firestoreConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(CreateLinkDrawer);
