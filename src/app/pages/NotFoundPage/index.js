import React from 'react';
import { Result, Button, Row } from 'antd';
import commonStyles from "../../common/styles/common.module.css";
import {HOME_ROUTE} from "../../common/constants";
import {withRouter} from "react-router-dom";

const NotFoundPage = ({history}) => {
    return (
        <Row type="flex" justify="center" align="middle" className={commonStyles.fullPage}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => history.push(HOME_ROUTE)}>Back Home</Button>}
            />
        </Row>
    );
};

export default withRouter(NotFoundPage);
