//Variável de armazenamento dos dados dos alunos
let Alunos = [];

//Arrow function para cálculo da média final
const tirarMediaFinal = (nota1, nota2) => (nota1 + nota2) / 2;

//Função de capitalização da primeira letra dos nomes dos alunos
function capitalizarPrimeiraLetraDeCadaNome(Obj) {
    let nomeParaCapitalizacao = Obj.nome.split(" ");

    for(let i = 0; i < nomeParaCapitalizacao.length; i++) {
        nomeParaCapitalizacao[i] = nomeParaCapitalizacao[i][0].toUpperCase() + nomeParaCapitalizacao[i].substr(1);
    }

    Obj.nome = nomeParaCapitalizacao.join(" ");

    return Obj;
}

//Função que verifica a aprovação através das propriedades mediaFinal e frequencia do objeto que foi passado como parâmetro e adiciona o resultado na propriedade aprovado, ao final o objeto é retornado
function verificarAprovacao(Obj) {
    if(Obj.mediaFinal < 7 || Obj.frequencia < 75) {
        Obj.aprovado = false;
    } else {
        Obj.aprovado = true;
    }

    return Obj;
}

//Função que obtém os dados do aluno, armazena no objeto NovoAluno e o retorna
function registrarDadosAluno() {
    let NovoAluno = {
        numero: 0,
        nome: "",
        notaPrimeiroSemestre: 0,
        notaSegundoSemestre: 0,
        mediaFinal: 0,
        frequencia: 0,
        aprovado: true
    };

    NovoAluno.numero = Alunos.length + 1;
    NovoAluno.nome = prompt("Nome completo do aluno:");
    NovoAluno.nome = NovoAluno.nome.toLowerCase();
    NovoAluno.notaPrimeiroSemestre = parseFloat(prompt("Nota do primeiro semestre:"));
    NovoAluno.notaSegundoSemestre = parseFloat(prompt("Nota do segundo semestre:"));
    NovoAluno.mediaFinal = tirarMediaFinal(NovoAluno.notaPrimeiroSemestre, NovoAluno.notaSegundoSemestre);
    NovoAluno.frequencia = parseFloat(prompt("Frequência em porcentagem(sem o %):"));

    return NovoAluno;
}

//Função que adiciona um novo aluno no "sistema"
function adicionarNovoAluno(array) {
    let NovoAluno;
    NovoAluno = registrarDadosAluno();
    NovoAluno = capitalizarPrimeiraLetraDeCadaNome(NovoAluno);
    NovoAluno = verificarAprovacao(NovoAluno);
    array.push(NovoAluno);
}

//Função que gera a tabela com os dados armazenados no objeto Alunos
function gerarTabela(array) {

    if(array.length > 0) {

        var body = document.getElementById('body');
        var tabela = document.createElement('table');
        var titulo = document.createElement('caption');
        titulo.innerHTML = "Boletim";
        var cabecalho = document.createElement('thead');
        var campoPrincipal = document.createElement('tbody');
        var titulos = document.createElement('tr');
        var ordemNumerica = document.createElement('th');
        ordemNumerica.innerHTML = "";
        ordemNumerica.classList.add('vazio');
        var tituloNome = document.createElement('th');
        tituloNome.innerHTML = "Nome";
        var tituloNota1 = document.createElement('th');
        tituloNota1.innerHTML = "1° Semestre";
        var tituloNota2 = document.createElement('th');
        tituloNota2.innerHTML = "2° Semestre";
        var tituloNotaFinal = document.createElement('th');
        tituloNotaFinal.innerHTML = "Nota Final";
        var tituloFrequencia = document.createElement('th');
        tituloFrequencia.innerHTML = "Frequência";
        var rodape = document.createElement('footer');
        var p = document.createElement('p');
        p.innerHTML = "Criado por Nicole Ferreira";

        body.appendChild(tabela);
        tabela.appendChild(titulo);
        tabela.appendChild(cabecalho);
        cabecalho.appendChild(titulos);
        tabela.appendChild(campoPrincipal);
        titulos.appendChild(ordemNumerica);
        titulos.appendChild(tituloNome);
        titulos.appendChild(tituloNota1);
        titulos.appendChild(tituloNota2);
        titulos.appendChild(tituloNotaFinal);
        titulos.appendChild(tituloFrequencia);
        body.appendChild(rodape);
        rodape.appendChild(p);

        for(let i = 0; i < array.length; i++) {

            var novaLinha = document.createElement('tr');
            var ordemNumericaNovoAluno = document.createElement('td');
            ordemNumericaNovoAluno.innerHTML = array[i].numero;;
            var nomeNovoAluno = document.createElement('td');
            nomeNovoAluno.innerHTML = array[i].nome;
            var nota1NovoAluno = document.createElement('td');
            nota1NovoAluno.innerHTML = array[i].notaPrimeiroSemestre.toFixed(2);
            var nota2NovoAluno = document.createElement('td');
            nota2NovoAluno.innerHTML = array[i].notaSegundoSemestre.toFixed(2);
            var mediaNovoAluno = document.createElement('td');
            mediaNovoAluno.innerHTML = array[i].mediaFinal.toFixed(2);
            var frequenciaNovoAluno = document.createElement('td');
            frequenciaNovoAluno.innerHTML = array[i].frequencia + "%";

            if(array[i].aprovado == false) {
                novaLinha.classList.add('reprovado');
            } else {
                novaLinha.classList.add('aprovado');
            }
    
            campoPrincipal.appendChild(novaLinha);
            novaLinha.appendChild(ordemNumericaNovoAluno);
            novaLinha.appendChild(nomeNovoAluno);
            novaLinha.appendChild(nota1NovoAluno);
            novaLinha.appendChild(nota2NovoAluno);
            novaLinha.appendChild(mediaNovoAluno);
            novaLinha.appendChild(frequenciaNovoAluno);
        }
    } else {
        return alert("Não há alunos cadastrados!");
    }
}

//"Tela inicial" do sistema onde se escolhe a ação a ser feita
let op = "";

do {
    op = prompt("Sistema de notas\nDigite A para adicionar dados de um aluno e S para gerar o boletim").toUpperCase();

    switch(op) {
        case "A":
            adicionarNovoAluno(Alunos);
            break;
        case "S":
            gerarTabela(Alunos);
            console.log(Alunos);
            break;
        default:
            alert("Comando inválido!");
    }

}while(op !== "S");