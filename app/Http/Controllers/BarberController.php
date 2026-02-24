<?php

namespace App\Http\Controllers;

use App\Models\{
    Barber,
    Barbershop
};

use Illuminate\Http\Request;
use Inertia\Inertia;

class BarberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $barbers = Barber::latest()->get();
        return Inertia::render('Barbers/Index', [
            'barbers' => $barbers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Barbers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        Barber::create([
            'barbershop_id' => 1,
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return redirect()->route('barbers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barber $barber)
    {
        return Inertia::render('Barbers/Edit',[
            'barber' => $barber
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Barber $barber)
    {
        $barber->update($request->all());
        return redirect()->route('barbers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barber $barber)
    {
        $barber->delete();
        return back();
    }
}
