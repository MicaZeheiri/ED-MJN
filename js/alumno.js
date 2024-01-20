function verificarSesion() {
    if (sessionStorage.getItem('usuario')) {
            location.href = '/ED-MJN/pages/alumno.html';
        } else {
            alert('Por favor inicie sesión para ver sus clases y pagos');
            location.href = '/ED-MJN/pages/login.html';
        }
}