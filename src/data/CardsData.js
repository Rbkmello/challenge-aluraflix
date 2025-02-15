
const cardsData = [
    
            {
                "id": 1,
                "title": "Guia de carreira Front-end",
                "category": "FRONT END",
                "photo": "https://i.ytimg.com/vi/fpth65ts3cw/maxresdefault.jpg",
                "link": "https://youtu.be/fpth65ts3cw?si=Y-3z-94taneYcdHy",
                "description": "Nesse primeiro episódio, confira o que é front-end e como seguir nessa área da tecnologia, através do Tech Guide front-end, um Guia de Estudos do iniciante ao avançado. São 3 níveis de Profundidade e 1 nível de Expansão, formando seu perfil como Dev Front-End em T."
            },
            {
                "id": 2,
                "title": "Guia de carreira React JS ?",
                "category": "FRONT END",
                "photo": "https://i.ytimg.com/vi/0tS4lUq_7iA/maxresdefault.jpg",
                "link": "https://youtu.be/0tS4lUq_7iA?si=Z-tECQFs2OnY8di2",
                "description": "Terceiro episódio da temporada! Com o Guia de Carreira React, aprenda o que é e como funciona essa biblioteca JavaScript, desde os fundamentos com HTML, CSS e JS, até os próximos níveis mais profundos, como React Hooks, Lazy Loading e Rotas, TypeScript, Testes, Redux e muito mais! Abordaremos dúvidas sobre 'quanto tempo leva para aprender React?' ou 'o que uma pessoa desenvolvedora React precisa saber?'. Você também encontrará o T para a construção da sua carreira e seus conhecimentos! Legal né? Dá o play pra conferir!"
            },
            {
                "id": 3,
                "title": "Guia de Carreira ANGULAR",
                "category": "FRONT END",
                "photo": "https://i.ytimg.com/vi/mXtDHJRVoJo/maxresdefault.jpg",
                "link": "https://youtu.be/mXtDHJRVoJo?si=ZHddTjoRxKAY7Q21",
                "description": "10º ep. da temporada do #HipstersPontoTube! | Com o Guia de Carreira Angular, saiba o que é esse FRAMEWORK e o que ele faz. Veja como é a curva de aprendizado dessa tecnologia e o passo a passo para sair do INICIANTE ao AVANÇADO, passando desde os fundamentos com HTML, CSS e JavaScript, até mergulhos mais profundos com POO, RxJS, observable, Angular CLI, comandos, services, módulos, gerenciamento de estado, formulários, testes, GraphQL, Nest.JS, Design System, Angular Material e muito mais!"
            },
            {
                "id": 4,
                "title": "Guia de Carreira: Vue JS",
                "category": "FRONT END",
                "photo": "https://i.ytimg.com/vi/IbtSW-rJgjU/maxresdefault.jpg",
                "link": "https://youtu.be/IbtSW-rJgjU?si=cLl-Bbj6F0k8bN-y",
                "description": "Descubra tudo sobre Vue.js e inicie sua carreira no Front-End com o Tech Guide da Alura! Aprenda a dominar esse poderoso framework JavaScript e impulsione sua trajetória profissional. Neste episódio do Hipsters.Tube sobre o Tech Guide de VUE.JS da Alura, você vai aprender como começar sua carreira no Front-End. Explore nossos cursos abrangentes sobre HTML e CSS para construir uma base sólida. Além disso, mergulhe fundo no mundo do Vue.js, comparando-o com Angular e React. Descubra os segredos do Router, Composition API, Nuxt.js e Vite. Este vídeo é o guia completo para dominar o Vue.js e avançar em sua carreira de desenvolvedor Front-End."
            },
            {
                "id": 5,
                "title": "Guia de Carreira PHP",
                "category": "BACK END",
                "photo": "https://i.ytimg.com/vi/ETohL_o3SEI/maxresdefault.jpg",
                "link": "https://youtu.be/ETohL_o3SEI?si=0kLgPEUdgS9FZu3u",
                "description": "8º ep. da Temporada! Com o Guia de Carreira PHP, aprenda o que é e para que serve essa linguagem de programação e saiba o que ela faz desde o Back-End até o Front-End (com Desenvolvimento Web). Aqui você encontra uma trilha de estudos do INICIANTE ao AVANÇADO que conta com temáticas como: fundamentos do PHP, array, MySQL, try catch, cURL, if e else, Laravel, JSON, MVC, PDO, Bibliotecas e Frameworks, classes, React PHP, testes e muito mais! Para você que busca por um ROADMAP ou TUTORIAL e se pergunta 'o que é preciso para aprender PHP?' ou mesmo 'quanto tempo leva para aprender?', preparamos o Tech Guide, o seu GUIA de Carreira PHP, com Cursos, Formações, Artigos e muito conteúdo para você construir sua profissão em tecnologia."
            },
            {
                "id": 6,
                "title": "Guia de Carreira PYTHON",
                "category": "BACK END",
                "photo": "https://i.ytimg.com/vi/IQjd272BLnw/maxresdefault.jpg",
                "link": "https://youtu.be/IQjd272BLnw?si=JQAepco9PfQOFlqF",
                "description": "9º ep. da Temporada do #HipstersPontoTube | Para você que se pergunta 'o que é o #python e para que serve essa linguagem de programação?' ou mesmo 'o que se pode fazer com ela?'.Esse Guia de Carreira tratará dos tópicos de aprendizados essenciais na sua trajetória, desde o INICIANTE ao AVANÇADO, mostrando a potência dessa tecnologia tanto para o desenvolviemento de software, como para aplicações Web, automações e a Ciência de Dados.Aqui abordamos temas como: fundamentos, tipos de variáveis, listas, arrays, dicionários, tuplas, bibliotecas, coleções, estrutura de dados, terminal, django, flask, API Rest, bots, assíncrono, arquitetura de microsserviços, notebooks (Google Colab e Jupyter Notebook) e muito mais!"
            },
            {
                "id": 7,
                "title": "Guia de Carreira JAVA",
                "category": "BACK END",
                "photo": "https://i.ytimg.com/vi/TUBqH9zVs3M/maxresdefault.jpg",
                "link": "https://youtu.be/TUBqH9zVs3M?si=pNTG6QV8jT801mvJ",
                "description": "4º ep. da temporada! Com o Guia de Carreira Java, saiba o que é e para que serve o Java e descubra o passo a passo para sair do INICIANTE ao AVANÇADO. Desde os fundamentos e a Orientação a Objetos (POO), passando por testes, pacotes e coleções, até mergulhos mais profundos nessa linguagem de programação que você vai se interessar, como: Spring Framework e Spring Boot, velocidade de Compilação, JVM, Maven, Padrões de Projeto, SOLID, SQL, Kafka, Microsserviços, JUnit, Mock, Git, GitHub e muito mais! Sabemos da necessidade de ter um TUTORIAL para saber o que estudar para trabalhar com Java ou mesmo para saber como começar a programar em Java, por isso, fizemos o Tech Guide, o seu GUIA de CARREIRA JAVA, com direcionamentos como Cursos, Artigos e Formações, para você baixar, seguir seu próprio T e fazer sua Carreira em Tecnologia. Vem conferir!"
            },
            {
                "id": 8,
                "title": "Guia de Carreira NODE.JS",
                "category": "BACK END",
                "photo": "https://i.ytimg.com/vi/aKtpRRe-AEU/maxresdefault.jpg",
                "link": "https://youtu.be/aKtpRRe-AEU?si=Jgonjizciudp-h6_",
                "description": "6º ep. da Temporada! Com o Guia de Carreira Node.JS, aprenda o que é a NODE.JS e quais as vantagens do uso deste framework com a linguagem de programação JAVASCRIPT. Com uma trilha de estudos desde o INICIANTE ao AVANÇADO, veja o que é necessário para sua profissão nessa área de desenvolvimento de SOFTWARE com temáticas como: promises e callbacks, Express.JS, HTTP, APIs, ORM, banco de dados, SQL, TypeScript, Docker, arquitetura de microsserviços, Nest.JS, GraphQL, visão de negócio e produtos nos projetos da empresa, Git, GitHub e muito mais! Preparamos o Tech Guide, o seu Guia de Carreira NODE.JS, com Cursos, Formações, Artigos e muito conteúdo para você construir sua profissão Back End com JavaScript. Ideal para quem busca por um TUTORIAL ou ROADMAP com o intuito de saber o que é preciso para aprender Node ou tem a dúvida sobre quanto tempo demora para aprender essa tecnologia."
            },
            {
                "id": 9,
                "title": "Guia de Carreira: Inteligência Artificial (IA)",
                "category": "IAS GENERATIVAS",
                "photo": "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
                "link": "https://youtu.be/5QzXPjqQt7E?si=D4okCDp9gJ1VtkfD",
                "description": "No primeiro episódio da nova temporada do Hipsters.Tube, você vai explorar os bastidores da carreira em Inteligência Artificial, onde a Linguagem Python será sua ferramenta principal. Mergulhe fundo na Ciência de Dados, desvendando os segredos do Machine Learning e descubra como criar sua própria IA, impulsionado pela Matemática e Estatística. Nossa jornada também levará você pelo universo do Deep Learning, com enfoque em Redes Neurais, Visão Computacional e Processamento de Linguagem Natural (PLN). Vamos discutir a ética inerente à Inteligência Artificial e explorar sua aplicabilidade nos negócios e serviços. Além disso, desvende o papel vital do Hardware e Eletrônica nesse ecossistema. Esteja preparado para uma narrativa envolvente e insights valiosos do ChatGPT, enquanto desbravamos o vasto espectro da IA."
            },
            {
                "id": 10,
                "title": "Tutorial Google AI Studio: como usar o Gemini?",
                "category": "IAS GENERATIVAS",
                "photo": "https://i.ytimg.com/vi/UelauoeMaGw/maxresdefault.jpg",
                "link": "https://youtu.be/UelauoeMaGw?si=0DnxsIvcHyyU6io_",
                "description": "Boas-vindas a mais um episódio da Websérie IAs Generativas Neste vídeo, Fabrício Carraro vai te ensinar a utilizar o Google AI Studio e explorar as incríveis funcionalidades do Gemini com exemplos práticos e reais. Se você deseja interpretar imagens e vídeos, analisar documentos ou transcrever áudios com inteligência artificial, este tutorial é para você."
            },
            {
                "id": 11,
                "title": "TUTORIAL: Como usar o CLAUDE AI?",
                "category": "IAS GENERATIVAS",
                "photo": "https://i.ytimg.com/vi/Lrvi-7m3DNY/maxresdefault.jpg",
                "link": "https://youtu.be/Lrvi-7m3DNY?si=mR_QNpMicYFIacGe",
                "description": "Boas-vindas a mais um episódio da Websérie IAs Generativas Esse tutorial foi feito especialmente para quem quer aprender a usar a inteligência artificial da Claude AI da Anthropic. A Claude AI é um dos modelos de inteligência artificial generativa mais poderoso da atualidade. Inclusive, um dos seus grandes diferenciais é o uso de artefatos. Nesse vídeo, Fabrício Carraro te explica o passo a passo para usar o Claude AI e já começar a analisar dados de planilhas, gerar gráficos e uma página de blog através de prompts. Sinta-se à vontade para compartilhar suas perguntas e sugestões. Vamos adorar continuar esse papo nos comentários."
            },
            {
                "id": 12,
                "title": "Como usar o GitHub Copilot no VS Code?",
                "category": "IAS GENERATIVAS",
                "photo": "https://i.ytimg.com/vi/oC4sXvg0Ci8/maxresdefault.jpg",
                "link": "https://youtu.be/oC4sXvg0Ci8?si=cBPBY4nZz5axpelj",
                "description": "Em nosso vídeo, exploramos o incrível GitHub Copilot, mergulhando nos capítulos que abordam 'O que é GitHub Copilot' e 'Como funciona o GitHub Copilot'. Você descobrirá como essa IA revoluciona a programação, tornando-a mais eficiente e produtiva. Além disso, exploramos o GitHub Copilot LABS, as extensões do VS para o GitHub Copilot e como a inteligência artificial, incluindo o ChatGPT, pode aprimorar suas habilidades de desenvolvimento."
            }
        ]
    

export default cardsData;
