let state = {
    dni: '',
    password: ''
};

function setState(newState) {
    state = { ...state, ...newState };
}

const login = () => {

    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;

    if (dni == '' || password == '') {
        alert('Por favor ingrese su DNI y contraseña');
        return;
    }

    if (dni == '43523433' && password == 'edmjn') {
        alert('Bienvenido alumno.');
        window.sessionStorage.setItem('usuario', dni);
        window.location.href = '../pages/alumno.html'
    } else {
        alert('DNI o contraseña incorrectos')
        return;
    }
}
