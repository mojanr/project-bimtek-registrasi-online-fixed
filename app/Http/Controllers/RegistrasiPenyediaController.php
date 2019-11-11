<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RegistrasiPenyedia;
use App\Exports\RegistrasiPenyediaExport;
use Maatwebsite\Excel\Facades\Excel;

class RegistrasiPenyediaController extends Controller
{
    // GET ALL DATA
    public function getAll() {
        try {
            $registrasiPenyedia = RegistrasiPenyedia::all();
            return $this->response("Success", "Fetch Success", $registrasiPenyedia);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // CREATE / INSERT DATA
    public function create(Request $request) {
        try {
            $registrasiPenyedia = new RegistrasiPenyedia;
            $registrasiPenyedia->nama_perusahaan = strtoupper($request->nama_perusahaan);
            $registrasiPenyedia->alamat_perusahaan = $request->alamat_perusahaan;
            $registrasiPenyedia->email = $request->email;
            $registrasiPenyedia->no_telepon = $request->no_telepon;
            $registrasiPenyedia->no_handphone = $request->no_handphone;
            $registrasiPenyedia->tanggal_pelatihan = $request->tanggal_pelatihan;
            $registrasiPenyedia->status = 101;
            $result = $registrasiPenyedia->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }


    // EXPORT EXCEL
    public function export() {
        return Excel::download(new RegistrasiPenyediaExport, 'RegistrasiPenyedia.xlsx');
        // try {
        //     $registrasiPenyedia = RegistrasiPenyedia::all();
        //     return $this->response("Success", "Fetch Success", $registrasiPenyedia);
        // } catch (\Exception $e) {
        //     return $this->response("Error", "Fetch Error", $e->getMessage());
        // }
    }
}
