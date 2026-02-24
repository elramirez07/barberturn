<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'barbershop_id',
        'name',
        'description',
        'duration',
        'price',
        'active'
    ];

    public function barbershop()
    {
        return $this->belongsTo(Barbershop::class);
    }
}
