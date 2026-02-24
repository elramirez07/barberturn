import AppLayout from "@/Layouts/AppLayout";

export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">

        <h1 className="text-2xl font-bold mb-6">Hoy 💈</h1>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Citas hoy</p>
            <p className="text-2xl font-bold">12</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Clientes atendidos</p>
            <p className="text-2xl font-bold">7</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Ingresos hoy</p>
            <p className="text-2xl font-bold">$210.000</p>
            </div>

        </div>

        {/* LISTA DE TURNOS */}
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Turnos del día</h2>

            <ul className="space-y-3">
            <li className="p-3 border rounded flex justify-between">
                <div>
                <p className="font-semibold">Juan Pérez</p>
                <p className="text-sm text-gray-500">
                    Corte clásico — 10:30 AM
                </p>
                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                Confirmado
                </span>
            </li>

            <li className="p-3 border rounded flex justify-between">
                <div>
                <p className="font-semibold">Carlos López</p>
                <p className="text-sm text-gray-500">
                    Barba + corte — 11:00 AM
                </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                En espera
                </span>
            </li>
            </ul>
        </div>
    </AppLayout>
  );
}