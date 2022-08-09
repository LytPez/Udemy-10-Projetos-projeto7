/*
função anonima no botao que ao clicar irá recuperar e adicionar a propriedade nome do array lista
*/

let lista = [
  {nome: 'Spiderman', ano: 2000, categoria:'aventura'},
  {nome: 'Hulk', ano: 2002, categoria:'ação'},
  {nome: 'IronMan', ano: 2010, categoria:'scify'},
]

document.getElementById('button').onclick=function(){
  document.getElementById('nomes').innerHTML=lista[0].nome
}