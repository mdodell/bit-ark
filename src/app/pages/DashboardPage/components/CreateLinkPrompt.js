import React from 'react';
import { Typography, Button } from 'antd';
import { connect } from 'react-redux';
import commonStyles from "../../../common/styles/common.module.css"
import {toggleLinkDrawer} from "../../../redux/link/linkActions";

const { Paragraph } = Typography;

const mapDispatchToProps = {
  toggleLinkDrawer
};

const CreateLinkPrompt = ({toggleLinkDrawer}) => {
    return (
        <Button type="primary" className={commonStyles.fullWidth} size="large" onClick={() => toggleLinkDrawer()}>
            <Paragraph strong className={`${commonStyles.white} ${commonStyles.noMargin}`}>CREATE YOUR FIRST LINK</Paragraph>
        </Button>
    );
};

export default connect(null, mapDispatchToProps)(CreateLinkPrompt);
