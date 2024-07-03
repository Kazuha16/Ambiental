const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você possui conhecimento sobre o conceito de reflorestamento?",
        alternativas: [
            {
                texto: "Sim, tenho uma ideia geral."
                afirmacao: "Muito bem! Isso quer dizer que você terá mais facilidade na compreensão desse tema nas próximas questões."
            },
            {
                texto: "Não, desconheço esse termo."
                afirmacao: "Não se preocupe, vamos lhe dar uma breve explicação! O reflorestamento consiste na regeneração natural ou intencional de florestas e matas que foram esgotadas anteriormente."
            }
        ]
    },
    {
        enunciado: "Você contribui ou já pensou em contribuir no reflorestamento? Por que?",
        alternativas: [
            {
                texto: "Sim, contribuo ou penso em contribuir para desempenhar um papel importante no combate ao efeito estufa."
                afirmacao: "Continue assim! Você se preocupa com o amanhã e deseja que as gerações do futuro tenham uma boa vivência."
            },
            {
                texto: "Não, não contribuo ou nunca pensei em contribuir, pois não vejo importância na prática ou acho perca de tempo."
                afirmacao: "Que pena! Mas você sabia que o reflorestamento é muito importante? Além de repor a vegetação, ele auxilia na conservação da biodiversidade e ameniza a poluição do ar! O que acha de plantar pelo menos uma mudinha?."
            }
        ]
    },
    {
        enunciado: "Como você acha que deve ser feito o reflorestamneto?", 
        alternativas: [
            {
                texto: "Através do plantio de mudas em uma área devastada."
                afirmacao: "Esta técnica possui alta eficácia e maiores chances de resultar em sucesso, além de haver uma janela de tempo mais curta para a formação das primeiras matas."
            },
            {
                texto: "Por meio da inserção de espécies vegetais específicas que podem tornar o ambiente favorável para outras espécies ocuparem."
                afirmacao: "Também é uma ótima opção, visto que há relação tanto com as próprias plantas quanto os animais que dissipam suas sementes pela área ao redor!."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return:
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
