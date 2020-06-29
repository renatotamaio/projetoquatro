const mask = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },

    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')

    },

    nome(value){
        return value
        .replace(/\d/g, '')
    },

    numeroCasa(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})\d+?$/, '$1')
    },

    uf(value){
        return value
        .replace(/\d/g, '')
        .replace(/(\w{2})\w+?$/, '$1')
    }



}


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = mask[field](e.target.value)
    }, false)
})