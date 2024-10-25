// Selección de elementos del formulario
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasena');
const confirmPasswordInput = document.getElementById('confirmar-contrasena');

// Función para mostrar mensaje de error
function showError(input, message) {
    const error = document.createElement('p');
    error.classList.add('error-message');
    error.textContent = message;
    input.parentElement.appendChild(error);
    //El código busca el elemento padre del campo input (el contenedor que rodea el campo de entrada) y agrega el elemento de error (<p>) como hijo de este. De esta manera, el mensaje de error se mostrará directamente debajo del campo de entrada que no pasó la validación.
}

// Función para validar nombre no vacío
function validateNombre() {
    if (nombreInput.value.trim() === '') {
        showError(nombreInput, 'El nombre no debe estar vacío.');
        return false;
    }
    return true;
}

// Función para validar email
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'El correo electrónico no tiene un formato válido.');
        return false;
    }
    return true;
}

// Función para validar contraseña
function validatePassword() {
    if (passwordInput.value.length < 8) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres.');
        return false;
    }
    return true;
}

// Función para validar confirmación de contraseña
function validateConfirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

// Función para limpiar mensajes de error
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}

// Función para validar todos los campos del formulario
function validateForm() {
    clearErrors(); // Elimina mensajes de error anteriores
    let isValid = true; // Inicializa la validez como verdadera

    // Validación de nombre
    if (!validateNombre()) {
        isValid = false;
    }
    
    // Validación de email
    if (!validateEmail()) {
        isValid = false;
    }
    
    // Validación de contraseña
    if (!validatePassword()) {
        isValid = false;
    }
    
    // Validación de confirmación de contraseña
    if (!validateConfirmPassword()) {
        isValid = false;
    }

    return isValid; // Devuelve el resultado de la validación
}

// Función de validación al enviar el formulario
form.addEventListener('submit', (event) => {
    // Evita el envío del formulario si la validación falla
    if (!validateForm()) {
        event.preventDefault(); // Prevenir el envío del formulario
    } else {
        alert('¡Cuenta creada exitosamente!'); // Muestra el mensaje de éxito
    }
});