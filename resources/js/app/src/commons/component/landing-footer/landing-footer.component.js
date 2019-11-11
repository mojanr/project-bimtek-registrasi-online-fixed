import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

const LandingFooterComponent = () => {
    return (
        <React.Fragment>
            <Footer style={{ textAlign: 'center', fontWeight: "bold" }}> BIRO PENGADAAN BARANG/JASA | SEKRETARIAT DAERAH PROVINSI JAWABARAT | 2019</Footer>
        </React.Fragment>
    )
}

export default React.memo(LandingFooterComponent)
