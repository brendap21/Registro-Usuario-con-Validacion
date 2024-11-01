document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del formulario
    const form = document.getElementById('registrationForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido'); // Nuevo campo
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('contrasena');
    const confirmPasswordInput = document.getElementById('confirmar-contrasena');
    const submitBtn = document.getElementById('submitBtn');

    // Función para mostrar mensaje de error
    function showError(input, message) {
        const error = document.createElement('p');
        error.classList.add('error-message');
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    // Función para validar el formulario
    function validateForm() {
        // Limpia los errores previos
        document.querySelectorAll('.error-message').forEach(e => e.remove());

        let isValid = true;

        // Validar nombre
        if (nombreInput.value.trim() === '') {
            showError(nombreInput, 'El nombre es obligatorio.');
            isValid = false;
        }

        // Validar apellido
        if (apellidoInput.value.trim() === '') {
            showError(apellidoInput, 'El apellido es obligatorio.');
            isValid = false;
        }

        // Validar correo electrónico
        if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            showError(emailInput, 'Ingrese un correo electrónico válido.');
            isValid = false;
        }

        // Validar contraseña
        if (passwordInput.value.length < 6) {
            showError(passwordInput, 'La contraseña debe tener al menos 6 caracteres.');
            isValid = false;
        }

        // Validar confirmación de contraseña
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Las contraseñas no coinciden.');
            isValid = false;
        }

        return isValid;
    }

    // Manejar el evento click en el botón de enviar
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de inmediato
        if (validateForm()) {
            // Si es válido, puedes proceder a enviar el formulario
            alert('Formulario enviado con éxito');
            // Aquí puedes agregar lógica para enviar el formulario, como AJAX o redireccionar
        }
    });
});
