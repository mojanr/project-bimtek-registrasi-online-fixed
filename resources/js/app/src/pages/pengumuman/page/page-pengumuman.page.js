import React from 'react'
import { Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';
import ListPengumumanComponent from '../component/list-pengumuman.component';

const { Content } = Layout;

const PagePengumuman = () => {
    return (
        <Layout>
            <LandingNavbarComponent defaultKey="4" />
            <Content style={{ padding: '10px 50px', background: 'white' }}>
                <div style={{ fontSize: '32pt', fontWeight: '400', padding: '10px 0 20px 0', textAlign: 'left' }}>
                    PENGUMUMAN
                </div>

                <ListPengumumanComponent />
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default React.memo(PagePengumuman)
