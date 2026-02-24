<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barber extends Model
{
    protected $fillable = [
        'barbershop_id',
        'name',
        'phone',
        'email',
        'active'
    ];

    public function barbershop(){
        return $this->belongsTo(Barbershop::class);
    }

    public function schedules(){
        return $this->belongsTo(Schedule::class);
    }

    public function appointments(){
        return $this->belongsTo(Appointment::class);
    }
}
