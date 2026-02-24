import { Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
export default function Index({barbers}){
    return (
        <AppLayout title="Barberos">
            <div className="flex justify-between mb-4">
                <Link
                    href="/barbers/create" 
                    className="bg-gray-900 text-white px-4 py-2 rounded"
                > Nuevo Barbero</Link>
            </div>
                <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-400">
                <tr>
                    <th>Nombre</th>
                    <th>Phone</th>
                    <th>Acción</th>
                </tr>
                </thead>

                <tbody>
                {barbers.length === 0 ? (
                    <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                        No hay barberos registrados
                    </td>
                    </tr>
                ) : (
                    barbers.map(b => (
                    <tr key={b.id} className=" text-center border-t">
                        <td>{b.name}</td>
                        <td>{b.phone}</td>
                        <td><Link href={`/barbers/${b.id}/edit`}>Editar</Link></td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            
        </AppLayout>
        
    );
}