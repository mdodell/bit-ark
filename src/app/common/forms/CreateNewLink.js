import React from 'react';
import { Form, Field} from 'formik';
import {Row, Col, Button, Icon} from 'antd';

import commonStyles from "../styles/common.module.css";
import {AntInput} from "../components/form/AntFormik";
import shortid from "shortid";

const CreateNewLink = ({setFieldValue}) => {
    return (
        <Row gutter={16} className={commonStyles.fullHeight}>
            <Form>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="longUrl"
                        type="longUrl"
                        placeholder="https://www.google.com"
                        label="Original URL"
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Field
                        component={AntInput}
                        name="shortUrl"
                        type="shortUrl"
                        label="Shortened URL"
                        addonBefore="https://bit-ark.firebaseapp.com/"
                        placeholder="short_URL"
                        hasFeedback
                    />
                </Col>
                <Col span={24}>
                    <Button type="primary" className={commonStyles.fullWidth} onClick={() => setFieldValue('shortUrl', shortid.generate())}>Generate Random URL<Icon type="edit" /></Button>
            </Col>
                <Col span={24}>
                    <Button type="primary" className={`${commonStyles.fullWidth} ${commonStyles.marginTop}`} htmlType="submit">Create Link<Icon type="link" /></Button>
                </Col>
            </Form>
        </Row>
    );
};

export default CreateNewLink;
