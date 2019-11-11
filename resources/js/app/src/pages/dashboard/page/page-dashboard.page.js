import React from 'react'
import { Layout } from 'antd';
import MenuComponent from '../component/menu.component';
import RouterConfigComponent from '../../../commons/component/router/router-config.component';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';

const { Sider } = Layout;

const PageDashboard = ({ routes }) => {

    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                theme="light"
            >
                <div style={{
                    // height: '32px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '16px',
                    textAlign: 'center',
                    borderBottom: 'solid #e8e8e8 1px',
                }}>
                    <h3> Registrasi Bimtek Online App </h3>
                </div>
                <MenuComponent />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <React.Fragment>
                    <RouterConfigComponent routes={routes} />
                </React.Fragment>
                {/* <FooterComponent /> */}
                <LandingFooterComponent />
            </Layout>
        </Layout>
    )
}

export default React.memo(PageDashboard)
