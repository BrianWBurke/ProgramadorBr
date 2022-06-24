
// exemplo this:

// let dog = {
//     sound: "Au Au",
//     speak: function() {
//         console.log(this.sound);
//     }
// }

// let cat = {
//     sound: "Miau",
//     speak: function() {
//         console.log(this.sound);
//     }
// }

// dog.speak() ;
// cat.speak() ;


// simplificando o exemplo this:
// como this depende do contexto, quando for cachorro será auau e quando for gato será miau

function speakGeneric() {
    console.log(this.sound);    
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
    }


let cat = {
    sound: "Miau",
    speak: speakGeneric
    }


dog.speak() ;
cat.speak() ;

// quando chamamos a função speakGeneric(); dará como indefinido, pois ele não sabe o que é o this e como ele não sabe ele não tem como emitir o som (exemplificando com o exemplo de cima) do this.
speakGeneric();

// porém, podemos dar um contexto para uma função com bind:
// dentro do bind eu passo o contexto (o this).

let bindedFunction = speakGeneric.bind(cat);

bindedFunction();

bindedFunction = speakGeneric.bind(dog);

bindedFunction();