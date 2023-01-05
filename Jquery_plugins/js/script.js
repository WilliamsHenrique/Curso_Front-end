$(document).ready(function(){
    $('#phone').mask('(00) 0 0000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')
    
    $('form').validate({
        rules: {
            phone:{
                required: true
            },
            CPF:{
                required: true
            },
            CEP:{
                required: true,
            }
        },
        messages: {
            phone: 'Por favor, insira seu número celular'
        },
        messages: {
            CPF: 'Por favor, insira seu CPF'
        },
        messages: {
            CEP: 'Por favor, insira o CEP de sua residência'
        },
    })
})