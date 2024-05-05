//Código JavaScript comentado
'use strict'; // Habilita o modo estrito do JavaScript para garantir boas práticas de programação

// Seleciona o botão com a classe 'btn' e atribui a constante switcher
const switcher = document.querySelector('.btn');

// Adiciona um evento de clique ao botão
switcher.addEventListener('click', function() {
    // Alterna a classe 'dark-theme' no elemento <body> para mudar o tema da página
    document.body.classList.toggle('dark-theme');

    // Obtém a classe atual do elemento <body>
    var className = document.body.className;

    // Verifica se a classe atual é 'light-theme'
    if(className === "light-theme") {
        // Altera o texto do botão para "Mudar para Escuro" se o tema atual for claro
        this.textContent = "Mudar para Escuro";
    } else {
        // Altera o texto do botão para "Mudar para Claro" se o tema atual for escuro
        this.textContent = "Mudar para Claro";
    }

    // Exibe no console a classe atual do elemento <body>
    console.log('current class name: ' + className);
});
