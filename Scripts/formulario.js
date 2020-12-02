const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	Nom_Cli: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, // Letras y pueden llevar acentos.
	Ape_Cli: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, // Letras y pueden llevar acentos.
	Doc_Cli: /^\d{4,12}$/, // 4 a 12 digitos.
	Tel_Cli: /^\d{7,10}$/, // 7 a 14 numeros.
	Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Valida el formato ***@***.**.xx"opcional
}

const campos = {
	Nom_Cli: false,
	Ape_Cli: false,
	Doc_Cli: false,
	Celular: false,
	Correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "Nom_Cli":
			validarCampo(expresiones.Nom_Cli, e.target, 'Nom_Cli');
			break;
		case "Ape_Cli":
			validarCampo(expresiones.Ape_Cli, e.target, 'Ape_Cli');
			break;
		case "Doc_Cli":
			validarCampo(expresiones.Doc_Cli, e.target, 'Doc_Cli');
			break;
		case "Tel_Cli":
			validarCampo(expresiones.Tel_Cli, e.target, 'Tel_Cli');
			break;
		case "Correo":
			validarCampo(expresiones.Correo, e.target, 'Correo');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.Nom_Cli && campos.Ape_Cli && campos.Doc_Cli && campos.Tel_Cli && campos.Correo && terminos.checked) {

		document.getElementById("formulario").submit();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
			formulario.reset();
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

	}
});


