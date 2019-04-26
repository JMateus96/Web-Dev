// var idade = 2

// idade++ = idade + 2
// idade += 2

// EXPLICAÇÃO: idade++ = incrementa  -->

// idade-- = idade -2
// idade -= 2

// EXPLICAÇÃO: idade-- = diminui  -->

/*
sasas
assa
*/

/* if (idade < 18) {
    console.log('Voce n pode entrar aqui')
} else {
    console.log('Voce pode entrar aqui')
}

idade++

if (idade < 18) {
    console.log('Voce n pode entrar aqui')
} else {
    console.log('Voce pode entrar aqui')
}
*/
// SE A IDADE FOR MENOR QUE 18 VAI APARECER 'VOCÊ NÃO PODE ENTRAR AQUI'. E SE FOR MAIOR QUE 18 VAI APARECER 'VOCÊ PODE ENTRAR AQUI'

//COMEÇOU UM NOVO EXEMPLO

/*var idade = 10

while (idade < 18) { //while= enquanto sua idade for  menor que 18 você não poderá entrar aqui
    console.log('Voce n pode entrar aqui' + idade + 'anos')
    idade++
}
    console.log('Agora vc pode entrar aqui')
*/
//NESSE CASO ELE VAI VÁRIAS VEZES NO "CONSOLE (EM INSPECIONAR)" E VAI MUDANDO A IDADE ATÉ CHEGAR EM AGORA VC PODE ENTRAR AQUI

//COMEÇOU UM NOVO EXEMPLO

/*var idade = 18

do { //faça isso
    console.log('Voce n pode entrar aqui' + idade + 'anos')
    idade++
} while (idade < 18)
    console.log('Agora vc pode entrar aqui')
*/

//NESSE CASO ELE NÃO VAI IR VÁRIAS VEZES NO CONSOLE E IR MUDANDO A IDADE, VAI DIRETO PARA 'AGORA VC PODE ENTRAR AQUI'

//COMEÇOU UM NOVO EXEMPLO

/* 
var h1 = document.getElementById('pizza')
console.log(h1)

//OBJETO É UM CONJUNTO DE PROPRIEDADES = CONJUNTOS CHAVES-VALOR (ELAS POSSUEM VALORES) "exemplos: nome, idade, caracteristica, altura, etc."


var pessoa = {
    nome: 'Berna',
    idade: 20,    
    caracteristica: 'muito muito engraçado'
}

var outraPessoa = {
    nome: 'Janaina',
    idade: 57,
    altura: 1.57
}

var textoH1 = h1.textContent
h1.textContent = 'vai' 
*/

var h1 = document.getElementById /*EXPLICAÇÃO: isso é uma função (texto de código que faz alguma coisa)*/ ('pizza') /*EXPLICAÇÃO: É UM PARÂMETRO*/ 
console.log(h1)

/* var pessoa = {
    nome: 'Berna',
    idade: 20,    
    caracteristica: 'muito muito engraçado'
}

var outraPessoa = {
    nome: 'Janaina',
    idade: 57,
    altura: 1.57
} */

/*function dizerOla (){
    alert('Ola')
}
*/

//OUTRO EXEMPLO

/*function quadrado(x) { //EXPLICAÇÃO: pode ser usado também para o cubo aí na parta do --> var conta = x * x * x <-- e aí só mudar quadrado por cubo
    var conta = x * x
    return conta //EXPLICAÇÃO: retorna valor de conta para quem chamou a função nesse caso --> quadrado(2) e quadrado(4) e aí a varíavel(var) é var quadradoDe2 ou var quadrardoDe4 
}

var quadradoDe2 = quadrado(2) //EXPLICAÇÃO: VAI SER IGUAL A 4
console.log(quadradoDe2)

var quadradoDe4 = quadrado(4)
console.log(quadradoDe4)
*/

/*var a = {
    nome: 'Berna',
    idade: 20,    
    caracteristica: 'muito muito engraçado'
}

var b = {
    nome: 'Janaina',
    idade: 57,
    altura: 1.57
}


function quadrado(x) { //EXPLICAÇÃO: pode ser usado também para o cubo aí na parta do --> var conta = x * x * x <-- e aí só mudar quadrado por cubo
    var conta = x * x
    return conta //EXPLICAÇÃO: retorna valor de conta para quem chamou a função nesse caso --> quadrado(2) e quadrado(4) e aí a varíavel(var) é var quadradoDe2 ou var quadrardoDe4 
}

function somar(a, b) {
    return a + b
}
console.log (somar(5,10)) //EXPLICAÇÃO= A=5 B=10

function imprimirDadosPessoa(pessoa) {
    console.log('Nome da pessoa = ' + pessoa.nome)
    console.log('Idade da pessoa = ' + pessoa.idade)
    console.log('Altura da pessoa = ' + pessoa.altura)
}

imprimirDadosPessoa(b)
alert ('ola')
*/

var a = {
    nome: 'Berna',
    idade: 20,    
    caracteristica: 'muito muito engraçado'
}

var b = {
    nome: 'Janaina',
    idade: 57,
    altura: 1.57
}

function quadrado(x) { //EXPLICAÇÃO: pode ser usado também para o cubo aí na parta do --> var conta = x * x * x <-- e aí só mudar quadrado por cubo
    var conta = x * x
    return conta //EXPLICAÇÃO: retorna valor de conta para quem chamou a função nesse caso --> quadrado(2) e quadrado(4) e aí a varíavel(var) é var quadradoDe2 ou var quadrardoDe4 
}

function somar(a, b) {
    return a + b
}

function cubo(x) { 
    var conta = x * x * x
    return conta //EXPLICAÇÃO: retorna valor de conta para quem chamou a função nesse caso --> quadrado(2) e quadrado(4) e aí a varíavel(var) é var quadradoDe2 ou var quadrardoDe4 
}

console.log (somar(5,10)) //EXPLICAÇÃO= A=5 B=10

var imprimirDadosPessoa = function(pessoa) { //EXPLICAÇÃO: poderia ser também --> function imprimirDadosPessoa(pessoa) { <--
    console.log('Nome da pessoa = ' + pessoa.nome)
    console.log('Idade da pessoa = ' + pessoa.idade)
    console.log('Altura da pessoa = ' + pessoa.altura)
}

imprimirDadosPessoa(b)

var funcao = imprimirDadosPessoa //EXPLICAÇÃO: Quando está sem parênteses 
function somarDoisNumeros (a, b, calcular) {
    return calcular(a) + calcular(b)
}
console.log /*ele representa o console do seu navegador --> Inspecionar*/(somarDoisNumeros (10, 5, quadrado))
console.log(somarDoisNumeros(10,5, cubo))

var funcoes = {
    a:imprimirDadosPessoa,
    b: somarDoisNumeros
}

funcoes.a(b)
console.log (funcoes.b(10,5, quadrado))

//OUTRA MANEIRA DE ACESSAR/RETORNAR UM ELEMENTOS NO COMPUTADOR --> var elemento = document.getElementId

var elemento = document.querySelector ('h1') /*DÁ O PRIMEIRO VETOR --> AGREGAR VALORES DE MAIS DE UMA VEZ SÓ. CARRINHO DE COMPRAS E VÁRIOS OBJETOS COMPRADOS (GELADEIRA, ETC.) QUE VOCÊ REFERENCIA */
console.log(elemento)

var item1 = {
    nome: 'geladeira',
    valor: 5.50
}

var item2 = {
    nome: 'livro',
    valor: 150.90
}

var item3 = {
    nome: 'carro',
    valor: 0.50
}

var itemsNoCarrinho = [item1, item2, item3] //EXPLICAÇÃO: isso indica que é um vetor. Também chamado de array

/* console.log(itemsNoCarrinho[2]) //EXPLICAÇÃO: acesso a uma posição do vetor. Ele começa em 0 então o [2] = ao item3 
Esse console.log vai mostrar as informações do item3.
*/

/* var i = 0 //EXPLICAÇÃO: Primeira posição do vetor (é considerado um objeto no javascript)
var somaDosValores = 0 //EXPLICAÇÃO: vai acumulando os valores.

while (i < itemsNoCarrinho.length){
    somaDosValores += itemsNoCarrinho [i].valor //EXPLICAÇÃO: está acessando o valor na posição i.
    ++i //É IGUAL A --> ++1
}

console.log('Subtotal = ' + somaDosValores) */

//DEU UM NOVO EXEMPLO

var somaDosValores = 0 //EXPLICAÇÃO: Primeira posição do vetor (é considerado um objeto no javascript)
for (var i = 0; i < itemsNoCarrinho.length;i++) { //Não precisaria colocar o i++ sozinho lá embaixo
    somaDosValores += /*EXPLICAÇÃO: = somaDosValores*/itemsNoCarrinho[i].valor //EXPLICAÇÃO: está acessando o valor na posição i.
}

/*
var item4 = {
    nome: 'mesa',
    valor: 15.00
}
itemsnoCarrinho.push(item4)

console.log('novo vetor')
for (var i=0; i < itemsNoCarrinho.length; i++) {
    console.log(itemsNoCarrinho[i])

*/

    console.log('Subtotal = ' + somaDosValores)
//EXPLICAÇÃO: dá a mesma resposta do exemplo anterior 

/*for (var i=0; i < itemsNoCarrinho.length; i++) {
    console.log(itemsNoCarrinho[i])
} */

for (var i = 2; i >= 0; i--) {
    console.log(itemsNoCarrinho[i])
}
