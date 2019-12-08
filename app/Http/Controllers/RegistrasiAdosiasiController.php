<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RegistrasiAdosiasi;
use App\Exports\RegistrasiAdosiasiExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class RegistrasiAdosiasiController extends Controller
{
    // GET ALL DATA
    public function getAll() {
        try {
            $registrasiAdosiasi = RegistrasiAdosiasi::all();
            return $this->response("Success", "Fetch Success", $registrasiAdosiasi);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // CREATE / INSERT DATA
    public function create(Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $registrasiAdosiasi = new RegistrasiAdosiasi;
            $registrasiAdosiasi->nama_instansi = strtoupper($request->nama_instansi);
            $registrasiAdosiasi->satuan_kerja = $request->satuan_kerja;
            $registrasiAdosiasi->unit_kerja = $request->unit_kerja;
            $registrasiAdosiasi->alamat_instansi = $request->alamat_instansi;
            $registrasiAdosiasi->provinsi = $request->provinsi;
            $registrasiAdosiasi->kab_kota = $request->kab_kota;
            $registrasiAdosiasi->kode_pos = $request->kode_pos;
            $registrasiAdosiasi->email = $request->email;
            $registrasiAdosiasi->no_telepon = $request->no_telepon;
            $registrasiAdosiasi->no_handphone = $request->no_handphone;
            $registrasiAdosiasi->jenis_pelatihan = $request->jenis_pelatihan;
            $registrasiAdosiasi->tempat_pelatihan = $request->tempat_pelatihan;
            $registrasiAdosiasi->alamat_tempat_pelatihan = $request->alamat_tempat_pelatihan;
            $registrasiAdosiasi->surat_permohonan = $request->file('surat_permohonan')->store('public/surat-permohonan/registrasi/adosiasi');
            $registrasiAdosiasi->status = 101;
            $result = $registrasiAdosiasi->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }


    // EXPORT EXCEL
    public function export() {
        return Excel::download(new RegistrasiAdosiasiExport, 'RegistrasiAdosiasi.xlsx');
        // try {
        //     $registrasiPenyedia = RegistrasiPenyedia::all();
        //     return $this->response("Success", "Fetch Success", $registrasiPenyedia);
        // } catch (\Exception $e) {
        //     return $this->response("Error", "Fetch Error", $e->getMessage());
        // }
    }


    // PREVIEW SURAT PERMOHONAN
    public function previewSuratPermohonan($id) {
        try {
            $registrasiAdosiasi = RegistrasiAdosiasi::find($id);
            $file = Storage::get($registrasiAdosiasi->surat_permohonan);
            // return $file;
            return response($file)
                ->header('Content-Type', 'application/pdf');
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }
}
