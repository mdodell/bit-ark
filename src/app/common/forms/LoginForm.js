import React from 'react';
import {Row, Col, Icon, Button} from 'antd';
import {Form, Field} from "formik";
import {AntInput, AntPassword} from "../components/form/AntFormik";

import commonStyles from "../styles/common.module.css"

const LoginForm = () => {
    return (
        <Row gutter={16}>
            <Form>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="email"
                        type="email"
                        placeholder="Email"
                        prefix={<Icon type="mail" className={commonStyles.opaqueIcon} />}
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntPassword}
                        name="password"
                        type="password"
                        placeholder="Password"
                        prefix={<Icon type="lock" className={commonStyles.opaqueIcon} />}
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Button type="primary" size="large" htmlType="submit" className={commonStyles.fullWidth}>Login</Button>
                </Col>
            </Form>
        </Row>
    );
};

export default LoginForm;
