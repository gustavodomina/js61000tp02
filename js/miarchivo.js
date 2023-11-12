let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Maria", edad: 28 },
    { nombre: "Pedro", edad: 24 },
    { nombre: "Valentin", edad: 17 },
    { nombre: "Tiziano", edad: 17 }
];

let libros = [
    { titulo: "Libro A", autor: "Autor A" },
    { titulo: "Libro B", autor: "Autor B" },
    { titulo: "Libro C", autor: "Autor C" },
];

function agruparPorEdad(personas) {
    let agrupacion = { menores: [], mayores: [] };

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad < 18) {
            agrupacion.menores.push(personas[i]);
        } else {
            agrupacion.mayores.push(personas[i]);
        }
    }

    return agrupacion;
}

let miarray = agruparPorEdad(personas);

console.log(miarray);