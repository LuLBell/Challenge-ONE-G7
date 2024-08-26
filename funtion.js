function encriptar() {
    let texto = document.getElementById("txt").value;

    if (texto.trim() === "") {
        alert("Por favor, ingrese un texto para encriptar.");
        return;
    }

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    document.querySelector(".ConEncriptar .encriptacion").textContent = textoEncriptado;

    document.querySelector(".SinEncriptar").hidden = true;
    document.querySelector(".ConEncriptar").hidden = false;

    document.getElementById("txt").value = "";
}

function desencriptar() {
    let texto = document.getElementById("txt").value;

    if (texto.trim() === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        return;
    }

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    document.querySelector(".ConEncriptar .encriptacion").textContent = textoDesencriptado;

    document.querySelector(".SinEncriptar").hidden = true;
    document.querySelector(".ConEncriptar").hidden = false;

    document.getElementById("txt").value = "";
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector(".ConEncriptar .encriptacion").textContent;

    let elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoParaCopiar;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);

    alert("Texto copiado al portapapeles");
}