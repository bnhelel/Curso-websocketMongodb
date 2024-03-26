const socket = io(); // conexão do client com o servidor

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    socket.emit("text_area", textoEditor.value);
});