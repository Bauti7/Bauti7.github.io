/*VALIDACION FORMULARIO*/

const btnEnviar = document.querySelector(".btnenviar");
const form = document.querySelector("#frm");
const error_d = document.querySelector(".d_error");
const btnes_d = document.querySelector(".boton_enviar");

let error = [];

const enviar = () => {

    borrarErrores();

    let nombreV = document.querySelector("#f_nombre");
    let nombre = nombreV.value.trim();

    let mailV = document.querySelector("#f_email");
    let mail = mailV.value.trim();
    let validarMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    let clienteV = document.querySelector("#f_cliente");
    let cliente = clienteV.value.trim();

    let consultaV = document.querySelector("#f_consulta");
    let consulta = consultaV.value.trim();

    /*Validación Nombre*/ 

    if(nombre == ""){

        error.push("Campo vacío, por favor rellene el campo 'Nombre'");

    }

    if(nombre.length > 35){

        error.push("Excedió la cantidad de carácteres sugerida en el campo 'Nombre'.");

    }

    /*Validación Mail*/
    
    if(mail == ""){

        error.push("Campo vacío, por favor rellene el campo 'Mail'");

    }else if(!validarMail.test(mail)){

        error.push("Ingrese un mail válido");

    }

    /*Validación Cliente*/

    if(cliente == 0){

        error.push("Ingrese una opción en 'Tipo de Cliente'");

    }

    /*Validación Consulta*/

    if(consulta === ""){

        error.push("Campo 'consulta' vacío");

    }else if(consulta.length > 500){

        error.push("Excedió la cantidad de carácteres en el campo 'Consulta'");

    }

    /*Acumular errores*/

    if (error.length > 0) {

        for (let i = 0; i < error.length; i++) {
            
            let lError = document.createElement("li");
            lError.textContent = error[i];
            lError.style.listStyleType = "none";
            lError.style.textAlign = "center";
            lError.style.color = "black";

            error_d.appendChild(lError);
        }

        return false;
    }

    btnes_d.removeChild(btnEnviar);
    form.removeChild(error_d);

    const p = document.createElement("p");
    p.textContent = "Gracias por enviar tu consulta. Pronto estarás recibiendo novedades sobre tu duda, nos contáctaremos con el correo " + mail + " lo más rápido posible ;)";
    p.style.color = "black";
    p.style.textAlign = "center";
    p.style.marginTop = "10px";
    form.appendChild(p);

    nombreV.value = "";
    mailV.value = "";
    clienteV.value = "";
    consultaV.value = "";

    nombreV.disabled = true;
    mailV.disabled = true;
    clienteV.disabled = true;
    consultaV.disabled = true;

    return false;

};

let borrarErrores= () => {
    while (error.length > 0) {
        
        error.pop();

        error_d.removeChild(error_d.lastChild);

    }
};