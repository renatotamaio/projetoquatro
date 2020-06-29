function logarConta() {
    let email = document.getElementById('email') 
    let senha = document.getElementById('senha')

    if (email.value == 'brunosouza002bs@gmail.com' && senha.value == 'Metallica@1998') {
        alert('Usuário autenticado, bem-vindo Bruno!');
        email.classList.add('is-valid')
        senha.classList.add('is-valid')
        window.location.href = "indexvalidado.html"
    }

    if (email.value == 'renatotamaio@hotmail.com' && senha.value == '5754779nino') {
        alert('Usuário autenticado, bem-vindo Renato!');
        email.classList.add('is-valid')
        senha.classList.add('is-valid')
        window.location.href = "indexvalidado.html"
    }

    if (!email.value || !senha.value) {
        alert('Digite um email e senha para que a autenticação seja feita!');
        email.classList.add('is-invalid')
        senha.classList.add('is-invalid')

        return;
    }

    else{
        alert('Usuário não autenticado, tente novamente')
        email.classList.add('is-invalid')
        senha.classList.add('is-invalid')
    }

}