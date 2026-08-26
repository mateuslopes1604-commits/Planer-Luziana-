// ===============================
// PLANNER DA LUZIANA
// PARTE 1
// ===============================

let paginaAtual = "capa";

const tarefas = {

    segunda: [
    {
        horario: "10:00",
        nome: "Acordar"
    },
    {
        horario: "10:00 – 10:20",
        nome: "Higiene pessoal"
    },
    {
        horario: "10:20 – 10:50",
        nome: "☕ Café da manhã"
    },
    {
        horario: "10:50 – 11:10",
        nome: "🛏️ Arrumar a cama e organizar o quarto"
    },
    {
        horario: "11:10 – 13:00",
        nome: "🍽️ Ajudar a preparar o almoço e almoçar"
    },
    {
        horario: "13:00 – 13:30",
        nome: "🙏 Meditar na Palavra"
    },
    {
        horario: "13:30 – 14:00",
        nome: "🧹 Varrer a casa"
    },
    {
        horario: "14:00 – 15:00",
        nome: "💪 Treino"
    },
    {
        horario: "15:00 – 15:30",
        nome: "🚿 Banho"
    },
    {
        horario: "15:30 – 19:00",
        nome: "💼 Trabalho"
    },
    {
        horario: "19:00 – 20:00",
        nome: "🍽️ Jantar"
    },
    {
        horario: "20:00 – 21:30",
        nome: "💼 Trabalhar mais um pouquinho"
    },
    {
        horario: "21:30 em diante",
        nome: "📖 Tempo livre, lazer ou leitura"
    },
    {
        horario: "00:00",
        nome: "😴 Dormir"
    }
],

    terca: [
    {
        horario: "10:00",
        nome: "Acordar"
    },
    {
        horario: "10:00 – 10:20",
        nome: "Higiene pessoal"
    },
    {
        horario: "10:20 – 10:50",
        nome: "☕ Café da manhã"
    },
    {
        horario: "10:50 – 11:10",
        nome: "🛏️ Arrumar a cama e organizar o quarto"
    },
    {
        horario: "11:10 – 13:00",
        nome: "🍽️ Ajudar a preparar o almoço e almoçar"
    },
    {
        horario: "13:00 – 13:30",
        nome: "🙏 Meditar na Palavra"
    },
    {
        horario: "13:30 – 14:00",
        nome: "👕 Colocar roupa para lavar"
    },
    {
        horario: "14:00 – 15:00",
        nome: "💪 Treino"
    },
    {
        horario: "15:00 – 15:30",
        nome: "🚿 Banho"
    },
    {
        horario: "15:30 – 16:00",
        nome: "🧺 Estender a roupa no varal (ou colocar na secadora, se necessário)"
    },
    {
        horario: "16:00 – 19:00",
        nome: "💼 Trabalho"
    },
    {
        horario: "19:00 – 20:00",
        nome: "🍽️ Jantar"
    },
    {
        horario: "20:00 – 21:30",
        nome: "💼 Trabalhar mais um pouquinho"
    },
    {
        horario: "21:30 em diante",
        nome: "🌙 Tempo livre, lazer ou leitura"
    },
    {
        horario: "00:00",
        nome: "😴 Dormir"
    }
],

    quarta: [
    {
        horario: "10:00",
        nome: "Acordar"
    },
    {
        horario: "10:00 – 10:20",
        nome: "Higiene pessoal"
    },
    {
        horario: "10:20 – 10:50",
        nome: "☕ Café da manhã"
    },
    {
        horario: "10:50 – 11:10",
        nome: "🛏️ Arrumar a cama e organizar o quarto"
    },
    {
        horario: "11:10 – 13:00",
        nome: "🍽️ Ajudar a preparar o almoço e almoçar"
    },
    {
        horario: "13:00 – 13:30",
        nome: "🙏 Meditar na Palavra"
    },
    {
        horario: "13:30 – 14:00",
        nome: "👕 Dobrar e guardar as roupas"
    },
    {
        horario: "14:00 – 14:20",
        nome: "🧴 Limpar a estante"
    },
    {
        horario: "14:20 – 14:40",
        nome: "🍽️ Arrumar a mesa"
    },
    {
        horario: "14:40 – 15:40",
        nome: "💪 Treino"
    },
    {
        horario: "15:40 – 16:00",
        nome: "🚿 Banho"
    },
    {
        horario: "16:00 – 19:00",
        nome: "💼 Trabalho"
    },
    {
        horario: "19:00 – 20:00",
        nome: "🍽️ Jantar"
    },
    {
        horario: "20:00 – 21:30",
        nome: "💼 Trabalhar mais um pouquinho"
    },
    {
        horario: "21:30 em diante",
        nome: "🌙 Tempo livre, lazer ou leitura"
    },
    {
        horario: "00:00",
        nome: "😴 Dormir"
    }
],

    quinta: [
    {
        horario: "10:00",
        nome: "Acordar"
    },
    {
        horario: "10:00 – 10:20",
        nome: "Higiene pessoal"
    },
    {
        horario: "10:20 – 10:50",
        nome: "☕ Café da manhã"
    },
    {
        horario: "10:50 – 11:10",
        nome: "🛏️ Arrumar a cama e organizar o quarto"
    },
    {
        horario: "11:10 – 13:00",
        nome: "🍽️ Ajudar a preparar o almoço e almoçar"
    },
    {
        horario: "13:00 – 13:30",
        nome: "🙏 Meditar na Palavra"
    },
    {
        horario: "13:30 – 14:00",
        nome: "🍳 Organizar as panelas no armário"
    },
    {
        horario: "14:00 – 15:00",
        nome: "💪 Treino"
    },
    {
        horario: "15:00 – 15:30",
        nome: "🚿 Banho e lavar o cabelo"
    },
    {
        horario: "15:30 – 16:15",
        nome: "💅 Fazer as unhas"
    },
    {
        horario: "16:15 – 19:00",
        nome: "💼 Trabalho"
    },
    {
        horario: "19:00 – 20:00",
        nome: "🍽️ Jantar"
    },
    {
        horario: "20:00 – 21:30",
        nome: "💼 Trabalhar mais um pouquinho"
    },
    {
        horario: "21:30 em diante",
        nome: "🌙 Tempo livre, lazer ou leitura"
    },
    {
        horario: "00:00",
        nome: "😴 Dormir"
    }
],

   sexta: [
    {
        horario: "10:00",
        nome: "Acordar"
    },
    {
        horario: "10:00 – 10:20",
        nome: "Higiene pessoal"
    },
    {
        horario: "10:20 – 10:50",
        nome: "☕ Café da manhã"
    },
    {
        horario: "10:50 – 11:10",
        nome: "🛏️ Arrumar a cama e organizar o quarto"
    },
    {
        horario: "11:10 – 13:00",
        nome: "🍽️ Ajudar a preparar o almoço e almoçar"
    },
    {
        horario: "13:00 – 13:30",
        nome: "🙏 Meditar na Palavra"
    },
    {
        horario: "13:30 – 14:15",
        nome: "🧹 Limpeza geral da casa — Varrer (se necessário), passar pano e organizar os ambientes"
    },
    {
        horario: "14:15 – 14:45",
        nome: "💄 Organizar o cantinho de autocuidado — Perfumes, cremes, joias e acessórios, maquiagens (se necessário)"
    },
    {
        horario: "14:45 – 15:00",
        nome: "☕ Pausa para um café"
    },
    {
        horario: "15:00 – 19:00",
        nome: "💼 Trabalho"
    },
    {
        horario: "19:00 – 20:00",
        nome: "🍽️ Jantar"
    },
    {
        horario: "20:00 – 21:30",
        nome: "💼 Trabalhar mais um pouquinho"
    },
    {
        horario: "21:30 em diante",
        nome: "🌙 Tempo livre, lazer ou um filme"
    },
    {
        horario: "00:00",
        nome: "😴 Dormir"
    }
],

    historico: []

};

function criarListaTarefas(dia){

    if(!tarefas[dia]) return "";

    const tarefasSalvas = localStorage.getItem("tarefas_" + dia);

if(tarefasSalvas){

    const dadosSalvos = JSON.parse(tarefasSalvas);

    // Se ainda estiver usando o formato antigo,
    // substitui pela nova rotina padrão
    if(dadosSalvos.length > 0 && typeof dadosSalvos[0] === "string"){

        localStorage.removeItem("tarefas_" + dia);

        if(dia === "segunda"){
            localStorage.removeItem("segunda");
        }

    }else{

        tarefas[dia] = dadosSalvos;

    }

}

    let html = "";

    tarefas[dia].forEach((tarefa, index)=>{

        html += `
        <div class="task">

            <label>
                <input type="checkbox">
                <span>
    <strong>${tarefa.horario || ""}</strong>
    ${tarefa.nome || tarefa}
</span>           
</label>

            <button class="edit-task" data-index="${index}">
                ✏️
            </button>

            <button class="delete-task" data-index="${index}">
                🗑️
            </button>

        </div>
        `;

    });

    return html;

}
// ===============================
// PARTE 2
// PÁGINAS
// ===============================

const paginas = {

    capa: `
        <div class="cover">
            <img src="assets/capa-versao-nova.png" alt="Capa do Planner">
        </div>
    `,

    segunda: `
        <div class="planner planner-segunda">

            <h2>🌷 Segunda-feira</h2>

            <div class="percent">
                0% concluído
            </div>

            <div class="progress">
                <div class="progress-bar"></div>
            </div>

            ${criarListaTarefas("segunda")}

        </div>
    `,

    terca: `
    <div class="planner planner-terca">

        <h2>🌷 Terça-feira</h2>

        <div class="percent">
            0% concluído
        </div>

        <div class="progress">
            <div class="progress-bar"></div>
        </div>

        ${criarListaTarefas("terca")}

    </div>
`,

    quarta: `
    <div class="planner planner-quarta">

        <h2>🌷 Quarta-feira</h2>

        <div class="percent">
            0% concluído
        </div>

        <div class="progress">
            <div class="progress-bar"></div>
        </div>

        ${criarListaTarefas("quarta")}

    </div>
`,
quinta: `
    <div class="planner planner-quinta">

        <h2>🌷 Quinta-feira</h2>

        <div class="percent">
            0% concluído
        </div>

        <div class="progress">
            <div class="progress-bar"></div>
        </div>

        ${criarListaTarefas("quinta")}

    </div>
`,
    sexta: `
<div class="planner planner-sexta">
        <h2>🌷 Sexta-feira</h2>

        <div class="percent">
            0% concluído
        </div>

        <div class="progress">
            <div class="progress-bar"></div>
        </div>

        ${criarListaTarefas("sexta")}

    </div>
`,

    historico: `
    <div class="planner planner-historico">

        <h2>📚 Histórico</h2>

        <div class="historico-card">

            <h3>🌸 Semana atual</h3>

            <div class="historico-periodo" id="periodoSemana">
                Calculando semana...
            </div>

            <div class="historico-resumo">

                <div class="historico-item">
                    <span>📋</span>
                    <strong id="totalTarefasSemana">0</strong>
                    <small>Tarefas</small>
                </div>

                <div class="historico-item">
                    <span>✅</span>
                    <strong id="tarefasConcluidasSemana">0</strong>
                    <small>Concluídas</small>
                </div>

                <div class="historico-item">
                    <span>📊</span>
                    <strong id="porcentagemSemana">0%</strong>
                    <small>Progresso</small>
                </div>

            </div>

            <div class="historico-progresso">
                <div class="historico-progresso-bar">
                    <div id="historicoProgressoBar"></div>
                </div>
            </div>

            <div class="historico-status">
                <span>📝 Semana em andamento</span>
            </div>

            <button
                class="btn-finalizar-semana"
                onclick="prepararFinalizacaoSemana()">
                ✅ Finalizar semana
            </button>

        </div>

    </div>
`,

};

const app = document.getElementById("app");
// ===============================
// PARTE 3
// FUNÇÕES
// ===============================

function atualizarProgresso(){

    const checks = document.querySelectorAll(".task input");

    if(checks.length===0) return;

    const marcados = document.querySelectorAll(".task input:checked");

    const porcentagem = Math.round((marcados.length/checks.length)*100);

    const barra = document.querySelector(".progress-bar");
    const texto = document.querySelector(".percent");

    if(barra){
        barra.style.width = porcentagem + "%";
    }

    if(texto){
        texto.textContent = porcentagem + "% concluído";
    }

}

function restaurarEstado(){

    const dados = JSON.parse(localStorage.getItem(paginaAtual));

    if(!dados) return;

    const checks = document.querySelectorAll(".task input");

    checks.forEach((check,index)=>{

        check.checked = dados[index] || false;

    });

    atualizarProgresso();

}

function abrirPagina(nome){

    paginaAtual = nome;

    app.innerHTML = paginas[nome];
    
    const addTaskBtn = document.getElementById("addTaskBtn");

if(nome === "capa" || nome === "historico"){
    addTaskBtn.style.display = "none";
}else{
    addTaskBtn.style.display = "block";
}

    document.querySelectorAll(".day").forEach(botao=>{

        botao.classList.remove("active");

    });

    const ativo = document.querySelector(`[data-day="${nome}"]`);

    if(ativo){

        ativo.classList.add("active");

    }

    restaurarEstado();

}
// ===============================
// PARTE 4
// EVENTOS E INICIALIZAÇÃO
// ===============================

document.querySelectorAll(".day").forEach(botao=>{

    botao.addEventListener("click",()=>{

        abrirPagina(botao.dataset.day);

    });

});

document.addEventListener("change",function(e){

    if(e.target.type!=="checkbox") return;

    atualizarProgresso();

    const checks=document.querySelectorAll(".task input");

    const estado=Array.from(checks).map(check=>check.checked);

    localStorage.setItem(paginaAtual,JSON.stringify(estado));

});

abrirPagina("capa");

console.log("Planner carregado com sucesso.");

// ===============================
// ADICIONAR TAREFA
// ===============================

const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", function(){

    if(paginaAtual === "capa" || paginaAtual === "historico"){
        return;
    }

    // Pergunta o horário
    const horario = prompt(
        "Digite o horário da tarefa:\n\nExemplo: 14:00 – 15:00"
    );

    if(horario === null || !horario.trim()){
        return;
    }

    // Pergunta o nome da tarefa
    const nome = prompt(
        "Digite a tarefa:"
    );

    if(nome === null || !nome.trim()){
        return;
    }

    // Garante que a lista do dia existe
    if(!tarefas[paginaAtual]){
        tarefas[paginaAtual] = [];
    }

    // Adiciona a nova tarefa
    tarefas[paginaAtual].push({
        horario: horario.trim(),
        nome: nome.trim()
    });

    // Salva a nova lista
    localStorage.setItem(
        "tarefas_" + paginaAtual,
        JSON.stringify(tarefas[paginaAtual])
    );

    // Atualiza a tela imediatamente
    abrirPagina(paginaAtual);

});

// ===============================
// EXCLUIR TAREFA
// ===============================

document.addEventListener("click", function(e){

    if(!e.target.classList.contains("delete-task")){
        return;
    }

    const index = Number(e.target.dataset.index);

    const confirmar = confirm("Deseja excluir esta tarefa?");

    if(!confirmar){
        return;
    }

    // Recupera as marcações atuais
    const estadoSalvo = JSON.parse(
        localStorage.getItem(paginaAtual) || "[]"
    );

    // Remove a tarefa
    tarefas[paginaAtual].splice(index, 1);

    // Remove também a marcação correspondente
    estadoSalvo.splice(index, 1);

    // Salva novamente a lista de tarefas
    localStorage.setItem(
        "tarefas_" + paginaAtual,
        JSON.stringify(tarefas[paginaAtual])
    );

    // Salva novamente as marcações
    localStorage.setItem(
        paginaAtual,
        JSON.stringify(estadoSalvo)
    );

    // Recarrega a página mantendo tudo
    abrirPagina(paginaAtual);

});

// ===============================
// EDITAR TAREFA
// ===============================

document.addEventListener("click", function(e){

    const botaoEditar = e.target.closest(".edit-task");

    if(!botaoEditar){
        return;
    }

    const index = Number(botaoEditar.dataset.index);

    const tarefaAtual = tarefas[paginaAtual][index];

    // Compatibilidade com tarefas antigas
    const horarioAtual = tarefaAtual.horario || "";
    const nomeAtual = tarefaAtual.nome || tarefaAtual;

    // Editar horário
    const novoHorario = prompt(
        "Editar horário:",
        horarioAtual
    );

    if(novoHorario === null){
        return;
    }

    if(!novoHorario.trim()){
        return;
    }

    // Editar tarefa
    const novoNome = prompt(
        "Editar tarefa:",
        nomeAtual
    );

    if(novoNome === null){
        return;
    }

    if(!novoNome.trim()){
        return;
    }

    // Mantém a tarefa no mesmo lugar
    tarefas[paginaAtual][index] = {
        horario: novoHorario.trim(),
        nome: novoNome.trim()
    };

    // Salva a alteração
    localStorage.setItem(
        "tarefas_" + paginaAtual,
        JSON.stringify(tarefas[paginaAtual])
    );

    // Atualiza a tela
    abrirPagina(paginaAtual);

});
// ============================================
// HISTÓRICO — CÁLCULO DA SEMANA ATUAL
// ============================================

function formatarDataHistorico(data) {
    return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

function obterSemanaAtual() {

    const hoje = new Date();

    // Domingo = 0
    // Segunda = 1
    const diaSemana = hoje.getDay();

    // Calcula quantos dias voltamos até segunda-feira
    const distanciaSegunda = diaSemana === 0 ? 6 : diaSemana - 1;

    const segunda = new Date(hoje);
    segunda.setHours(0, 0, 0, 0);
    segunda.setDate(hoje.getDate() - distanciaSegunda);

    const sexta = new Date(segunda);
    sexta.setDate(segunda.getDate() + 4);

    return {
        segunda,
        sexta
    };
}

function obterDadosDoDiaHistorico(dia) {

    // Primeiro tenta pegar uma lista de tarefas
    // que tenha sido adicionada/editada pelo usuário
    const tarefasSalvas = localStorage.getItem("tarefas_" + dia);

    let listaTarefas;

    if (tarefasSalvas) {

        try {
            listaTarefas = JSON.parse(tarefasSalvas);
        } catch (erro) {
            listaTarefas = tarefas[dia] || [];
        }

    } else {

        listaTarefas = tarefas[dia] || [];

    }

    // Recupera as marcações daquele dia
    const estadoSalvo = localStorage.getItem(dia);

    let estado = [];

    if (estadoSalvo) {

        try {
            estado = JSON.parse(estadoSalvo);
        } catch (erro) {
            estado = [];
        }

    }

    return {
        total: listaTarefas.length,
        concluidas: estado.filter(Boolean).length
    };
}

function atualizarHistorico() {

    // Verifica se estamos realmente na tela do histórico
    const periodo = document.getElementById("periodoSemana");

    if (!periodo) {
        return;
    }

    const semana = obterSemanaAtual();

    // Mostra o período da semana
    periodo.textContent =
        "Semana de " +
        formatarDataHistorico(semana.segunda) +
        " a " +
        formatarDataHistorico(semana.sexta);

    const dias = [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ];

    let totalTarefas = 0;
    let tarefasConcluidas = 0;

    // Soma os cinco dias
    dias.forEach(function(dia) {

        const dados = obterDadosDoDiaHistorico(dia);

        totalTarefas += dados.total;
        tarefasConcluidas += dados.concluidas;

    });

    // Calcula porcentagem
    let porcentagem = 0;

    if (totalTarefas > 0) {

        porcentagem = Math.round(
            (tarefasConcluidas / totalTarefas) * 100
        );

    }

    // Atualiza os números
    const totalElemento =
        document.getElementById("totalTarefasSemana");

    const concluidasElemento =
        document.getElementById("tarefasConcluidasSemana");

    const porcentagemElemento =
        document.getElementById("porcentagemSemana");

    const barra =
        document.getElementById("historicoProgressoBar");

    if (totalElemento) {
        totalElemento.textContent = totalTarefas;
    }

    if (concluidasElemento) {
        concluidasElemento.textContent = tarefasConcluidas;
    }

    if (porcentagemElemento) {
        porcentagemElemento.textContent = porcentagem + "%";
    }

    if (barra) {
        barra.style.width = porcentagem + "%";
    }

    // Atualiza o status
    const status =
        document.querySelector(".historico-status");

    if (status) {

        if (porcentagem === 100 && totalTarefas > 0) {

            status.innerHTML =
                "🎉 Semana concluída! Todas as tarefas foram realizadas.";

        } else {

            status.innerHTML =
                "📝 Semana em andamento";

        }

    }

    console.log(
        "Histórico atualizado:",
        totalTarefas,
        "tarefas;",
        tarefasConcluidas,
        "concluídas;",
        porcentagem + "%"
    );
}


// ============================================
// ATUALIZA O HISTÓRICO AO ABRIR A PÁGINA
// ============================================

document.addEventListener("click", function(e) {

    const botao = e.target.closest(".day");

    if (!botao) {
        return;
    }

    if (botao.dataset.day !== "historico") {
        return;
    }

    // Espera a tela ser criada pelo abrirPagina()
    setTimeout(function() {
        atualizarHistorico();
    }, 50);

});


// Também atualiza caso o histórico já esteja aberto
setTimeout(function() {

    if (paginaAtual === "historico") {
        atualizarHistorico();
    }

}, 100);
