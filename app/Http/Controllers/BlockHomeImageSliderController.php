<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BlockHomeImageSlider;
use Illuminate\Support\Facades\Storage;

class BlockHomeImageSliderController extends Controller
{
    // GET ALL DATA
    public function getAll() {
        try {
            $blockHomeImageSlider = BlockHomeImageSlider::all()
                ->map(function($blockImageSlider) {
                    return [
                        'id' => $blockImageSlider->id,
                        'url' => 'data:image/jpeg;base64,'.base64_encode(Storage::get($blockImageSlider->url)),
                        'status' => $blockImageSlider->status,
                        'created_at' => $blockImageSlider->created_at,
                        'updated_at' => $blockImageSlider->updated_at,
                    ];
                });
            return $this->response("Success", "Fetch Success", $blockHomeImageSlider);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // GET ALL DATA SLIDER
    public function getAllImageSlider() {
        try {
            $blockHomeImageSlider = BlockHomeImageSlider::where(['status' => 101])
                ->get()
                ->map(function($blockImageSlider) {
                    return [
                        'id' => $blockImageSlider->id,
                        'url' => 'data:image/jpeg;base64,'.base64_encode(Storage::get($blockImageSlider->url)),
                        'status' => $blockImageSlider->status,
                        'created_at' => $blockImageSlider->created_at,
                        'updated_at' => $blockImageSlider->updated_at,
                    ];
                });;
            return $this->response("Success", "Fetch Success", $blockHomeImageSlider);
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }



    // CREATE / INSERT DATA
    public function create(Request $request) {
        try {
            $blockHomeImageSlider = new BlockHomeImageSlider;
            $blockHomeImageSlider->url = $request->file('image')->store('public/image/slider');
            $blockHomeImageSlider->status = 101;
            $result = $blockHomeImageSlider->save();
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }


    // ADD TO SLIDER
    public function addToSlider($id) {
        try {
            $blockHomeImageSlider = BlockHomeImageSlider::findOrFail($id);
            $blockHomeImageSlider->status = 101;
            $result = $blockHomeImageSlider->save();
            return $this->response("Success", "Add To Slider Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Add To Slider Error", $e->getMessage());
        }
    }


    // REMOVE FROM SLIDER
    public function removeFromSlider($id) {
        try {
            $blockHomeImageSlider = BlockHomeImageSlider::findOrFail($id);
            $blockHomeImageSlider->status = 100;
            $result = $blockHomeImageSlider->save();
            return $this->response("Success", "Remove From Slider Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Remove From Slider Error", $e->getMessage());
        }
    }


    // DELETE IMAGE
    public function deleteImage($id) {
        try {
            $blockHomeImageSlider = BlockHomeImageSlider::findOrFail($id);
            Storage::delete($blockHomeImageSlider->url);
            $result = $blockHomeImageSlider->delete();
            return $this->response("Success", "Delete Image Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Delete Image Error", $e->getMessage());
        }
    }

}
