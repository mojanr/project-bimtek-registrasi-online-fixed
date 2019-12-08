import React, { useEffect } from 'react'
import { Table, Tooltip, Button } from 'antd';
import { useRegistrasiInstansiComponent } from '../service/registrasi-instansi-component.service'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'

const TableListRegistrasiInstansiComponent = () => {

    const registrasiInstansiComponent = useRegistrasiInstansiComponent();
    const store = useStore()

    useEffect(() => {
        store.registrasiAdosiasiStore.fetchData()
    }, [])

    const openDrawer = (data) => {
      registrasiInstansiComponent.drawerDetailInformationService.openDrawer(data)
    } 

    const columns = [
        {
            title: 'Nama Asosiasi',
            dataIndex: 'nama_instansi',
            key: 'nama_instansi',
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
        {
            title: 'Jenis Pelatihan',
            dataIndex: 'jenis_pelatihan',
            key: 'jenis_pelatihan',
        },
        {
            title: 'Surat Permohonan',
            key: 'surat',
            render: (item) => (
                <Button 
                    type="link"
                    href={`${document.querySelector('meta[name="base-url"]').getAttribute('content')}/preview/surat-permohonan/registrasi/adosiasi/${item.id}`}
                    target="_blank"
                > 
                    Surat Permohonan
                </Button>
            ),
        },
        {
            title: 'Action',
            key: 'operation',
            width: 90,
            render: (item) => (
                <React.Fragment>
                    {/* <Tooltip placement="bottom" title="Edit">
                        <Button type="primary" shape="circle" icon="edit"
                            onClick={() => changeUrl(`/dashboard/pengumuman/edit/${item.key}`)} />
                    </Tooltip>
                    <span> &nbsp; </span> */}
                    <Tooltip placement="bottom" title="detail">
                        <Button type="primary" shape="circle" icon="eye" onClick={() => openDrawer(item)} />
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
            loading={store.registrasiAdosiasiStore.isTableLoading}
            columns={columns} 
            dataSource={store.registrasiAdosiasiStore.getData}  
            rowKey="id"
        />
    )
}

export default React.memo(observer(TableListRegistrasiInstansiComponent))
