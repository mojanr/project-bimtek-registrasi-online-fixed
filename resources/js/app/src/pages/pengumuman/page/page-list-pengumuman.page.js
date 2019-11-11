import React from 'react'
import { Layout, PageHeader, Button } from 'antd'
import TableListPengumumanComponent from '../component/table-list-pengumuman.component';
import { useHistory } from 'react-router-dom'

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/pengumuman',
        breadcrumbName: 'List Pengumuman',
    },
];

const PageListPengumuman = () => {

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
                title="List Pengumuman"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>

                    <div style={{ padding: "0 0 24px 0" }}>
                        <Button type="primary" onClick={() => changeUrl('/dashboard/pengumuman/create')}> Buat Pengumuman </Button>
                    </div>
                    <TableListPengumumanComponent />
                </div>
            </Content>
        </React.Fragment>
    )
}

export default React.memo(PageListPengumuman)
