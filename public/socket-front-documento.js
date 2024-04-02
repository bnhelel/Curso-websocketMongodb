import { atualizaTextoEditor } from "./documento.js";

const socket = io(); // conexão do client com o servidor

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
};



function emitirTextoEditor(dados ) {
    socket.emit("text_area", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

export { emitirTextoEditor };