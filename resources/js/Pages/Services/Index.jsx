import { Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
export default function Index({services}){
    return (
        <AppLayout>
            <div>
                <h1>
                    Servicios
                </h1>
                <ul>
                    {services.map((s) => (
                        <li key={s.id}>
                            {s.name} - {s.price} - {s.duration} min
                            <Link href={`/services/${s.id}/edit`}>Editar</Link>
                        </li>
                    ))}
                </ul>
                <Link href="/services/create">Nuevo Servicio</Link>

            </div>
        </AppLayout>
        
    );
}