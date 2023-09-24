function calcularIMC(){
let nombre = document.getElementById("nombre").value;
let peso = parseInt(document.getElementById("peso").value);
let alturaEnCentimetros = parseInt(document.getElementById("altura").value);
let alturaEnMetros = alturaEnCentimetros / 100;
let imc = Math.round(peso/(alturaEnMetros * alturaEnMetros));
let mensaje = document.getElementById("mensaje");

if (peso < 5 || peso > 600 || alturaEnCentimetros < 50 || alturaEnCentimetros > 300) {
    mensaje.textContent = `Hola ${nombre}, Alguno de los datos ingresados son erroneos, verificalos!`;
    mensaje.style.color = "red";
}
 else {
    if (imc < 18.5){
            mensaje.textContent = `Hola ${nombre}, Tu IMC es ${imc}, estás muy delgado`;
            mensaje.style.color = "green";
    }
    else if (imc > 18.5 && imc < 25){
            mensaje.textContent = `Hola ${nombre}, Tu IMC es ${imc}, estás saludable`;
            mensaje.style.color = "green";
    }
    else {
            mensaje.textContent = `Hola ${nombre}, Tu IMC es ${imc}, tienes sobrepeso`;
            mensaje.style.color = "green";
    }
  }
}

    