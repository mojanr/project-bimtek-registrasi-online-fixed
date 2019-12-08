import React from 'react'
import { Layout, PageHeader, Button } from 'antd'
import TableListRegistrasiInstansiComponent from '../component/table-list-registrasi-instansi.component';
import { useHistory } from 'react-router-dom'
import DrawerDetailInformationComponent from '../component/drawer-detail-information.component';

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/registrasi/asosiasi',
        breadcrumbName: 'List Registrasi Asosiasi',
    },
];

const PageListRegistrasiAdosiasi = () => {

    const history = useHistory()

    const changeUrl = (path) => {
        history.push(path)
    }

    return (
        <React.Fragment>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="List Registrasi Asosiasi"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>

                    <div style={{ padding: "0 0 24px 0" }}>
                        <Button 
                            type="primary" 
                            href={`${document.querySelector('meta[name="base-url"]').getAttribute('content')}/export/registrasi/adosiasi`} > 
                                Export Excel 
                        </Button>  
                    </div>

                    <TableListRegistrasiInstansiComponent />

                </div>
            </Content>
            <DrawerDetailInformationComponent />
        </React.Fragment>
    )
}

export default React.memo(PageListRegistrasiAdosiasi)
