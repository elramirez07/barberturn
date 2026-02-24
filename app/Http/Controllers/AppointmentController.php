<?php
namespace App\Http\Controllers;
use App\Models\{
    Appointment,
    Service,
    Customer,
    Barber
};


use Illuminate\Http\Request;
use Inertia\Inertia;


class AppointmentController extends Controller
{
    public function index()
    {
        $appointments = Appointment::with(['barber', 'service'])
            ->orderBy('start_time')
            ->get();

        return Inertia::render('Appointments/Index', [
            'appointments' => $appointments
        ]);
    }

    public function create(){
        return inertia::render('Appointments/Create',[
            'barbers' => Barber::all(),
            'services' => Service::all(),
        ]);
    }

    public function store(Request $request){

        $data = $request->validate([
            'barber_id' => 'required|exists:barbers,id',
            'service_id' => 'required|exists:services,id',
            'client_name' => 'required|string|max:255',
            'client_phone' => 'nullable|string|max:20',
            'date' => 'required|date',
            'start_time' => 'required',
        ]);




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
