const button = document.getElementById('submit');

button.addEventListener('click', validaCampo);


function validaCampo(e){
    e.preventDefault();

    const mensagem = document.getElementById('mensagem');

    const CampoA = document.getElementById('CampoA');
    const CampoB = document.getElementById('CampoB');


    if(CampoA.value < CampoB.value){
        mensagem.textContent = `O Campo A: ${CampoA.value} é menor que o Campo B: ${CampoB.value}`
        CampoA.classList.toggle('valid');
        CampoB.classList.toggle('valid')
    }else{
    mensagem.textContent = `O Campo A: ${CampoA.value} é maior que o Campo B: ${CampoB.value} Digite novamente`
    CampoA.classList.toggle('erro');
    CampoB.classList.toggle('erro')
    };

CampoA.value='';
CampoB.value='';
}