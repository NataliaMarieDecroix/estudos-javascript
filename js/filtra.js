var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        console.log("Tem algo digitado");
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            console.log(this.value);
            if (nome != this.value) {
                paciente.classList.add("invisível");
                console.log("entrou no if");
            } else {
                paciente.classList.remove("invisível");
            }
        }
    }
});
