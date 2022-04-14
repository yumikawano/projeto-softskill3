var form = document.getElementById('formulario');
var campo = document.getElementById('campo');
var url = "https://wave.webaim.org/report#/"

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);
    // window.open(`url${campo.value}, '_blank'`);
    // window.focus
    // window.location.href = `https://wave.webaim.org/report#/${campo.value}`;
    window.open(`${url}${campo.value}`, '_blank')


    // impede o envio do form
    e.preventDefault();
}); 