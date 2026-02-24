import { Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
export default function Index({appointments}){
    return (
        <AppLayout title="Agenda">
            <div className="flex justify-between mb-4">
                <Link
                    href="/appointments/create"
                    className="bg-gray-900 text-white px-4 py-2 rounded"
                > Nueva Cita</Link>
            </div>
                <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-400">
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cliente</th>
                    <th>Barbero</th>
                    <th>Servicio</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
                </thead>

                <tbody>
                {appointments.length === 0 ? (
                    <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                        No hay citas programadas
                    </td>
                    </tr>
                ) : (
                    appointments.map(a => (
                    <tr key={a.id} className="text-center border-t">
                        <td>{a.date}</td>
                        <td>{a.start_time}</td>
                        <td>{a.client_name}</td>
                        <td>{a.barber?.name}</td>
                        <td>{a.service?.name}</td>
                        <td>{a.status}</td>
                        <td><Link href={`/appointments/${a.id}/edit`}>Editar</Link></td>

                    </tr>
                    ))
                )}
                </tbody>
            </table>
        </AppLayout>
        
    );
}