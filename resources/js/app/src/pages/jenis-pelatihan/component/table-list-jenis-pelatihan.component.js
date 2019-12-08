import React, { useEffect } from 'react'
import { Table, Tooltip, Button, Tag } from 'antd';
import { useJenisPelatihanComponent } from '../service/jenis-pelatihan-component.service'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'

const TableListJenisPelatihanComponent = () => {

    const jenisPelatihanComponent = useJenisPelatihanComponent();
    const store = useStore()

    useEffect(() => {
        store.jenisPelatihanStore.fetchData()
    }, [])

    const openDrawer = (data) => {
        jenisPelatihanComponent.drawerFormJenisPelatihanService.openDrawer({ isUpdate: true, data: data })
    }

    const activate = (id) => {
        store.jenisPelatihanStore.activate(id)
    }

    const inactivate = (id) => {
        store.jenisPelatihanStore.inactivate(id)
    }

    const columns = [
        {
            title: 'Jenis Pelatihan',
            dataIndex: 'jenis_pelatihan',
            key: 'jenis_pelatihan',
        },
        // {
        //     title: 'Satuan Kerja',
        //     dataIndex: 'satuan_kerja',
        //     key: 'satuan_kerja',
        // },
        // {
        //     title: 'Unit Kerja',
        //     dataIndex: 'unit_kerja',
        //     key: 'unit_kerja',
        // },
        // {
        //     title: 'Jenis Pelatihan',
        //     dataIndex: 'jenis_pelatihan',
        //     key: 'jenis_pelatihan',
        // },
        // {
        //     title: 'Surat Permohonan',
        //     key: 'surat',
        //     render: (item) => (
        //         <Button 
        //             type="link"
        //             href={`${document.querySelector('meta[name="base-url"]').getAttribute('content')}/preview/surat-permohonan/${item.id}`}
        //             target="_blank"
        //         > 
        //             Surat Permohonan
        //         </Button>
        //     ),
        // },
        {
            title: 'Status',
            key: 'status',
            width: 200,
            render: (item) => (
                <React.Fragment>
                    {/* <Tooltip placement="bottom" title="Edit">
                        <Button type="primary" shape="circle" icon="edit"
                            onClick={() => changeUrl(`/dashboard/pengumuman/edit/${item.key}`)} />
                    </Tooltip>
                    <span> &nbsp; </span> */}
                    {/* <Tooltip placement="bottom" title="detail">
                        <Button type="primary" shape="circle" icon="eye" onClick={() => openDrawer(item)} />
                    </Tooltip> */}
                    {item.status == 101 ?
                        (<Tag color="green"> Active </Tag>)
                        :
                        (<Tag> Inactive </Tag>)
                    }
                </React.Fragment>
            ),
        },
        {
            title: 'Action',
            key: 'operation',
            width: 200,
            render: (item) => (
                <React.Fragment>
                    {/* <Tooltip placement="bottom" title="Edit">
                        <Button type="primary" shape="circle" icon="edit"
                            onClick={() => changeUrl(`/dashboard/pengumuman/edit/${item.key}`)} />
                    </Tooltip>
                    <span> &nbsp; </span> */}
                    <Tooltip placement="bottom" title="Edit">
                        <Button type="primary" shape="circle" icon="edit" onClick={() => openDrawer(item)} />
                    </Tooltip>
                    <Tooltip placement="bottom" title="Activate">
                        <Button style={{ background: 'orange', color: 'white' }} shape="circle" icon="check-circle" onClick={() => activate(item.id)} />
                    </Tooltip>
                    <Tooltip placement="bottom" title="Inactivate">
                        <Button style={{ background: 'red', color: 'white' }} shape="circle" icon="close-circle" onClick={() => inactivate(item.id)} />
                    </Tooltip>
                </React.Fragment>
            ),
        },
    ];

    // const data = [];
    // for (let i = 0; i < 100; i++) {
    //     data.push({
    //         key: i,
    //         nama_instansi: `Edrward ${i}`,
    //         satuan_kerja: `Edrward ${i}`,
    //         unit_kerja: `Edrward ${i}`,
    //         alamat_instansi: `Edrward ${i}`,
    //         provinsi: `Edrward ${i}`,
    //         kab_kota: `Edrward ${i}`,
    //         email: `Edrward ${i}`,
    //         no_telepon: `Edrward ${i}`,
    //         no_handphone: `Edrward ${i}`,
    //         jenis_pelatihan: `Edrward ${i}`,
    //         nama_alamat_pelatihan: `Edrward ${i} asdkfjlkj alsdkfjl kajsdf laksdjfl asjdlfk jlasdkjf lkasjdlfk jlsakdjfl kasjdlfj `,
    //     });
    // }

    return (
        <Table
            loading={store.jenisPelatihanStore.isTableLoading}
            columns={columns}
            dataSource={store.jenisPelatihanStore.getData}
            rowKey="id"
        />
    )
}

export default React.memo(observer(TableListJenisPelatihanComponent))
