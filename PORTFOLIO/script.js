var a1 = document.getElementById("about1");
var a2 = document.getElementById("about2");
var a3 = document.getElementById("about3");
var overlay = document.getElementById("overlay");
var windowPopup = document.getElementById("window");
var trilho = document.getElementById("trilho");
var body = document.querySelector("body");
var footer = document.querySelector("footer");

// Função para exibir o overlay e a janela popup
a1.addEventListener("click", function () {
    overlay.style.display = "block";  // Mostra o fundo desfocado
    windowPopup.style.display = "block"; // Mostra a janela popup
    windowPopup.querySelector("p").innerText = "Projeto desenvolvido para portfólio e estudo que utiliza HTML, CSS e JavaScript, inspirado em Pokémon e videogames. Ele apresenta um site no formato de Pokédex, onde os usuários podem explorar e conhecer alguns dos Pokémon da primeira geração, proporcionando uma experiência interativa e envolvente.";
});

a2.addEventListener("click", function () {
    overlay.style.display = "block";  // Mostra o fundo desfocado
    windowPopup.style.display = "block"; // Mostra a janela popup
    windowPopup.querySelector("p").innerText = "Projeto desenvolvido para portfólio e estudo com HTML, CSS e JavaScript, inspirado na Marvel e no jogo Marvel vs. Capcom. Oferece uma seleção interativa de personagens que, ao serem escolhidos, são exibidos dinamicamente no cenário, recriando a experiência dos jogos de luta de forma envolvente e fluida.";
});

a3.addEventListener("click", function () {
    overlay.style.display = "block";  // Mostra o fundo desfocado
    windowPopup.style.display = "block"; // Mostra a janela popup
    windowPopup.querySelector("p").innerText = "Projeto desenvolvido para portfólio e estudo com HTML, CSS e JavaScript, inspirado na Tesla. Ele apresenta um site de vendas de veículos Tesla, permitindo que os usuários explorem modelos e enviem e-mails através de um formulário integrado com JotForm, criando uma experiência de navegação fluida e funcional.";
});

// Função para esconder o overlay e a janela popup ao clicar no overlay
overlay.addEventListener("click", function () {
    overlay.style.display = "none";  // Esconde o fundo desfocado
    windowPopup.style.display = "none"; // Esconde a janela popup
});

trilho.addEventListener("click", function() {
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
    footer.classList.toggle("dark");
});
