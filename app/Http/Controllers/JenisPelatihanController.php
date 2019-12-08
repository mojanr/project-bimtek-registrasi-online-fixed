<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\JenisPelatihan;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class JenisPelatihanController extends Controller
{
    // GET ALL DATA
    public function getAll() {
        try {
            $jenisPelatihan = JenisPelatihan::all();
            return $this->response("Success", "Fetch Success", $jenisPelatihan);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }

    // GET ALL ACTIVE DATA
    public function getAllActiveData() {
        try {
            $jenisPelatihan = JenisPelatihan::where(['status' => 101])->get();
            return $this->response("Success", "Fetch Success", $jenisPelatihan);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }

    // GET SINGLE DATA BY ID
    public function getDataById($id) {
        try {
            $jenisPelatihan = JenisPelatihan::findOrFail($id);
            return $this->response("Success", "Fetch Success", $jenisPelatihan);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // CREATE / INSERT DATA
    public function create(Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $jenisPelatihan = new JenisPelatihan;
            $jenisPelatihan->jenis_pelatihan = $request->jenis_pelatihan;
            $jenisPelatihan->status = 101;
            $result = $jenisPelatihan->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }

    // UPDATE
    public function update($id, Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $jenisPelatihan = JenisPelatihan::findOrFail($id);
            $jenisPelatihan->jenis_pelatihan = $request->jenis_pelatihan;
            $jenisPelatihan->status = 101;
            $result = $jenisPelatihan->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }

    // ACTIVATE
    public function activate($id, Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $jenisPelatihan = JenisPelatihan::findOrFail($id);
            $jenisPelatihan->status = 101;
            $result = $jenisPelatihan->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }

    // INACTIVATE
    public function inactivate($id, Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $jenisPelatihan = JenisPelatihan::findOrFail($id);
            $jenisPelatihan->status = 100;
            $result = $jenisPelatihan->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }

    // DELETE
    public function delete($id, Request $request) {
        try {
            // return $request->nama_instansi;
            // return $request->file('surat_permohonan')->store('public/surat-permohonan');
            
            $jenisPelatihan = JenisPelatihan::findOrFail($id);
            $jenisPelatihan->jenis_pelatihan = $request->jenis_pelatihan;
            $jenisPelatihan->status = 100;
            $result = $jenisPelatihan->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }

}
