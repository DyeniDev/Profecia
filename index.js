const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti. Salmos 91:7',
  'Se pedirdes alguma coisa em meu nome, eu o farei. João 14:14.',
  'Sede fortes e corajosos; não temais, nem vos espanteis diante deles; porque o Senhor teu Deus é o que vai contigo; não te deixará nem te desamparará. Deuteronômio 31:6',
  'Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. Jeremias 29:11',
  'Porque Deus é o que opera em vós tanto o querer como o efetuar, segundo a sua boa vontade. Filipenses 2:13',
  'Tudo posso naquele que me fortalece. Filipenses 4:13',
  'O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria. Eclesiastes 9:10',
  'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens. Colossenses 3:23',
  'Espere no Senhor. Seja forte! Coragem! Espere no Senhor. Salmos 27:14',
  'Mas, sejam fortes e não desanimem, pois o trabalho de vocês será recompensado. 2 Crônicas 15:7',
  'Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam. Isaías 40:31',
  'Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza. 2 Coríntios 12:9',
  'Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Mateus 11:28',
  'Pois o Senhor, o seu Deus, os acompanhará e lutará por vocês contra os seus inimigos, para dar a vitória a vocês.Deuteronômio 20:4',
  'Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa. Isaías 41:10',
  'O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças. Salmos 28:7',
  'O SENHOR é o meu pastor, nada me faltará. Salmos 23:1',
  'Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas. Salmos 23:2',
  'Para trás de mim, Satanás! Mateus 16:23'
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}