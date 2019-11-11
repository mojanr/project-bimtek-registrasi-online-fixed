<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrasiInstansiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrasi_instansi', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama_instansi', 150);
            $table->string('satuan_kerja', 150);
            $table->string('unit_kerja', 150);
            $table->text('alamat_instansi');
            $table->string('provinsi', 150);
            $table->string('kab_kota', 150);
            $table->string('kode_pos', 150);
            $table->string('email', 150);
            $table->string('no_telepon', 100);
            $table->string('no_handphone', 100);
            $table->string('jenis_pelatihan', 100);
            $table->string('tempat_pelatihan', 100);
            $table->text('alamat_tempat_pelatihan');
            $table->text('surat_permohonan');
            $table->integer('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registrasi_instansi');
    }
}
