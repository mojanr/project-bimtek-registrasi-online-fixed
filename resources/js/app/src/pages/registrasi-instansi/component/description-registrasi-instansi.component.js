import React from 'react'
import { Descriptions, Badge } from 'antd';

const DescriptionRegistrasiInstansiComponent = ({ data }) => {
    return (
        <Descriptions column={1} layout="horizontal" size="small" bordered>
            <Descriptions.Item label="Nama Instansi" span={1}> {data.nama_instansi} </Descriptions.Item>
            <Descriptions.Item label="Satuan Kerja" span={1}> {data.satuan_kerja} </Descriptions.Item>
            <Descriptions.Item label="Unit Kerja" span={1}> {data.unit_kerja} </Descriptions.Item>
            <Descriptions.Item label="Alamat Instansi" span={1}> {data.alamat_instansi} </Descriptions.Item>
            <Descriptions.Item label="Provinsi" span={1}> {data.provinsi} </Descriptions.Item>
            <Descriptions.Item label="Kabupaten/Kota" span={1}> {data.kab_kota} </Descriptions.Item>
            <Descriptions.Item label="Email" span={1}> {data.email} </Descriptions.Item>
            <Descriptions.Item label="No Telepon" span={1}> {data.no_telepon} </Descriptions.Item>
            <Descriptions.Item label="No Handphone" span={1}> {data.no_handphone} </Descriptions.Item>
            <Descriptions.Item label="Jenis Pelatihan" span={1}> {data.jenis_pelatihan} </Descriptions.Item>
            <Descriptions.Item label="Nama Tempat Pelatihan" span={1}> {data.tempat_pelatihan} </Descriptions.Item>
            <Descriptions.Item label="Alamat Tempat Pelatihan" span={1}> {data.alamat_tempat_pelatihan} </Descriptions.Item>
            <Descriptions.Item label="Surat Permohonan" span={1}> 
                <a 
                    href={`${document.querySelector('meta[name="base-url"]').getAttribute('content')}/preview/surat-permohonan/${data.id}`}
                    target="_blank"
                > 
                    Surat Permohonan 
                </a>
            </Descriptions.Item>
        </Descriptions>
    )
}

export default React.memo(DescriptionRegistrasiInstansiComponent)
