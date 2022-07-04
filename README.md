# Criação De Layout
Projetos do enunciado 3
## Sobre o desafio do Boletim
- Feito em JavaScript e HTML/CSS
- Armazenamento dos dados feito em uma array de objetos
- Para a capitalização da primeira letra dos nomes dos alunos foi criada uma função chamada capitalizarPrimeiraLetraDeCadaNome( )
  - Ela transforma a string do nome em uma array de strings com o método split(" ")
  - É realizada uma iteração nesta array e em cada índice é capitalizada a primeira letra da string
  - A array é unida formando uma única string novamente usando o método join(" ")
- Para a criação da tabela e adição de cores diferentes em caso de aluno aprovado ou reprovado foram utilizados métodos e propriedades de manipulação de DOM como:
  - getElementById
  - createElement
  - appendChild
  - innerHTML
  - classList.add
- A tabela foi gerada através da função gerarTabela que mostra um alerta se nenhum aluno tiver sido cadastrado
- Para a parte inicial do sistema foi utilizado um do-while que contém uma estrutura switch para chamada da função correspondente à ação desejada
