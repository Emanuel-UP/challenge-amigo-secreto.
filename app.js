// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Inicializamos un array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validamos que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregamos el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiamos el campo de entrada
    inputAmigo.value = '';

    // Actualizamos la lista visual
    mostrarListaAmigos();
}
// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista anterior

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    mostrarResultado(amigoSorteado);

    // Eliminar el amigo sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista visual después de sortear
    mostrarListaAmigos();
}
// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el resultado anterior

    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigo}!`;
    resultado.appendChild(li);
}