import React, { useEffect } from 'react'
import { Table } from 'antd';
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'

const dataSource = [
    {
        id: '1',
        nama_perusahaan: 'Mike',
        alamat_perusahaan: 32,
        email: '10 Downing Street',
        no_telepon: '10 Downing Street',
        no_handphone: '10 Downing Street',
        tanggal_pelatihan: '10 Downing Street',
        status: '10 Downing Street',
    },
    {
        id: '2',
        nama_perusahaan: 'Mike',
        alamat_perusahaan: 32,
        email: '10 Downing Street',
        no_telepon: '10 Downing Street',
        no_handphone: '10 Downing Street',
        tanggal_pelatihan: '10 Downing Street',
        status: '10 Downing Street',
    },
    {
        id: '3',
        nama_perusahaan: 'Mike',
        alamat_perusahaan: 32,
        email: '10 Downing Street',
        no_telepon: '10 Downing Street',
        no_handphone: '10 Downing Street',
        tanggal_pelatihan: '10 Downing Street',
        status: '10 Downing Street',
    },
    {
        id: '4',
        nama_perusahaan: 'Mike',
        alamat_perusahaan: 32,
        email: '10 Downing Street',
        no_telepon: '10 Downing Street',
        no_handphone: '10 Downing Street',
        tanggal_pelatihan: '10 Downing Street',
        status: '10 Downing Street',
    },
    {
        id: '5',
        nama_perusahaan: 'Mike',
        alamat_perusahaan: 32,
        email: '10 Downing Street',
        no_telepon: '10 Downing Street',
        no_handphone: '10 Downing Street',
        tanggal_pelatihan: '10 Downing Street',
        status: '10 Downing Street',
    },
];

const columns = [
{
        title: 'Nama Perusahaan',
        dataIndex: 'nama_perusahaan',
        key: 'nama_perusahaan',
    },
    {
        title: 'Alamat Perusahaan',
        dataIndex: 'alamat_perusahaan',
        key: 'alamat_perusahaan',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'No Telepon',
        dataIndex: 'no_telepon',
        key: 'no_telepon',
    },
    {
        title: 'No Handphone',
        dataIndex: 'no_handphone',
        key: 'no_handphone',
    },
    {
        title: 'Tanggal Pelatihan',
        dataIndex: 'tanggal_pelatihan',
        key: 'tanggal_pelatihan',
    },
];

const TableListRegistrasiPenyediaComponent = () => {

    const store = useStore()

    useEffect(() => {
        store.registrasiPenyediaStore.fetchData()
    }, [])

    return (
        <React.Fragment>
            <Table 
                loading={store.registrasiPenyediaStore.isTableLoading} 
                columns={columns} 
                dataSource={store.registrasiPenyediaStore.getData} 
                rowKey="id" 
            />
        </React.Fragment>
    )
}

export default React.memo(observer(TableListRegistrasiPenyediaComponent))
