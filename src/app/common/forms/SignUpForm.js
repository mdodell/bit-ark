import React from 'react';
import { Form, Field } from 'formik';
import {Row, Col, Button, Icon} from 'antd';
import {AntInput, AntPassword} from "../components/form/AntFormik";

const SignUpForm = () => {
    return (
        <Row gutter={16}>
            <Form>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="firstName"
                        type="firstName"
                        placeholder="First Name"
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="lastName"
                        type="lastName"
                        placeholder="Last Name"
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="email"
                        type="email"
                        placeholder="Email"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntPassword}
                        name="passwordOne"
                        type="passwordOne"
                        placeholder="Password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntPassword}
                        name="passwordTwo"
                        type="passwordTwo"
                        placeholder="Confirm Password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Row type="flex" justify="end">
                        <Button type="primary" htmlType="submit">Create Account</Button>
                    </Row>
                </Col>
            </Form>
        </Row>
    );
};

export default SignUpForm;
