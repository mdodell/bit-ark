import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import {forgotPassword} from "../../../redux/auth/authActions";
import ForgotPasswordForm from "../../forms/ForgotPasswordForm";
import {Formik} from "formik";
import {forgotPasswordInitialValues} from "../../forms/initialValues";
import {forgotPasswordSchema} from "../../forms/schemas";

const mapDispatchToProps = {
    forgotPassword
};

const ForgotPasswordModal = ({visible, forgotPassword, onCancel}) => {
    return (
        <Modal
            title="Forgot your Password?"
            visible={visible}
            footer={null}
            onCancel={onCancel}
            centered
        >
            <Formik
                onSubmit={formProps => forgotPassword(formProps)}
                render={ForgotPasswordForm}
                initialValues={forgotPasswordInitialValues}
                validationSchema={forgotPasswordSchema}
            />
        </Modal>
    );
};

export default connect(null, mapDispatchToProps)(ForgotPasswordModal);
