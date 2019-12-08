import React from 'react'
import { Layout, PageHeader, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import TableListJenisPelatihanComponent from '../component/table-list-jenis-pelatihan.component';
import { observer } from 'mobx-react-lite'
import DrawerFormJenisPelatihanComponent from '../component/drawer-form-jenis-pelatihan.component';
import { useJenisPelatihanComponent } from '../service/jenis-pelatihan-component.service'

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/jenis-pelatihan',
        breadcrumbName: 'List Jenis Pelatihan',
    },
];

const PageListJenisPelatihan = () => {

    const history = useHistory()
    const jenisPelatihanComponent = useJenisPelatihanComponent()

    const changeUrl = (path) => {
        history.push(path)
    }

    const openDrawer = () => {
        jenisPelatihanComponent.drawerFormJenisPelatihanService.openDrawer({ isUpdate: false, data: { jenis_pelatihan: '' } })
    }

    return (
        <React.Fragment>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="List Jenis Pelatihan"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>

                    <div style={{ padding: "0 0 24px 0" }}>
                        <Button type="primary" onClick={() => openDrawer()}>
                            Tambah Data
                        </Button>  
                    </div>

                    <TableListJenisPelatihanComponent />

                </div>
            </Content>
            <DrawerFormJenisPelatihanComponent />
        </React.Fragment>
    )
}

export default React.memo(observer(PageListJenisPelatihan))
