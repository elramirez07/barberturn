import { useForm } from '@inertiajs/react';

export default function Create(){
    const { data, setData, post } = useForm({
        name: "",
        duration: "",
        price: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/services");
    }
    return (
        <form onSubmit={submit}>
            <h1>Nuevo Servicio</h1>

            <input
            placeholder='Nombre'
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            />
            <input
                placeholder="Duración (min)"
                value={data.duration}
                onChange={(e) => setData("duration", e.target.value)}
            />
            <input
            placeholder='price'
            value={data.price}
            onChange={(e) => setData("price", e.target.value)}
            />

            <button>Guardar</button>
        </form>
    );
}