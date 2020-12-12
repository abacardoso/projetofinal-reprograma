const dicas = [
    {
        id: 1,
        titulo: "FastFormat",
        descrição: "O FastFormat é uma plataforma completa para produção de documentos acadêmicos utilizada por milhares de alunos e professores em diversas instituições de ensino. Os documentos são formatados automaticamente em diversas normas, como ABNT e revistas nacionais e internacionais.",
        descrição2: "Basicamente você coloca sua área de estudo, seu curso e sua universidade e ele formata o seu trabalho para você, de acordo com as normas da sua Institução.",
        link: "https://fastformat.co/",
        imagem: "https://blog.fastformat.co/wp-content/uploads/2018/06/Infogra%CC%81fico-4-e1527896372742.jpg"
    },
    {
        id: 2,
        titulo: "Desmos",
        descrição: "Desmos é uma calculadora gráfica avançada implementada como um aplicativo da web e um aplicativo móvel. Ele aceita funções e tabelas de valores x e y e permite que você faça anotações diretamente em seu gráfico.",
        descrição2: "Além disso, os usuários podem salvar seus gráficos para voltar mais tarde, com a criação de uma conta por meio do aplicativo. O aplicativo também possui exemplos predefinidos de uma grande variedade de gráficos.",
        link: "https://www.desmos.com/?lang=pt-BR",
        imagem: "https://www.desmos.com/assets/img/test-mode/secure-graphing.png"
    },
    {
        id: 3,
        titulo: "GoConqr",
        descrição: "É uma plataforma de aprendizagem social, que une os benefícios de ferramentas poderosas com a força de uma comunidade ativa e criativa. Ao entrar no site, você precisa fazer um login, onde deve informar se estuda ou se dá aulas.",
        descrição2: "Ao colocar que você estuda, o próximo passo é informar se está no ensino médio ou ensino superior e as matérias. O site então fornece opções para criar slides, flashcards e mapas mentais.",
        link: "https://www.goconqr.com/pt-BR",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Mapa_Mental_de_GoConqr_Brasil.jpg"
    },
    {
        id: 4,
        titulo: "Transcrição vídeos youtube",
        descrição: "Usuários do YouTube podem usar a ferramenta de transcrição para visualizar tudo que é dito nos vídeos com legenda oculta. Infelizmente, não são todos os vídeos que possuem esta ferramenta, a transcrição funciona apenas em conteúdos que possuem legendas automáticas.",
        descrição2: "Essa ferramenta pode ser usada para buscar um conteúdo específico. Em vez de assistir a um vídeo para buscar os termos mencionados, é possível acessar a cópia e buscar diretamente no texto, sem precisar dar play. No menu com botão de três pontos abaixo do vídeo, escolha a opção Abrir transcrição. O YouTube irá exibir o texto escrito com as falas ditas no vídeo e as marcações de tempo. Vale lembrar que, como o processo é automatizado, podem haver erros na transcrição.",
        imagem: "https://s2.glbimg.com/YveLs1WJ0yaHwm82UUs_p9o_plI=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/q/i/mBexNIStWLUu1vXpzQjg/captura-2018-09-06-12-17-15.png"
    },
    {
        id: 5,
        titulo: "Digitação por voz",
        descrição: "Sabe quando você precisa digitar alguma vídeo aula e passa o tempo inteiro pausando e voltando para escrever tudo certinho? Você nunca mais vai precisar passar por isso! Existe uma ferramenta no documentos do google chamada Digitação por voz.",
        descrição2: "Você só precisa clicar no ícone do microfone que vai aparecer, dar play na sua vídeo aula e o vídeo vai ser transcrito para o documento do google na mesma hora!!!",
        imagem: "https://imagens.canaltech.com.br/302356.556277-Digitacao-por-voz-Google-Docs.png"
    },
    {
        id: 6,
        titulo: "App Química",
        descrição: "O app mostra a tabela periódica, permite descobrir reações químicas, resolver equações químicas com uma ou várias variáveis desconhecidas e ainda possui uma calculadora de massas molares. Basta introduzir corretamente um composto químico e ele vai mostrar as massas molares e percentagem de elementos.",
        descrição2: "Disponível para IOS e Android.",
        app: "https://apps.apple.com/br/app/qu%C3%ADmica/id493558583",
        app2: "https://play.google.com/store/apps/details?id=com.chemistry&hl=pt_BR&gl=US",
    },
    {
        id: 7,
        titulo: "App Photomath",
        descrição: "Com esse app, você consegue digitalizar problemas matemáticos escritos à mão usando a câmara do seu dispositivo. O Photomath então decompõe cada problema matemático em passos simples e soluciona a equação.",
        descrição2: "Disponível para IOS e Android.",
        app: "https://apps.apple.com/br/app/photomath/id919087726",
        app2: "https://play.google.com/store/apps/details?id=com.microblink.photomath&hl=pt_BR&gl=US"
    },    
    {
        id: 8,
        titulo: "App Socratic",
        descrição: "A app funciona como um explicador digital. Usando a própria câmera do smartphone, o app lê um problema e consegue resolver e explicar, passo a passo, equações matemáticas e também auxiliar em problemas de outras áreas, como química, física, história, biologia, trigonometria, álgebra, etc.",
        descrição2: "Disponível para IOS e Android.",
        app: "https://apps.apple.com/br/app/socratic-by-google/id1014164514",
        app2: "https://play.google.com/store/apps/details?id=com.google.socratic&hl=pt_BR"
    },
    {
        id: 9,
        titulo: "Time.Graphics",
        descrição: "Se você estuda história, geografia, sociologia ou qualquer matéria que decorre pelo tempo, você já viu e utiliza de uma linha do tempo para estudar.",
        descrição2: "A Time.Graphics é a maneira mais rápida, moderna e atraente de criar linhas do tempo. Com esta ferramenta você pode estudar, usar para suas suas realizações pessoais e até planejar projetos com precisão e alto padrão.",
        link: "https://time.graphics/pt/",
        imagem: "https://f-origin.hypotheses.org/wp-content/blogs.dir/5442/files/2019/04/Time.Graphics.png"
    },
    {
        id: 10,
        titulo: "Language Tool",
        descrição: "É uma ferramenta gratuita que verifica a ortografia e a gramática e sugere regras que vão além de palavras erradas. Você cola o texto no espaço disponível e tudo o que precisa ser revisado ganha destaque, sendo uma forma prática de identificar erros. ",
        descrição2: "Você pode também adicionar o Language Tool no Google Docs. Depois de instalar, é só clicar na guia Complementos, selecionar o o Language Tool e escolher o idioma da verificação.",
        descrição3: "Nota: Para quem trabalha com bastante palavras estrangeiras, pode ser bastante chato, visto que ele vai identificar todas elas como erradas e vai sugerir uma tradução.",
        link: "https://languagetool.org/pt-BR",
        imagem: "https://lh3.googleusercontent.com/ec7TBGWijl4EQ_lN7l5BBsjyAA1SOlIf9h6WA8Gymh-vesHJ2QEdsgC8xIEq3Vg_R0FYwaweUQ=w640-h400-e365-rj-sc0x00ffffff"
    },
    {
        id: 11,
        titulo: "Canal do Youtube para estudo - Débora Aladim",
        descrição: "Débora Aladim é mineira, estudante de História na UFMG e desde 2013 faz vídeo-aulas de história, redação e dá dicas de estudo que ajudam milhões de estudantes e pessoas que querem aprender mais.",
        descrição2: "Seus vídeos são assistidos por adolescentes, jovens pré-vestibulandos e adultos que estudam para concursos ou simplesmente se interessam pelos assuntos e curiosidades.",
        descrição3: "Além dos vídeos gratuitos do youtube, ela também possui cursos e apostilas pagos em seu site.",
        link: "https://www.youtube.com/user/deboraaladim",
        imagem: "https://i.ytimg.com/vi/VG9xVK6pM5o/maxresdefault.jpg"
    },
    {
        id: 12,
        titulo: "Genially",
        descrição: "Genially é uma plataforma multifunções especializada em recursos digitais para o desenvolvimento de estratégias gamificadas, o que oferece uma gama de possibilidades de criação de ferramentas de ensino.",
        descrição2: "O objeto principal dessa plataforma é a exploração de ambientes semelhantes a slides, mas nem de longe a Genially se resume a isso. Ela é bastante completa e oferece uma série de recursos interessantes, como posteres, infográficos, apresentações, postcards, e conteúdos resumidos, todos eles interativos, calendários, mapas, linhas de estudos, jogos de tabuleiros, por meio de uma interface atraente e muito intuitiva.",
        descrição3: "Ao entrar você precisa criar uma conta gratúita. Para começar a criar conteúdo que pode simplesmente clicar sobre a caixa “Criar um novo genially” ou mover em toda a largura da página pelos diferentes abas no topo: cartazes, apresentações, documentos, correios e outros. Em cada um deles é possível encontrar diferentes modelos. Após a conclusão do projeto será possível compartilhar através de redes sociais, incorporar-lo em um site (código html), salvar para o seu computador, duplicar-lo ou enviar via e-mail.",
        link: "https://www.genial.ly/",
        imagem: "https://cdn0.capterra-static.com/screenshots/2103711/238952.png"
    },
    {
        id: 13,
        titulo: "App Nota 1000",
        descrição: "É um aplicativo totalmente gratuito que oferece conteúdo e correção de redação para quem vai prestar o ENEM em 2020.",
        descrição2: "Com uma interface simples e moderna, o aplicativo promete ajudar ao máximo indicando temas possíveis para a prova, oferecendo uma série de dicas semanais com pontos de melhoria desde começar uma redação até chegar a desejada nota 1000, além de receber sua redação para os professores do app realizarem a correção de forma gratuita.",
        descrição3: "Disponível para IOS e Android.",
        app: "https://apps.apple.com/br/app/reda%C3%A7%C3%A3o-nota-1000-enem/id1448677758",
        app2:"https://play.google.com/store/apps/details?id=com.goodbarber.notamil&hl=pt_BR&gl=US",
        imagem: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2019/08/30/8d08f564-08dc-4a18-a068-e3357e98ec48.jpg"
    },
    {
        id: 14,
        titulo: "Planejativo",
        descrição: "O Planejativo é uma plataforma digital que planeja e organiza seus estudos para o ENEM de forma completa por meio da inteligência artificial e de uma metodologia inovadora.",
        descrição2: "Ela visa otimizar o seu processo de aprendizagem, permitindo que você foque no que é realmente importante: estudar.",
        descrição3: "Além de auxiliar no foco, concentração, disciplina, motivação e otimização de tempo, pois ele vai além do cronograma. O plano de estudos não compreende apenas dia, hora e matéria a ser estudada, ele é estrategicamente criado para ajudar você a estudar em menos tempo e aumentar seu rendimento, já que é totalmente feito com base na sua rotina e nas suas necessidades. Com ele, você saberá exatamente o que fazer e, assim conseguirá cumprir suas obrigações de maneira organizada sem deixar espaço para procrastinação. O plano de estudos é, sem dúvida, a maneira mais rápida de alcançar a aprovação no Enem.",
        link: "https://planejativo.com/",
        imagem: "https://app.planejativo.com/uploads/novas/ff2d20d571d2df67c27ed31ef213c3b6.2%20-%20cronograma"
    },
    {
        id: 15,
        titulo: "Canal do Youtube para estudo - Professor Jubilut",
        descrição: "O Professor Jubilut, é um youtuber, educador, palestrante e autor do canal Biologia Total, reconhecido como um dos maiores canais de ensino de biologia no YouTube brasileiro com 1,89 milhões de inscritos.",
        descrição2: "Além dos vídeos gratuitos do youtube, o Professor também disponibiliza cursos pagos para preparação em Biologia, Química, Física e Matemática pro ENEM e Vestibulares.",
        link: "https://www.youtube.com/user/jubilut",
        imagem: "https://i.ytimg.com/vi/KwJsEnIMPj0/maxresdefault.jpg"
    },
    {
        id: 16,
        titulo: "Quizlet - App e desktop",
        descrição: "O Quizlet é uma plataforma de estudos em geral que, inclusive, permite aprender outras línguas. Há a opção de ler sobre português, história, ciências, entre outras disciplinas.",
        descrição2: "Através de um sistema de aprendizado por meio de flashcards, crie seus próprios questionários e resumos em um lado de um pedaço de papel digital e do outro a resposta. Também é possível compartilhar seus cards com amigos, acessar os de outras pessoas, jogar jogos educativos e estudar idiomas online.",
        descrição3: "Disponível para IOS e Android.",
        app: "https://apps.apple.com/br/app/quizlet/id546473125",
        app2:"https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid&hl=pt&gl=US",
        link: "https://quizlet.com/pt-br",
        imagem: "https://image.winudf.com/v2/image1/Y29tLnF1aXpsZXQucXVpemxldGFuZHJvaWRfc2NyZWVuXzBfMTU2NTEyODc4NV8wMzk/screen-0.jpg?fakeurl=1&type=.jpg"
    },
    {
        id: 17,
        titulo: "App RevisApp",
        descrição: "O RevisApp é um aplicativo com as principais matérias cobradas no Ensino Médio, Ensino Fundamental, Enem e outros Vestibulares de forma simples, prática e objetiva.",
        descrição2: "O app possui mais de 400 conteúdos sobre Ciências da Natureza (Química, Física, e Biologia), Ciências Humanas (História, Geografia, Sociologia e Filosofia), Linguagens (Português, Inglês e Literatura), Matemática e Redação. Além de centenas de exercícios com imagens e explicações para você fixar o conteúdo, um controle de revisões para que você saiba quais assunto ja estudou e uma seção de notas, onde você pode fazer anotações sobre seus estudos, lembretes e revisões.",
        app: "https://apps.apple.com/br/app/revisapp/id1447918829",
        app2:"https://play.google.com/store/apps/details?id=com.klawapps.revisapp&hl=pt_BR",
        link: "http://www.estuderevisapp.com/",
        imagem: "https://i.ytimg.com/vi/VBT_oOifVww/maxresdefault.jpg"
    }
    

    
    
]

export default dicas