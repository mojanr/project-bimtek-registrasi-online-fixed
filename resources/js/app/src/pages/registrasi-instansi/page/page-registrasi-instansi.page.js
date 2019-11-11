import React from 'react'
import { Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';
import FormRegistrasiInstansiComponent from '../component/form-registrasi-instansi.component';

const { Content } = Layout;

const PageRegistrasiInstansi = () => {
    return (
        <Layout>
            <LandingNavbarComponent defaultKey="2" />
            <Content style={{ padding: '10px 50px', background: 'white' }}>
                <div style={{ fontSize: '32pt', fontWeight: '400', padding: '10px 0 20px 0', textAlign: 'left' }}>
                    REGISTRASI INSTANSI/SATKER/UNIT KERJA
                </div>

               <FormRegistrasiInstansiComponent />
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default React.memo(PageRegistrasiInstansi)
