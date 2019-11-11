import React from 'react'
import { Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';
import FormRegistrasiPenyediaComponent from '../component/form-registrasi-penyedia.component';

const { Content } = Layout;


const PageRegistrasiPenyedia = () => {
    return (
        <Layout>
            <LandingNavbarComponent defaultKey="3" />
            <Content style={{ padding: '10px 50px 25px 50px', background: 'white' }}>
                <div style={{ fontSize: '32pt', fontWeight: '400', padding: '10px 0 20px 0', textAlign: 'left' }}>
                    REGISTRASI PENYEDIA
                </div>

                <FormRegistrasiPenyediaComponent />
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default React.memo(PageRegistrasiPenyedia)
