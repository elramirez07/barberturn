import { Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
export default function Index({barbers}){
    return (
        <AppLayout>
            <div>
                <h1>
                    Barberos
                </h1>
                <ul>
                    {barbers.map((b) => (
                        <li key={b.id}>
                            {b.name} - {b.phone}
                            <Link href={`/barbers/${b.id}/edit`}>Editar</Link>
                        </li>
                    ))}
                </ul>
                <Link href="/barbers/create">Nuevo Barbero</Link>

            </div>
        </AppLayout>
        
    );
}