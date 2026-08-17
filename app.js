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

    terca: [],

    quarta: [],

    quinta: [],

    sexta: [],

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
            <img src="assets/cover.png" alt="Capa do Planner">
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
        <div class="planner">
            <h2>🌷 Terça-feira</h2>
            <p>Em breve...</p>
        </div>
    `,

    quarta: `
        <div class="planner">
            <h2>🌷 Quarta-feira</h2>
            <p>Em breve...</p>
        </div>
    `,

    quinta: `
        <div class="planner">
            <h2>🌷 Quinta-feira</h2>
            <p>Em breve...</p>
        </div>
    `,

    sexta: `
        <div class="planner">
            <h2>🌷 Sexta-feira</h2>
            <p>Em breve...</p>
        </div>
    `,

    historico: `
        <div class="planner">
            <h2>📚 Histórico</h2>
            <p>Em breve...</p>
        </div>
    `

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
// ===============================
// DESLIZAR PARA TROCAR DE DIA
// ===============================

const diasNavegacao = [
    "capa",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "historico"
];

let inicioX = 0;
let inicioY = 0;

document.addEventListener("touchstart", function(e){

    if(e.touches.length !== 1){
        return;
    }

    inicioX = e.touches[0].clientX;
    inicioY = e.touches[0].clientY;

}, { passive: true });


document.addEventListener("touchend", function(e){

    if(e.changedTouches.length !== 1){
        return;
    }

    const fimX = e.changedTouches[0].clientX;
    const fimY = e.changedTouches[0].clientY;

    const distanciaX = fimX - inicioX;
    const distanciaY = fimY - inicioY;

    // Movimento pequeno: ignora
    if(Math.abs(distanciaX) < 60){
        return;
    }

    // Movimento vertical: deixa a página rolar
    if(Math.abs(distanciaY) >= Math.abs(distanciaX)){
        return;
    }

    const indiceAtual = diasNavegacao.indexOf(paginaAtual);

    if(indiceAtual === -1){
        return;
    }

    // Deslizou para a esquerda
    if(distanciaX < 0){

        const proximoIndice = indiceAtual + 1;

        if(proximoIndice < diasNavegacao.length){

            abrirPagina(
                diasNavegacao[proximoIndice]
            );

        }

        return;
    }

    // Deslizou para a direita
    if(distanciaX > 0){

        const indiceAnterior = indiceAtual - 1;

        if(indiceAnterior >= 0){

            abrirPagina(
                diasNavegacao[indiceAnterior]
            );

        }

    }

}, { passive: true });
