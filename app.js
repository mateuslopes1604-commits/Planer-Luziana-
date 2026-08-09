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

    let html = "";

    tarefas[dia].forEach((tarefa)=>{

        html += `
        <div class="task">
            <label>
                <input type="checkbox">
                <span>${tarefa}</span>
            </label>
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
// BOTÃO ADICIONAR TAREFA
// ===============================

const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", function(){

    const novaTarefa = prompt("Digite a nova tarefa:");

    if(!novaTarefa) return;

    alert("Tarefa adicionada: " + novaTarefa);

});
