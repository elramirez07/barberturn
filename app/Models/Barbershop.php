<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barbershop extends Model
{
    //
    protected $fillable = [
        'name',
        'slug',
        'phone',
        'email',
    ];

    public function barbers(){
        return $this->hasMany(Barber::class);
    }

    public function services(){
        return $this->hasMany(Service::class);
    }

    public function customers(){
        return $this->hasMany(Customer::class);
    }

    public function appointments(){
        return $this->hasMany(Appointment::class);
    }
}
