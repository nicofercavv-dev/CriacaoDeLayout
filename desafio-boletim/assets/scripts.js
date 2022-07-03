let Alunos = [];

const tirarMediaFinal = (nota1, nota2) => (nota1 + nota2) / 2;

function capitalizarPrimeiraLetraDeCadaNome(Obj) {
    let nomeParaCapitalizacao = Obj.nome.split(" ");

    for(let i = 0; i < nomeParaCapitalizacao.length; i++) {
        nomeParaCapitalizacao[i] = nomeParaCapitalizacao[i][0].toUpperCase() + nomeParaCapitalizacao[i].substr(1);
    }

    Obj.nome = nomeParaCapitalizacao.join(" ");

    return Obj;
}

function verificarAprovacao(Obj) {
    if(Obj.mediaFinal < 7 || Obj.frequencia < 75) {
        Obj.aprovado = false;
    } else {
        Obj.aprovado = true;
    }

    return Obj;
}

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

    NovoAluno = capitalizarPrimeiraLetraDeCadaNome(NovoAluno);
    NovoAluno = verificarAprovacao(NovoAluno);

    return NovoAluno;
}

function adicionarNovoAluno(array) {
    let NovoAluno;
    NovoAluno = registrarDadosAluno();
    array.push(NovoAluno);
}

function gerarTabela(array) {
    var body = document.getElementById('body');
    var tabela = document.createElement('table');
    var cabecalho = document.createElement('thead');
    var campoPrincipal = document.createElement('tbody');
    var titulos = document.createElement('tr');
    var ordemNumerica = document.createElement('th');
    ordemNumerica.innerHTML = "";
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

    body.appendChild(tabela);
    tabela.appendChild(cabecalho);
    cabecalho.appendChild(titulos);
    tabela.appendChild(campoPrincipal);
    titulos.appendChild(ordemNumerica);
    titulos.appendChild(tituloNome);
    titulos.appendChild(tituloNota1);
    titulos.appendChild(tituloNota2);
    titulos.appendChild(tituloNotaFinal);
    titulos.appendChild(tituloFrequencia);

    if(array.length > 0) {
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
    
            campoPrincipal.appendChild(novaLinha);
            novaLinha.appendChild(ordemNumericaNovoAluno);
            novaLinha.appendChild(nomeNovoAluno);
            novaLinha.appendChild(nota1NovoAluno);
            novaLinha.appendChild(nota2NovoAluno);
            novaLinha.appendChild(mediaNovoAluno);
            novaLinha.appendChild(frequenciaNovoAluno);
        }
    }
}

let op = "";

do {
    op = prompt("Sistema de notas\nDigite A para adicionar dados de um aluno e S para gerar a tabela").toUpperCase();

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