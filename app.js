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

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Seleccionar el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el array y agregar cada nombre como un <li> en la lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar si hay amigos disponibles en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo sorteado en el área de resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
