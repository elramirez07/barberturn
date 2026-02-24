import { useForm } from '@inertiajs/react';

export default function Create(){
    const { data, setData, post } = useForm({
        name: "",
        phone: "",
        email: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/barbers");
    }
    return (
        <form onSubmit={submit}>
            <h1>Nuevo Barbero</h1>

            <input
            placeholder='Nombre'
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            />
            <input
            placeholder='phone'
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            />

            <button>Guardar</button>
        </form>
    );
}