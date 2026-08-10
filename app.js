// ===============================
// PLANNER DA LUZIANA
// PARTE 1
// ===============================

let paginaAtual = "capa";

const tarefas = {

    segunda: [
        "Acordar",
        "Higiene pessoal",
        "Café da manhã",
        "Arrumar a cama",
        "Meditar na Palavra",
        "Treino",
        "Banho",
        "Trabalho",
        "Jantar",
        "Tempo livre"
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
        tarefas[dia] = JSON.parse(tarefasSalvas);
    }

    let html = "";

    tarefas[dia].forEach((tarefa, index)=>{

    html += `
    <div class="task">

    <label>
        <input type="checkbox">
        <span>${tarefa}</span>
    </label>

    <button class="edit-task" data-index="${index}">
        ✏️
    </button>

    <button class="delete-task" data-index="${index}">
        🗑️
    </button>

</div>

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
        <div class="planner">

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

    const novaTarefa = prompt("Digite a nova tarefa:");

    if(!novaTarefa || !novaTarefa.trim()){
        return;
    }

    tarefas[paginaAtual].push(novaTarefa.trim());

    localStorage.setItem(
        "tarefas_" + paginaAtual,
        JSON.stringify(tarefas[paginaAtual])
    );

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
