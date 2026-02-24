import { Link } from "@inertiajs/react";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppLayout({children, title = "Panel"}) {
    return (
        <>
        <Head title={title} />
        <AuthenticatedLayout>
            <div className="flex h-screen bg-gray-100">
                        {/* CONTENIDO */}
            <div className="flex-1 flex flex-col">

                {/* HEADER */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="font-semibold">{title}</h1>

                <button className="bg-gray-900 text-white px-4 py-2 rounded">
                    + Cliente sin cita (arreglar)
                </button>
                </header>

                {/* MAIN */}
                <main className="p-6 overflow-y-auto flex-1">
                {children}
                
                <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg text-lg">
                    + Llegó cliente (arreglar)
                </button>
                </main>

            </div>
        </div>
        </AuthenticatedLayout>
        </>
       
    )
}