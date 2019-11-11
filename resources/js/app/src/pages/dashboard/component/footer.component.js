import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <React.Fragment>
            <Footer style={{ textAlign: 'center' }}> LPSE | PBJ | ©2019 </Footer>
        </React.Fragment>
    )
}

export default React.memo(FooterComponent)
