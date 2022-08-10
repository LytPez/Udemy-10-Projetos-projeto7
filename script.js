/*
função anonima no botao que ao clicar irá recuperar 
e adicionar a propriedade nome do array lista de forma
 aleatoria usando o .random() q gera numero aleatorio entre 0 e 1 
 multiplicando pelo tamanho do array para gerar entre os numeros do array.
*/

let lista = [
  {nome: 'Spiderman', ano: 2000, categoria:'aventura'},
  {nome: 'Hulk', ano: 2002, categoria:'ação'},
  {nome: 'IronMan', ano: 2010, categoria:'scify'},
]

document.getElementById('button').onclick=function(){
  let numeroAleatorio=Math.random()*lista.length
  let arredondamentoParaBaixo=Math.floor(numeroAleatorio)
  document.getElementById('nomes').innerHTML=lista[arredondamentoParaBaixo].nome
}
