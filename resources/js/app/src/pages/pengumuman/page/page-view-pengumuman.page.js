import React from 'react'
import { Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';

const { Content } = Layout;

const PageViewPengumuman = () => {
    return (
        <Layout>
            <LandingNavbarComponent defaultKey="4" />
            <Content style={{ padding: '10px 50px', background: 'white' }}>
                <div style={{ fontSize: '32pt', fontWeight: '400', padding: '10px 0 20px 0', textAlign: 'left' }}>
                    JUDUL PENGUMUMAN
                </div>

                CONTENT
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default PageViewPengumuman
