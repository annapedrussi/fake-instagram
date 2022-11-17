// obtendo elementos com seletores css
const nomeUsuario = document.querySelector('header .avatar-content div').innerHTML = "<strong> Nome Usuário </strong>";

// obtendo input com um nome especifico através do seletor css
// let primeiroNome = document.querySelector('.form-auth .input[name="name"]');
// primeiroNome.placeholder = 'Digite o Primeiro Nome';

// obtendo input selecionando pela propriedade name
const primeiroNomeInput = document.getElementsByName('name')[0]
primeiroNomeInput.placeholder = 'Digite o seu primeiro nome';



// alterando a borda dos inputs do formulario de cadastro
const inputs = document.querySelectorAll('.form-auth input');
inputs.forEach(input => (input.style.borderRadius = '5px'))

// alterando posicionamento dos inputs
const formAuth = document.querySelector('.form-auth');
formAuth.style.display = 'flex'
formAuth.style.flexDirection = 'column'

// selecionando o body diretamente para alterar a cor de fundo
document.body.style.backgroundColor = '#fafafa'
console.log('aki')