import React, { useState } from 'react';
import { Typography, Button, Icon } from 'antd';
import dashboardStyles from "./dashboardPage.module.css"
import commonStyles from "../../common/styles/common.module.css";
import {withRouter} from "react-router-dom";

const { Title } = Typography;

const HomePage = ({ history }) => {
    const [ghost, toggleGhost] = useState(true);
    return (
        <div className={dashboardStyles.backgroundContainer}>
            <Title className={`${commonStyles.white} ${commonStyles.textAlignCenter}`}>BIT-ARK</Title>
            <Button
                ghost={ghost}
                onMouseEnter={() => toggleGhost(!ghost)}
                onMouseLeave={() => toggleGhost(!ghost)}
                onClick={() => history.push('/login')}
                size="large"
            >
                Get Started
                <Icon type="right" />
            </Button>
        </div>
    );
};

export default withRouter(HomePage);
