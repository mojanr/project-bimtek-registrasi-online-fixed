<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // LOGIN
    public function login(Request $request) {
        try {
            $result = null;
            $credentials = [
                'name' => $request['username'],
                'password' => $request['password'],
            ];
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = $user->createToken('user-token')->accessToken;

                $result = [
                    'user' => $user,
                    'token' => $token
                ];
                return $this->response("Success", "Fetch Success", $result);
            } else {
                $result = [
                    'error' => 'Login Failed'
                ];
                return $this->response("Error", "Login Failed", $result);
            }
            
        } catch (\Exception $e) {
            return $this->response("Error", "Fetch Error", $e->getMessage());
        }
    }


    // REGISTER
    // CREATE / INSERT DATA
    public function register(Request $request) {
        try {
            $result = User::create([
                'name' => $request['username'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);
            return $this->response("Success", "Create Success", $result);
        } catch (\Exception $e) {
            return $this->response("Error", "Create Error", $e->getMessage());
        }
    }


}
