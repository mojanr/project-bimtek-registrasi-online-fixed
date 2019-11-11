<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrasiPenyediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrasi_penyedia', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama_perusahaan', 150);
            $table->text('alamat_perusahaan');
            $table->string('email', 150);
            $table->string('no_telepon', 100);
            $table->string('no_handphone', 100);
            $table->date('tanggal_pelatihan');
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
        Schema::dropIfExists('registrasi_penyedia');
    }
}
