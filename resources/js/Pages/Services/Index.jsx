import { Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
export default function Index({services}){
    return (
        <AppLayout title="Servicios">
            <div className="flex justify-between mb-4">
                <Link
                    href="/services/create" 
                    className="bg-gray-900 text-white px-4 py-2 rounded"
                > Nuevo Servicio</Link>
            </div>
                <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-400">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Duración (min)</th>
                    <th>Acción</th>
                </tr>
                </thead>

                <tbody>
                {services.length === 0 ? (
                    <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                        No hay servicios registrados
                    </td>
                    </tr>
                ) : (
                    services.map(s => (
                    <tr key={s.id} className=" text-center border-t">
                        <td>{s.name}</td>
                        <td>{s.price}</td>
                        <td>{s.duration} min</td>
                        <td><Link href={`/services/${s.id}/edit`}>Editar</Link></td>

                    </tr>
                    ))
                )}
                </tbody>
            </table>
        </AppLayout>
        
    );
}