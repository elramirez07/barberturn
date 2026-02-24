<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Appointment extends Model
{
    protected $fillable = [
        'barbershop_id',
        'barber_id',
        'customer_id',
        'start_time',
        'end_time',
        'status',
        'notes'
    ];

    protected $dates = [
        'start_time',
        'end_time'
    ];

    public function barbershop()
    {
        return $this->belongsTo(Barbershop::class);
    }

    public function barber()
    {
        return $this->belongsTo(Barber::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }
}
