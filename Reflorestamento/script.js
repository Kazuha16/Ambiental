const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você possui conhecimento sobre o conceito de reflorestamento?",
        alternativas: [
            "Sim, tenho uma ideia geral.",
            "Não, desconheço esse termo."
        ]
    },
    {
        enunciado: "Você contribui ou já pensou em contribuir no reflorestamento? Por que?",
        alternativas: [
            "Sim, contribuo ou penso em contribuir para desempenhar um papel importante no combate ao efeito estufa.",
            "Não, não contribuo ou nunca pensei em contribuir, pois não vejo importância na prática ou acho perca de tempo.",
        ]
    },
    {
        enunciado: "Como você acha que deve ser feito o reflorestamneto?", 
        alternativas: [
            "Através do plantio de mudas em uma área devastada.",
            "Por meio da inserção de espécies vegetais específicas que podem tornar o ambiente favorável para outras espécies ocuparem."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
