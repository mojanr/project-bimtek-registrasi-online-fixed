import React from 'react'
import { Layout, PageHeader } from 'antd'
import AlertRecostructionComponent from '../../../commons/component/alert-reconstruction/alert-recostruction.component';

const { Content } = Layout;

const routes = [
    {
        path: '/user',
        breadcrumbName: 'List User',
    },
];

const PageListPermission = () => {
    return (
        <React.Fragment>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="List User"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                {/* <div style={{ background: '#fff', textAlign: 'center' }}> */}
                {/* <TableRegistrasiInstansiComponent />  */}
                <AlertRecostructionComponent />
                {/* </div> */}
            </Content>
        </React.Fragment>
    )
}

export default React.memo(PageListPermission)
