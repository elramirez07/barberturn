import { Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppLayout({children}) {
    return (
        <AuthenticatedLayout>
             <div className="flex h-screen bg-gray-100">
            {/* Sidebar
            <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
                <h2 className="text-xl font-bold mb-6">BarberTurn 💈</h2>

                <nav className="space-y-2">
                <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-700">
                    Dashboard
                </Link>

                <Link href="/barbers" className="block p-2 rounded hover:bg-gray-700">
                    Barberos
                </Link>

                <Link href="/services" className="block p-2 rounded hover:bg-gray-700">
                    Servicios
                </Link>

                <Link href="/appointments" className="block p-2 rounded hover:bg-gray-700">
                    Agenda
                </Link>
                </nav>
            </aside> */}

            {/* CONTENIDO */}
            <div className="flex-1 flex flex-col">

                {/* HEADER */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="font-semibold">Panel</h1>

                <button className="bg-gray-900 text-white px-4 py-2 rounded">
                    + Cliente sin cita
                </button>
                </header>

                {/* MAIN */}
                <main className="p-6 overflow-y-auto flex-1">
                {children}
                
                <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg text-lg">
                    + Llegó cliente
                </button>
                </main>

            </div>
        </div>
        </AuthenticatedLayout>
       
    )
}