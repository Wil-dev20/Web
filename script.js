// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formContacto');
    const mensajeError = document.getElementById('mensajeError');
    const mensajeExito = document.getElementById('mensajeExito');

    formulario.addEventListener('submit', function (e) {
        // Detener el envío real del formulario para la simulación
        e.preventDefault();

        // Capturar los valores de los inputs
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Lógica de validación
        if (nombre === "" || email === "" || mensaje === "") {
            // Mostrar error si falta algún campo
            mensajeExito.style.display = "none";
            mensajeError.style.display = "block";

            // Ocultar el mensaje de error después de 3 segundos
            setTimeout(() => {
                mensajeError.style.display = "none";
            }, 3000);
        } else {
            // Simular funcionamiento correcto
            mensajeError.style.display = "none";
            mensajeExito.style.display = "block";

            // Mostrar en consola los datos "enviados"
            console.log("Formulario enviado con éxito:", {
                usuario: nombre,
                correo: email,
                nota: mensaje
            });

            // Limpiar los campos del formulario
            formulario.reset();

            // Ocultar el mensaje de éxito después de 4 segundos
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 4000);
        }
    });
});