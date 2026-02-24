<?php
namespace App\Http\Controllers;
use App\Models\{
    Appointment,
    Service,
    Customer
};


use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request){
        $customer = Customer::firstOrCreate(
            ['phone' => $request->phone],
            [
                'barbershop_id' => $request->barbershop_id,
                'name' => $request->name,
                'email' => $request->email,
            ]
        );

        $services = Service::whereIn('id', $request->services)->get();

        $total_minutes = $services->sum('duration');

        $start = Carbon::parse($request->start_time);
        $end = $start->copy()->addMinutes($total_minutes);
        
        $appointment = Appointment::create([
            'barbershop_id' => $request->barbershop_id,
            'barber_id' => $request->barber_id,
            'customer_id' => $customer->id,
            'start_time' => $start,
            'end_time' => $end,
            'status' => 'confirmed'
        ]);

        $appointment->services()->attac($request->services);
        // $appointment->services()->attac($services->id);
        return response()->json($appointment);
    }
}
