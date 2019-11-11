<?php

namespace App\Exports;

use App\RegistrasiPenyedia;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RegistrasiPenyediaExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return RegistrasiPenyedia::all();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Nama Perusahaan',
            'Alamat Perusahaan',
            'Email',
            'No Telepon',
            'No Handphone',
            'Tanggal Pelatihan',
            'Status',
            'Created Date',
            'Updated Date',
        ];
    }
}
