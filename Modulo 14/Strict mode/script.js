// "use strict";




// posso declarar uma variavel com o sem a palavra var
// var x = 7;   é igual   x = 7; (quando se está fora de escopo), o x será declarado no window das duas formas
/* x = 7;

 console.log(x);
 console.log(window)*/


// outro exemplo diferente agr:
// Nesse exemplo tem diferença declarar com ou sem var, quando colocamos "var = 7;" dentro de uma função estamos declarando aquela variável dentro do escopo local, ou seja, poderemos utilizar somente ali, agr quando declaramos "x = 7;" ele fica declarado também no window.
// para exemplificar melhor temos dois exemplos, tire de comentario e veja o ocnsole.log



// 1º exemplo: erro na linha do console fora da function
// function imprimir() {
//     var x = 7;

//     console.log(x);

// }

// imprimir();
// console.log(x);
// console.log(window);



// 2º exemplo:
function imprimir() {
    x = 7;

    console.log(x);

}

imprimir();
console.log(x);
console.log(window);


// para que não se tenha esse problema de criação de variáveis globais sem querer podemos utilizar o ' "use strict"; ', com ele não teremos mais o problema e o exemplo 2 se comportará igual o exemplo 1, como teste, descomente o use strict no inicio do código e execute com o exemplo 2, ele basicamente te obriga a declarar variável, ou seja, sempre que for declarar vc será obrigado a colocar var na frente.