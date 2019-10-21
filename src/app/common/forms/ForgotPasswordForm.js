import React from 'react';
import { Form, Field } from 'formik';
import {Row, Col, Icon, Button} from 'antd';
import {AntInput} from "../components/form/AntFormik";

import commonStyles from "../styles/common.module.css";

const ForgotPasswordForm = () => {
    return (
        <Row>
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
                <Row type="flex" justify="end">
                    <Button type="primary" htmlType="submit">Reset Password</Button>
                </Row>
            </Col>
        </Form>
        </Row>
    );
};

export default ForgotPasswordForm;
