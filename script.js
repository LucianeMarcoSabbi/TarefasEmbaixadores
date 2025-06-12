const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
      {
     enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, que é capaz de gerar imagens, áudios e vídeos super realistas.Qual o seu sentimento?",
     alternativas: [
          {
               texto: "Isso é aterrorizante!",
               afirmacao:"No início tive muito medo da mudança",
          }
          {
         texto: "Isso é motivador!",
         afirmacao: "Percebi que ela poderia me ajudar em muitas coisas",       
          }
     ]
    },
     {
     enunciado: "Você se interessa em aprender e tentar dominar essa nova tecnologia?",
     alternativas: [
        { 
            texto: "Sim, acho que vai ser importante para o meu futuro!",
            afirmacao: "Consegui utilizar para aprender várias coisas",
         {   
          texto: "Não, acredito que não vou precisar disso para nada!",
         afirmacao: "Acredito que posso trabalhar com várias coisas que não precisarei de tecnologia",
        }
     
        ]
    },
    {
     enunciado: "Você se questiona se essa nova tecnologia chamada de Inteligência Artificial poderá ser nociva de alguma forma para os seres humanos?",
     alternativas: [
        {
          texto: "Sim, eu me questiono sempre sobre o futuro!",
          afirmacao: "Eu já tenho visto muitas criações nocivas que usam IA.",
        }
        {
          texto: "Não, eu não sou responsável por nada do que os outros fazem!",
          afirmacao: "E acredito que não serei atingido por nada disso"
        }
     ]
    },
    {
     enunciado: "E caso você decida se atualizar e passe a estudar a IA, você irá utilizá-la para desenvolver seus trabalhos",
     alternativas: [
        {
        texto: "Sim, o tempo todo, para que eu devo pensar, se tem uma tecnologia que vai pensar por mim!",
        afirmacao: "Algumas tecnologias são criadas para dar mais facilidade ao ser humano",
    }
        {
         texto:"Não, usarei apenas em alguns momentos  e em outros procurarei desenvolver usando aplicativos que dependam mais de mim!",
         afirmacao: "Acredito que se usar demais, me tornarei completamente dependente da tecnologia",
        }
     ]
    },
    {
     enunciado: "Quem seria o responsável se um aplicativo de IA tomasse uma decisão prejudicial para um ser humano?",
     alternativas: [
          {
            texto: "A pessoa que criou o algoritmo para o aplicativo de IA!",
            afirmacao: "Porém, talvez não seja fácil de comprovar",
           }
        {
          texto: "O proprietário do equipamento que passou a utilizar aquele algoritmo!",
          afirmacao: "Antes de usar o algoritmo, o proprietário deve verificar todas as possibilidades",
         }
     ]
    },
]


let atual = 0;
let perguntaAtual;

function mostraPergunta() { 
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     mostraAlternativas();
     }
function mostraAlternativas()   {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
  
}
}     
     
mostraPergunta();