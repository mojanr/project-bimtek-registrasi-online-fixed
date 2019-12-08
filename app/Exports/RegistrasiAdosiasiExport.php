<?php

namespace App\Exports;

use App\RegistrasiAdosiasi;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RegistrasiAdosiasiExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return RegistrasiAdosiasi::all();
    }

    public function map($data): array
    {
        return [
            $data->id,
            $data->nama_instansi,
            $data->alamat_instansi,
            $data->provinsi,
            $data->kab_kota,
            $data->kode_pos,
            $data->email,
            $data->no_telepon,
            $data->no_handphone,
            $data->jenis_pelatihan,
            $data->tempat_pelatihan,
            $data->alamat_tempat_pelatihan,
            $data->surat_permohonan,
            $data->status,
            $data->created_at,
            $data->updated_at,
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Nama Asosiasi',
            // 'Satuan Kerja',
            // 'Unit Kerja',
            'Alamat Asosiasi',
            'Provinsi',
            'Kabupaten/Kota',
            'Kode Pos',
            'Email',
            'No Telepon',
            'No Handphone',
            'Jenis Pelatihan',
            'Tempat Pelatihan',
            'Alamat Tempat Pelatihan',
            'Surat Permohonan',
            'Status',
            'Created Date',
            'Updated Date',
        ];
    }
}
