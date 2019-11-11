import React from 'react'
import { List, Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';

const { Content } = Layout;

const data = [
    {
        title: 'Alamat',
        description: 'Kantor LPSE Kompleks Resor Dago Pakar, Jl. Dago Pakar Permai VI No. 20, Kebon Pisang, Sumur Bandung, Mekarsaluyu, Kec. Cimenyan, Kota Bandung, Jawa Barat 40112'
    },
    {
        title: 'Telepon dan Fax',
        description: '(022) 2536093 Fax : (022) 82521053'
    },
];

const PageKontak = () => {
    return (
        <Layout>
            <LandingNavbarComponent defaultKey="5" />
            <Content style={{ padding: '10px 50px', background: 'white' }}>
                <div style={{ fontSize: '32pt', fontWeight: '400', padding: '10px 0 20px 0', textAlign: 'left' }}>
                    KONTAK
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.186460182838!2d107.63379201477257!3d-6.868247095036719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7170fa264df%3A0xb09aff1fd9ec3926!2sJl.%20Dago%20Pakar%20Permai%20VI%20No.20%2C%20Mekarsaluyu%2C%20Kec.%20Cimenyan%2C%20Bandung%2C%20Jawa%20Barat%2040198!5e0!3m2!1sen!2sid!4v1571467840171!5m2!1sen!2sid" height="450" frameBorder="0" style={{ border: '0', width: '100%' }} allowFullScreen> </iframe>

                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default React.memo(PageKontak)
