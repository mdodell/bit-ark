import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography, Button } from 'antd';
import { Formik } from 'formik';
import commonStyles from "../../common/styles/common.module.css";
import {loginInitialValues} from "../../common/forms/initialValues";
import {loginSchema} from "../../common/forms/schemas";
import {loginAnonymously, loginWithEmail} from "../../redux/auth/authActions";
import ForgotPasswordModal from "../../common/components/modals/forgotPassword";
import CreateAccountModal from "../../common/components/modals/createAccount";
import LoginForm from "../../common/forms/LoginForm";

const { Title, Paragraph } = Typography;

const mapDispatchToProps = {
    loginWithEmail,
    loginAnonymously
};

const LoginPage = ({loginAnonymously, loginWithEmail}) => {

    const [forgotPasswordModalVisible, toggleForgotPassword] = useState(false);
    const [registerModalVisible, toggleRegister] = useState(false);


    return (
        <Fragment>
            <Row type="flex" justify="center" align="middle" className={`${commonStyles.fullPage} ${commonStyles.backgroundBlur}`}>
                <Col xs={20} xl={10}>
                    <Row type="flex" justify="center" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5vh 0'}}>
                        <Col span={20}>
                            <Title
                                level={1}
                                className={`${commonStyles.noMargin} ${commonStyles.textAlignCenter}`}
                            >
                                BIT-ARK
                            </Title>
                            <Title
                                level={4}
                                className={`${commonStyles.noMargin} ${commonStyles.textAlignCenter}`}
                            >
                                A URL Shortener
                            </Title>
                            <Formik
                                initialValues={loginInitialValues}
                                validationSchema={loginSchema}
                                onSubmit={formProps => loginWithEmail(formProps)}
                                render={LoginForm}
                            />
                            <Button
                                type="primary"
                                className={`${commonStyles.marginTop} ${commonStyles.fullWidth}`}
                                size="large"
                                onClick={() => loginAnonymously()}
                            >
                                Sign In Anonymously
                            </Button>
                            <Row type="flex" justify="space-between" className={commonStyles.marginTop}>
                                <Paragraph strong onClick={() => toggleRegister(true)} className={commonStyles.cursorPointer}>Register</Paragraph>
                                <Paragraph strong onClick={() => toggleForgotPassword(true)} className={commonStyles.cursorPointer}>Forgot Password?</Paragraph>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <CreateAccountModal visible={registerModalVisible} onCancel={() => toggleRegister(false)} />
            <ForgotPasswordModal visible={forgotPasswordModalVisible} onCancel={() => toggleForgotPassword(false)}/>
        </Fragment>
    );
};

export default connect(null, mapDispatchToProps)(LoginPage);
