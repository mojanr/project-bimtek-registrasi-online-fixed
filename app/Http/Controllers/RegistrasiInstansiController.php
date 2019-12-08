<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RegistrasiInstansi;
use App\Exports\RegistrasiInstansiExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class RegistrasiInstansiController extends Controller
{
    // GET ALL DATA
    public function getAll() {
        try {
            $registrasiInstansi = RegistrasiInstansi::all();
            return $this->response("Success", "Fetch Success", $registrasiInstansi);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // CREATE / INSERT DATA
    public function create(Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            // return $request->jenis_pelatihan;
            $registrasiInstansi = new RegistrasiInstansi;
            $registrasiInstansi->nama_instansi = strtoupper($request->nama_instansi);
            $registrasiInstansi->satuan_kerja = $request->satuan_kerja;
            $registrasiInstansi->unit_kerja = $request->unit_kerja;
            $registrasiInstansi->alamat_instansi = $request->alamat_instansi;
            $registrasiInstansi->provinsi = $request->provinsi;
            $registrasiInstansi->kab_kota = $request->kab_kota;
            $registrasiInstansi->kode_pos = $request->kode_pos;
            $registrasiInstansi->email = $request->email;
            $registrasiInstansi->no_telepon = $request->no_telepon;
            $registrasiInstansi->no_handphone = $request->no_handphone;
            $registrasiInstansi->jenis_pelatihan = $request->jenis_pelatihan;
            $registrasiInstansi->tempat_pelatihan = $request->tempat_pelatihan;
            $registrasiInstansi->alamat_tempat_pelatihan = $request->alamat_tempat_pelatihan;
            $registrasiInstansi->surat_permohonan = $request->file('surat_permohonan')->store('public/surat-permohonan/registrasi/instansi');
            $registrasiInstansi->status = 101;
            $result = $registrasiInstansi->save();
            return $this->response("Success", "Create Success", $result);
            // return $this->response("Success", "Create Success", $request->);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }


    // EXPORT EXCEL
    public function export() {
        return Excel::download(new RegistrasiInstansiExport, 'RegistrasiInstansi.xlsx');
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
            $registrasiInstansi = RegistrasiInstansi::find($id);
            $file = Storage::get($registrasiInstansi->surat_permohonan);
            // return $file;
            return response($file)
                ->header('Content-Type', 'application/pdf');
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }
}
