import React from 'react'
import { Layout, PageHeader } from 'antd'
import FormPengumumanComponentt from '../component/form-pengumuman.component';

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/pengumuman',
        breadcrumbName: 'List Pengumuman',
    },
    {
        path: '/dashboard/pengumuman/edit',
        breadcrumbName: 'Edit Pengumuman',
    },
];

const PageEditPengumuman = () => {

    return (
        <React.Fragment>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Edit Pengumuman"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>
                    <FormPengumumanComponentt />
                </div>
            </Content>
        </React.Fragment>
    )
}

export default React.memo(PageEditPengumuman)
