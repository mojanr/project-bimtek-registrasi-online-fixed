<?php

namespace App\Exports;

use App\RegistrasiAdosiasi;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RegistrasiAdosiasiExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return RegistrasiAdosiasi::all();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Nama Instansi',
            'Satuan Kerja',
            'Unit Kerja',
            'Alamat Instansi',
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
