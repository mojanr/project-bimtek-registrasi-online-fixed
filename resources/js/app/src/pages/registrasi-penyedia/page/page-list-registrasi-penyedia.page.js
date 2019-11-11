import React from 'react'
import { Layout, PageHeader, Button } from 'antd'
import TableListRegistrasiPenyediaComponent from '../component/table-list-registrasi-penyedia.component';
import { useHistory } from 'react-router-dom'

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/registrasi/penyedia',
        breadcrumbName: 'List Registrasi Penyedia',
    },
];

const PageListRegistrasiPenyedia = () => {

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
                title="List Registrasi Penyedia"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>

                    <div style={{ padding: "0 0 24px 0" }}>
                        <Button 
                            type="primary" 
                            href={`${document.querySelector('meta[name="base-url"]').getAttribute('content')}/export/registrasi/penyedia`} > 
                                Export Excel 
                        </Button>
                    </div>
                    
                    <TableListRegistrasiPenyediaComponent />

                </div>
            </Content>
        </React.Fragment>
    )
}

export default React.memo(PageListRegistrasiPenyedia)
