alert('Atenção, os campos marcados com * são obrigatórios!')




function validacaoDadosPessoais(){
    //Dados Pessoais
    const nome = document.getElementById('nome')
    const cpf = document.getElementById('cpf')
    const phone =  document.getElementById('telefone1')
    const data =  document.getElementById('dataNascimento')

    //Localização
    const rua =  document.getElementById('rua')
    const numeroCasa = document.getElementById('numeroCasa')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const uf = document.getElementById('uf')

    //Dados de Acesso
    const emailCad = document.getElementById('emailCad')
    const senhaCad = document.getElementById('senhaCad')
    const emailConf = document.getElementById('emailConf')
    const senhaConf = document.getElementById('senhaConf')

    //Autenticacao Dados Pessoais
    if (!nome.value) {
        alert('Um ou mais campos de "Dados Pessoais" não preenchidos!');
        nome.classList.add('is-invalid')
        return;
    }

    if (!cpf.value) {
        alert('Um ou mais campos de "Dados Pessoais" não preenchidos!');
        cpf.classList.add('is-invalid')
        return;
    }

    if (!phone.value) {
        alert('Um ou mais campos de "Dados Pessoais" não preenchidos!');
        nome.classList.add('is-invalid')
        return;
    }

    if (!data.value) {
        alert('Um ou mais campos de "Dados Pessoais" não preenchidos!');
        data.classList.add('is-invalid')
        return;
    }


    //Autenticação Localização
    if (!rua.value) {
        alert('Um ou mais campos de "Localização" não preenchidos!');
        rua.classList.add('is-invalid')
        return;
    }

    if (!numeroCasa.value) {
        alert('Um ou mais campos de "Localização" não preenchidos!');
        numeroCasa.classList.add('is-invalid')
        return;
    }

    if (!bairro.value) {
        alert('Um ou mais campos de "Localização" não preenchidos!');
        bairro.classList.add('is-invalid')
        return;
    }

    if (!cidade.value) {
        alert('Um ou mais campos de "Localização" não preenchidos!');
        cidade.classList.add('is-invalid')
        return;
    }

    if (!uf.value) {
        alert('Um ou mais campos de "Localização" não preenchidos!');
        uf.classList.add('is-invalid')
        return;
    }


    //Autenticação Dados Acesso
    if (!emailCad.value) {
        alert('Um ou mais campos de "Dados de acesso" não preenchidos!');
        emaildCad.classList.add('is-invalid')
        return;
    }

    if (!emailConf.value) {
        alert('Um ou mais campos de "Dados de acesso" não preenchidos!');
        emailConf.classList.add('is-invalid')
        return;
    }

    if (!senhaCad.value) {
        alert('Um ou mais campos de "Dados de acesso" não preenchidos!');
        senhaCad.classList.add('is-invalid')
        return;
    }

    if (!senhaConf.value) {
        alert('Um ou mais campos de "Dados de acesso" não preenchidos!');
        senhaConf.classList.add('is-invalid')
        return;
    }

    //Verifica se o os emails e senhas são iguais!
    if (emailCad.value != emailConf.value) {
        alert('Favor confirmar os campos de email')
        emailCad.classList.add('is-invalid')
        emailConf.classList.add('is-invalid')
        return
    }

    if (senhaCad.value != senhaConf.value) {
        alert('Favor confirmar os campos de senha')
        senhaCad.classList.add('is-invalid')
        senhaConf.classList.add('is-invalid')
        return
    }

    else{
        alert('Cadastro feito com sucesso, sinta-se livre para acessar sua conta apartir da página inicial')
        window.location.href = "indexvalidado.html"

        //Adiciona classe valida aos campos Dados Pessoais
        nome.classList.remove('is-invalid')
        nome.classList.add('is-valid')

        cpf.classList.remove('is-invalid')
        cpf.classList.add('is-valid')

        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')

        data.classList.remove('is-invalid')
        data.classList.add('is-valid')

        //Adiciona classe valida aos campos Localização
        numeroCasa.classList.remove('is-invalid')
        numeroCasa.classList.add('is-valid')

        bairro.classList.remove('is-invalid')
        bairro.classList.add('is-valid')

        cidade.classList.remove('is-invalid')
        cidade.classList.add('is-valid')

        uf.classList.remove('is-invalid')
        uf.classList.add('is-valid')

        //Adiciona classe valida aos campos Dados de Acesso
        emailCad.classList.remove('is-invalid')
        emailCad.classList.add('is-valid')

        emailConf.classList.remove('is-invalid')
        emailConf.classList.add('is-valid')

        senhaCad.classList.remove('is-invalid')
        senhaCad.classList.add('is-valid')

        senhaConf.classList.remove('is-invalid')
        senhaConf.classList.add('is-valid')
    }
    
}

