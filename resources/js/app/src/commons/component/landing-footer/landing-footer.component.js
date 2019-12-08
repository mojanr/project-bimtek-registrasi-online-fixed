import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

const LandingFooterComponent = () => {
    return (
        <React.Fragment>
            <Footer style={{ textAlign: 'center', fontWeight: "bold" }}>
                {/* BIRO PENGADAAN BARANG/JASA | SEKRETARIAT DAERAH PROVINSI JAWABARAT | 2019 */}
                (ROBITEMPE)
                <br />
                REGISTRASI <i> ONLINE </i> BIMBINGAN TEKNIS SISTEM PENGADAAN SECARA ELEKTRONIK PENYEDIA DAN INSTANSI DI PROVINSI JAWA BARAT
                {/* <br /> */}
                <br />
                V1.0.0
                {process.env.APP_VERSION}

            </Footer>
        </React.Fragment>
    )
}

export default React.memo(LandingFooterComponent)
