$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reserve: true});
    $('#endereco-cep').mask('00.000-00');
});

    $('form').validate({
        rules: {
            telefone: {
                required: true                
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
