import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Modal } from 'antd';
import {registerUser} from "../../../redux/auth/authActions";
import {signUpInitialValues} from "../../forms/initialValues";
import {signUpSchema} from "../../forms/schemas";
import SignUpForm from "../../forms/SignUpForm";

const mapDispatchToProps = {
    registerUser
};

const CreateAccountModal = ({visible, onCancel, registerUser}) => {
    return (
        <Modal
            title="Register for an account"
            visible={visible}
            onCancel={onCancel}
            footer={null}
            centered
        >
            <Formik
                initialValues={signUpInitialValues}
                validationSchema={signUpSchema}
                render={SignUpForm}
                onSubmit={formProps => registerUser(formProps)}
            />
        </Modal>
    );
};

export default connect(null, mapDispatchToProps)(CreateAccountModal);
