// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos al array
function agregarAmigo() {
    // Obtener el valor del input
    let nombreAmigo = document.getElementById('amigo').value;

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

