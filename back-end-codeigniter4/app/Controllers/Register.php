<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;

class Register extends BaseController
{
    use ResponseTrait;

    const ROLE_ADMIN = 'ADMIN';
    const ROLE_NURSE = 'NURSE';
    const ROLE_USER = 'USER';

    public function index()
    {
        $rules = [
            'email'    => ['rules' => 'required|min_length[4]|max_length[255]|valid_email|is_unique[users.email]'],
            'password' => ['rules' => 'required|min_length[8]|max_length[255]'],
        ];

        if ($this->validate($rules)) {
            $model = new UserModel();
            $data = [
                'email'    => $this->request->getVar('email'),
                'password' => password_hash($this->request->getVar('password'), PASSWORD_ARGON2I),
                'role'     => $this->mapRole($this->request->getVar('role')),
                'status'   => $this->request->getVar('role') == 'ADMINISTRATOR' ? 1 : 0,
            ];

            if ($model->save($data)) {
                return $this->respond(['message' => 'Registered Successfully', 'redirect' => '/login',]);
            } else {
                return $this->fail(['message' => 'Registration failed. Please try again.'], 500);
            }
        } else {
            $response = [
                'errors'  => $this->validator->getErrors(),
                'message' => 'Invalid Inputs for ' . implode(', ', array_keys($this->validator->getErrors())),
            ];
            return $this->fail($response, 409);
        }
    }

    private function mapRole($role)
    {
        $role = strtoupper(trim($role));

        switch ($role) {
            case 'ADMINISTRATOR':
                return self::ROLE_ADMIN;
            case 'NURSE':
                return self::ROLE_NURSE;
            default:
                return self::ROLE_USER;
        }
    }
}
