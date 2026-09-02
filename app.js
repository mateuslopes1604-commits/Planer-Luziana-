// ===============================
// PLANNER DA LUZIANA
// APP.JS — VERSÃO LIMPA E CORRIGIDA
// ===============================

let paginaAtual = "capa";

const tarefas = {
    segunda: [
        { horario: "10:00", nome: "Acordar" },
        { horario: "10:00 – 10:20", nome: "Higiene pessoal" },
        { horario: "10:20 – 10:50", nome: "☕ Café da manhã" },
        { horario: "10:50 – 11:10", nome: "🛏️ Arrumar a cama e organizar o quarto" },
        { horario: "11:10 – 13:00", nome: "🍽️ Ajudar a preparar o almoço e almoçar" },
        { horario: "13:00 – 13:30", nome: "🙏 Meditar na Palavra" },
        { horario: "13:30 – 14:00", nome: "🧹 Varrer a casa" },
        { horario: "14:00 – 15:00", nome: "💪 Treino" },
        { horario: "15:00 – 15:30", nome: "🚿 Banho" },
        { horario: "15:30 – 19:00", nome: "💼 Trabalho" },
        { horario: "19:00 – 20:00", nome: "🍽️ Jantar" },
        { horario: "20:00 – 21:30", nome: "💼 Trabalhar mais um pouquinho" },
        { horario: "21:30 em diante", nome: "📖 Tempo livre, lazer ou leitura" },
        { horario: "00:00", nome: "😴 Dormir" }
    ],

    terca: [
        { horario: "10:00", nome: "Acordar" },
        { horario: "10:00 – 10:20", nome: "Higiene pessoal" },
        { horario: "10:20 – 10:50", nome: "☕ Café da manhã" },
        { horario: "10:50 – 11:10", nome: "🛏️ Arrumar a cama e organizar o quarto" },
        { horario: "11:10 – 13:00", nome: "🍽️ Ajudar a preparar o almoço e almoçar" },
        { horario: "13:00 – 13:30", nome: "🙏 Meditar na Palavra" },
        { horario: "13:30 – 14:00", nome: "👕 Colocar roupa para lavar" },
        { horario: "14:00 – 15:00", nome: "💪 Treino" },
        { horario: "15:00 – 15:30", nome: "🚿 Banho" },
        { horario: "15:30 – 16:00", nome: "🧺 Estender a roupa no varal (ou colocar na secadora, se necessário)" },
        { horario: "16:00 – 19:00", nome: "💼 Trabalho" },
        { horario: "19:00 – 20:00", nome: "🍽️ Jantar" },
        { horario: "20:00 – 21:30", nome: "💼 Trabalhar mais um pouquinho" },
        { horario: "21:30 em diante", nome: "🌙 Tempo livre, lazer ou leitura" },
        { horario: "00:00", nome: "😴 Dormir" }
    ],

    quarta: [
        { horario: "10:00", nome: "Acordar" },
        { horario: "10:00 – 10:20", nome: "Higiene pessoal" },
        { horario: "10:20 – 10:50", nome: "☕ Café da manhã" },
        { horario: "10:50 – 11:10", nome: "🛏️ Arrumar a cama e organizar o quarto" },
        { horario: "11:10 – 13:00", nome: "🍽️ Ajudar a preparar o almoço e almoçar" },
        { horario: "13:00 – 13:30", nome: "🙏 Meditar na Palavra" },
        { horario: "13:30 – 14:00", nome: "👕 Dobrar e guardar as roupas" },
        { horario: "14:00 – 14:20", nome: "🧴 Limpar a estante" },
        { horario: "14:20 – 14:40", nome: "🍽️ Arrumar a mesa" },
        { horario: "14:40 – 15:40", nome: "💪 Treino" },
        { horario: "15:40 – 16:00", nome: "🚿 Banho" },
        { horario: "16:00 – 19:00", nome: "💼 Trabalho" },
        { horario: "19:00 – 20:00", nome: "🍽️ Jantar" },
        { horario: "20:00 – 21:30", nome: "💼 Trabalhar mais um pouquinho" },
        { horario: "21:30 em diante", nome: "🌙 Tempo livre, lazer ou leitura" },
        { horario: "00:00", nome: "😴 Dormir" }
    ],

    quinta: [
        { horario: "10:00", nome: "Acordar" },
        { horario: "10:00 – 10:20", nome: "Higiene pessoal" },
        { horario: "10:20 – 10:50", nome: "☕ Café da manhã" },
        { horario: "10:50 – 11:10", nome: "🛏️ Arrumar a cama e organizar o quarto" },
        { horario: "11:10 – 13:00", nome: "🍽️ Ajudar a preparar o almoço e almoçar" },
        { horario: "13:00 – 13:30", nome: "🙏 Meditar na Palavra" },
        { horario: "13:30 – 14:00", nome: "🍳 Organizar as panelas no armário" },
        { horario: "14:00 – 15:00", nome: "💪 Treino" },
        { horario: "15:00 – 15:30", nome: "🚿 Banho e lavar o cabelo" },
        { horario: "15:30 – 16:15", nome: "💅 Fazer as unhas" },
        { horario: "16:15 – 19:00", nome: "💼 Trabalho" },
        { horario: "19:00 – 20:00", nome: "🍽️ Jantar" },
        { horario: "20:00 – 21:30", nome: "💼 Trabalhar mais um pouquinho" },
        { horario: "21:30 em diante", nome: "🌙 Tempo livre, lazer ou leitura" },
        { horario: "00:00", nome: "😴 Dormir" }
    ],

    sexta: [
        { horario: "10:00", nome: "Acordar" },
        { horario: "10:00 – 10:20", nome: "Higiene pessoal" },
        { horario: "10:20 – 10:50", nome: "☕ Café da manhã" },
        { horario: "10:50 – 11:10", nome: "🛏️ Arrumar a cama e organizar o quarto" },
        { horario: "11:10 – 13:00", nome: "🍽️ Ajudar a preparar o almoço e almoçar" },
        { horario: "13:00 – 13:30", nome: "🙏 Meditar na Palavra" },
        { horario: "13:30 – 14:15", nome: "🧹 Limpeza geral da casa — Varrer (se necessário), passar pano e organizar os ambientes" },
        { horario: "14:15 – 14:45", nome: "💄 Organizar o cantinho de autocuidado — Perfumes, cremes, joias e acessórios, maquiagens (se necessário)" },
        { horario: "14:45 – 15:00", nome: "☕ Pausa para um café" },
        { horario: "15:00 – 19:00", nome: "💼 Trabalho" },
        { horario: "19:00 – 20:00", nome: "🍽️ Jantar" },
        { horario: "20:00 – 21:30", nome: "💼 Trabalhar mais um pouquinho" },
        { horario: "21:30 em diante", nome: "🌙 Tempo livre, lazer ou um filme" },
        { horario: "00:00", nome: "😴 Dormir" }
    ]
};

// --------------------------------------------------
// LISTA DE TAREFAS
// --------------------------------------------------

function criarListaTarefas(dia) {

    if (!tarefas[dia]) return "";

    const tarefasSalvas =
        localStorage.getItem("tarefas_" + dia);

    if (tarefasSalvas) {

        try {

            const dadosSalvos =
                JSON.parse(tarefasSalvas);

            if (
                Array.isArray(dadosSalvos) &&
                dadosSalvos.length > 0
            ) {

                if (
                    typeof dadosSalvos[0] === "string"
                ) {

                    localStorage.removeItem(
                        "tarefas_" + dia
                    );

                } else {

                    tarefas[dia] =
                        dadosSalvos;

                }
            }

        } catch (erro) {

            console.warn(
                "Não foi possível ler tarefas salvas de",
                dia
            );

        }
    }

    let html = "";

    tarefas[dia].forEach(
        (tarefa, index) => {

            html += `
            <div class="task">

                <label>
                    <input type="checkbox">

                    <span>
                        <strong>
                            ${tarefa.horario || ""}
                        </strong>

                        ${tarefa.nome || tarefa}
                    </span>
                </label>

                <button
                    class="edit-task"
                    data-index="${index}">
                    ✏️
                </button>

                <button
                    class="delete-task"
                    data-index="${index}">
                    🗑️
                </button>

            </div>
            `;

        }
    );

    return html;
}

// --------------------------------------------------
// PÁGINAS
// --------------------------------------------------

const paginas = {

    capa: `
        <div class="cover">
            <img
                src="assets/capa-versao-nova.png"
                alt="Capa do Planner">
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

                <div
                    class="historico-periodo"
                    id="periodoSemana">
                    Calculando semana...
                </div>

                <div class="historico-resumo">

                    <div class="historico-item">
                        <span>📋</span>

                        <strong
                            id="totalTarefasSemana">
                            0
                        </strong>

                        <small>Tarefas</small>
                    </div>

                    <div class="historico-item">
                        <span>✅</span>

                        <strong
                            id="tarefasConcluidasSemana">
                            0
                        </strong>

                        <small>Concluídas</small>
                    </div>

                    <div class="historico-item">
                        <span>📊</span>

                        <strong
                            id="porcentagemSemana">
                            0%
                        </strong>

                        <small>Progresso</small>
                    </div>

                </div>

                <div class="historico-progresso">

                    <div class="historico-progresso-bar">

                        <div
                            id="historicoProgressoBar">
                        </div>

                    </div>

                </div>

                <div class="historico-status">
                    <span>
                        📝 Semana em andamento
                    </span>
                </div>

                <button
                    class="btn-finalizar-semana"
                    onclick="prepararFinalizacaoSemana()">

                    ✅ Finalizar semana

                </button>
                <button
    type="button"
    class="btn-finalizar-semana"
    onclick="testarNotificacaoPlanner()">

    🔔 Testar notificação

</button>

            </div>

            <div
                id="listaHistoricoSemanas">
            </div>

                </div>
    `
};

// --------------------------------------------------
// ELEMENTO PRINCIPAL DO PLANNER
// --------------------------------------------------

const app =
    document.getElementById("app");


// --------------------------------------------------
// PROGRESSO DIÁRIO
// --------------------------------------------------

function atualizarProgresso() {

    const checks =
        document.querySelectorAll(
            ".task input"
        );

    if (checks.length === 0) {
        return;
    }

    const marcados =
        document.querySelectorAll(
            ".task input:checked"
        );

    const porcentagem =
        Math.round(
            (marcados.length /
            checks.length) * 100
        );

    const barra =
        document.querySelector(
            ".progress-bar"
        );

    const texto =
        document.querySelector(
            ".percent"
        );

    if (barra) {

        barra.style.width =
            porcentagem + "%";

    }

    if (texto) {

        texto.textContent =
            porcentagem +
            "% concluído";

    }
}


// --------------------------------------------------
// RESTAURAR CHECKBOXES
// --------------------------------------------------

function restaurarEstado() {

    if (
        paginaAtual === "capa" ||
        paginaAtual === "historico"
    ) {
        return;
    }

    const salvo =
        localStorage.getItem(
            paginaAtual
        );

    let dados = [];

    if (salvo) {

        try {

            dados =
                JSON.parse(salvo);

        } catch (erro) {

            dados = [];

        }

    }

    const checks =
        document.querySelectorAll(
            ".task input"
        );

    checks.forEach(
        (check, index) => {

            check.checked =
                dados[index] || false;

        }
    );

    atualizarProgresso();
}


// --------------------------------------------------
// ABRIR PÁGINA
// --------------------------------------------------

function abrirPagina(nome) {

    if (!paginas[nome]) {
        return;
    }

    paginaAtual =
        nome;

    app.innerHTML =
        paginas[nome];


    // ----------------------------------------------
    // BOTÃO ADICIONAR TAREFA
    // ----------------------------------------------

    const addTaskBtn =
        document.getElementById(
            "addTaskBtn"
        );

    if (addTaskBtn) {

        addTaskBtn.style.display =
            (
                nome === "capa" ||
                nome === "historico"
            )
                ? "none"
                : "block";

    }


    // ----------------------------------------------
    // DIA ATIVO
    // ----------------------------------------------

    document
        .querySelectorAll(".day")
        .forEach(
            botao => {

                botao.classList.remove(
                    "active"
                );

            }
        );


    const ativo =
        document.querySelector(
            `[data-day="${nome}"]`
        );

    if (ativo) {

        ativo.classList.add(
            "active"
        );

    }


    // ----------------------------------------------
    // RESTAURAR MARCAÇÕES
    // ----------------------------------------------

    restaurarEstado();


        // ----------------------------------------------
    // HISTÓRICO
    // ----------------------------------------------

    if (nome === "historico") {

        atualizarHistorico();

    }

} // FECHA A FUNÇÃO abrirPagina


// --------------------------------------------------
// NAVEGAÇÃO DOS DIAS
// --------------------------------------------------

document
    .querySelectorAll(".day")
    .forEach(
        botao => {

            botao.addEventListener(
                "click",
                function() {

                    abrirPagina(
                        botao.dataset.day
                    );

                }
            );

        }
    );


// --------------------------------------------------
// CHECKBOXES
// --------------------------------------------------

document.addEventListener(
    "change",
    function(e) {

        if (
            e.target.type !==
            "checkbox"
        ) {
            return;
        }


        atualizarProgresso();


        const checks =
            document.querySelectorAll(
                ".task input"
            );


        const estado =
            Array.from(
                checks
            ).map(
                check =>
                    check.checked
            );


        localStorage.setItem(
            paginaAtual,
            JSON.stringify(
                estado
            )
        );

    }
);


// --------------------------------------------------
// ADICIONAR TAREFA
// --------------------------------------------------

const addTaskBtn =
    document.getElementById(
        "addTaskBtn"
    );


if (addTaskBtn) {

    addTaskBtn.addEventListener(
        "click",
        function() {

            if (
                paginaAtual === "capa" ||
                paginaAtual === "historico"
            ) {
                return;
            }


            const horario =
                prompt(
                    "Digite o horário da tarefa:\n\nExemplo: 14:00 – 15:00"
                );


            if (
                horario === null ||
                !horario.trim()
            ) {
                return;
            }


            const nome =
                prompt(
                    "Digite a tarefa:"
                );


            if (
                nome === null ||
                !nome.trim()
            ) {
                return;
            }


            if (!tarefas[paginaAtual]) {

                tarefas[paginaAtual] =
                    [];

            }


            tarefas[paginaAtual].push({

                horario:
                    horario.trim(),

                nome:
                    nome.trim()

            });


            localStorage.setItem(

                "tarefas_" +
                paginaAtual,

                JSON.stringify(
                    tarefas[paginaAtual]
                )

            );


            abrirPagina(
                paginaAtual
            );

        }
    );

}


// --------------------------------------------------
// EXCLUIR TAREFA
// --------------------------------------------------

document.addEventListener(
    "click",
    function(e) {

        if (
            !e.target.classList.contains(
                "delete-task"
            )
        ) {
            return;
        }


        const index =
            Number(
                e.target.dataset.index
            );


        const confirmar =
            confirm(
                "Deseja excluir esta tarefa?"
            );


        if (!confirmar) {
            return;
        }


        const estadoSalvo =
            JSON.parse(
                localStorage.getItem(
                    paginaAtual
                ) || "[]"
            );


        tarefas[paginaAtual]
            .splice(
                index,
                1
            );


        estadoSalvo.splice(
            index,
            1
        );


        localStorage.setItem(

            "tarefas_" +
            paginaAtual,

            JSON.stringify(
                tarefas[paginaAtual]
            )

        );


        localStorage.setItem(

            paginaAtual,

            JSON.stringify(
                estadoSalvo
            )

        );


        abrirPagina(
            paginaAtual
        );

    }
);


// --------------------------------------------------
// EDITAR TAREFA
// --------------------------------------------------

document.addEventListener(
    "click",
    function(e) {

        const botaoEditar =
            e.target.closest(
                ".edit-task"
            );


        if (!botaoEditar) {
            return;
        }


        const index =
            Number(
                botaoEditar.dataset.index
            );


        const tarefaAtual =
            tarefas[paginaAtual][
                index
            ];


        const horarioAtual =
            tarefaAtual.horario ||
            "";


        const nomeAtual =
            tarefaAtual.nome ||
            tarefaAtual;


        const novoHorario =
            prompt(
                "Editar horário:",
                horarioAtual
            );


        if (
            novoHorario === null ||
            !novoHorario.trim()
        ) {
            return;
        }


        const novoNome =
            prompt(
                "Editar tarefa:",
                nomeAtual
            );


        if (
            novoNome === null ||
            !novoNome.trim()
        ) {
            return;
        }


        tarefas[paginaAtual][index] = {

            horario:
                novoHorario.trim(),

            nome:
                novoNome.trim()

        };


        localStorage.setItem(

            "tarefas_" +
            paginaAtual,

            JSON.stringify(
                tarefas[paginaAtual]
            )

        );


        abrirPagina(
            paginaAtual
        );

    }
);

// --------------------------------------------------
// HISTÓRICO DE SEMANAS
// --------------------------------------------------

function obterSegundaFeira(data = new Date()) {

    const d =
        new Date(data);

    d.setHours(
        0,
        0,
        0,
        0
    );

    const dia =
        d.getDay();

    const diferenca =
        dia === 0
            ? -6
            : 1 - dia;

    d.setDate(
        d.getDate() +
        diferenca
    );

    return d;
}


// --------------------------------------------------
// CHAVE DA SEMANA
// --------------------------------------------------

function obterChaveSemana(data = new Date()) {

    const segunda =
        obterSegundaFeira(
            data
        );

    const ano =
        segunda.getFullYear();

    const mes =
        String(
            segunda.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    const dia =
        String(
            segunda.getDate()
        ).padStart(
            2,
            "0"
        );

    return (
        ano +
        "-" +
        mes +
        "-" +
        dia
    );
}


// --------------------------------------------------
// DATA FORMATADA
// --------------------------------------------------

function formatarData(data) {

    return new Intl.DateTimeFormat(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    ).format(data);

}


// --------------------------------------------------
// PERÍODO DA SEMANA
// --------------------------------------------------

function obterPeriodoSemana(data = new Date()) {

    const segunda =
        obterSegundaFeira(
            data
        );


    const sexta =
        new Date(
            segunda
        );


    sexta.setDate(
        segunda.getDate() +
        4
    );


    return (
        formatarData(
            segunda
        ) +
        " até " +
        formatarData(
            sexta
        )
    );

}


// --------------------------------------------------
// TOTAL DE TAREFAS
// --------------------------------------------------

function obterTotalTarefas() {

    let total = 0;


    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            if (
                tarefas[dia]
            ) {

                total +=
                    tarefas[dia].length;

            }

        }
    );


    return total;

}


// --------------------------------------------------
// TAREFAS CONCLUÍDAS
// --------------------------------------------------

function obterTarefasConcluidas() {

    let total = 0;


    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            const estado =
                JSON.parse(
                    localStorage.getItem(
                        dia
                    ) || "[]"
                );


            estado.forEach(
                marcado => {

                    if (marcado) {

                        total++;

                    }

                }
            );

        }
    );


    return total;

}


// --------------------------------------------------
// PORCENTAGEM DA SEMANA
// --------------------------------------------------

function obterPorcentagemSemana() {

    const total =
        obterTotalTarefas();


    const concluidas =
        obterTarefasConcluidas();


    if (
        total === 0
    ) {

        return 0;

    }


    return Math.round(
        (
            concluidas /
            total
        ) * 100
    );

}


// --------------------------------------------------
// LER HISTÓRICO
// --------------------------------------------------

function obterHistorico() {

    try {

        const historico =
            JSON.parse(
                localStorage.getItem(
                    "historicoSemanas"
                ) || "[]"
            );


        return Array.isArray(
            historico
        )
            ? historico
            : [];

    } catch (erro) {

        console.warn(
            "Erro ao ler histórico:",
            erro
        );

        return [];

    }

}


// --------------------------------------------------
// SALVAR HISTÓRICO
// --------------------------------------------------

function salvarHistorico(
    historico
) {

    localStorage.setItem(

        "historicoSemanas",

        JSON.stringify(
            historico
        )

    );

}

// --------------------------------------------------
// CRIAR FOTOGRAFIA COMPLETA DA SEMANA
// --------------------------------------------------

function criarSnapshotSemana() {

    const dias =
        [
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta"
        ];


    let total = 0;

    let concluidas = 0;

    const tarefasSemana = [];


    // ----------------------------------------------
    // GUARDAR CADA TAREFA DA SEMANA
    // ----------------------------------------------

    dias.forEach(
        dia => {

            const lista =
                tarefas[dia] || [];


            let estado = [];

            try {

                estado =
                    JSON.parse(
                        localStorage.getItem(
                            dia
                        ) || "[]"
                    );

            } catch (erro) {

                estado = [];

            }


            lista.forEach(
                (tarefa, index) => {

                    const horario =
                        typeof tarefa === "object"
                            ? (
                                tarefa.horario ||
                                ""
                            )
                            : "";


                    const nome =
                        typeof tarefa === "object"
                            ? (
                                tarefa.nome ||
                                ""
                            )
                            : String(
                                tarefa
                            );


                    const concluida =
                        estado[index] === true;


                    tarefasSemana.push({

                        dia:
                            dia,

                        horario:
                            horario,

                        nome:
                            nome,

                        concluida:
                            concluida

                    });


                    total++;


                    if (
                        concluida
                    ) {

                        concluidas++;

                    }

                }
            );

        }
    );


    // ----------------------------------------------
    // PORCENTAGEM
    // ----------------------------------------------

    const porcentagem =
        total === 0
            ? 0
            : Math.round(
                (
                    concluidas /
                    total
                ) * 100
            );


    // ----------------------------------------------
    // DATAS DA SEMANA
    // ----------------------------------------------

    const agora =
        new Date();


    const segunda =
        obterSegundaFeira(
            agora
        );


    const sexta =
        new Date(
            segunda
        );


    sexta.setDate(
        sexta.getDate() +
        4
    );


    // ----------------------------------------------
    // FOTOGRAFIA DA SEMANA
    // ----------------------------------------------

    return {

        id:
            obterChaveSemana(
                agora
            ),


        inicio:
            segunda.toISOString(),


        fim:
            sexta.toISOString(),


        periodo:
            obterPeriodoSemana(
                agora
            ),


        totalTarefas:
            total,


        tarefasConcluidas:
            concluidas,


        porcentagem:
            porcentagem,


        tarefas:
            tarefasSemana,


        finalizadaEm:
            agora.toISOString()

    };

}

                
// --------------------------------------------------
// VERIFICAR SE SEMANA JÁ FOI FINALIZADA
// --------------------------------------------------

function semanaJaFinalizada() {

    const chave =
        obterChaveSemana();


    const historico =
        obterHistorico();


    return historico.some(
        semana =>
            semana.id === chave
    );

}


// --------------------------------------------------
// FINALIZAR SEMANA
// --------------------------------------------------

function prepararFinalizacaoSemana() {

    const total =
        obterTotalTarefas();


    const concluidas =
        obterTarefasConcluidas();


    const porcentagem =
        total === 0
            ? 0
            : Math.round(
                (
                    concluidas /
                    total
                ) * 100
            );


    const confirmacao =
        confirm(

            "Finalizar esta semana?\n\n" +

            "Tarefas concluídas: " +
            concluidas +
            " de " +
            total +
            "\n" +

            "Progresso: " +
            porcentagem +
            "%\n\n" +

            "A semana será salva no Histórico " +
            "e as tarefas serão liberadas para " +
            "uma nova semana."

        );


    if (!confirmacao) {

        return;

    }


    finalizarSemana();

}


// --------------------------------------------------
// SALVAR E INICIAR NOVA SEMANA
// --------------------------------------------------

function finalizarSemana() {

    const chave =
        obterChaveSemana();


    const historico =
        obterHistorico();


    // ----------------------------------------------
    // NÃO DUPLICAR SEMANA
    // ----------------------------------------------

    const existente =
        historico.find(
            semana =>
                semana.id === chave
        );


    if (existente) {

        alert(
            "Esta semana já foi finalizada e está salva no Histórico."
        );

        return;

    }


    // ----------------------------------------------
    // CRIAR SNAPSHOT
    // ----------------------------------------------

    const snapshot =
        criarSnapshotSemana();


    // ----------------------------------------------
    // SALVAR SNAPSHOT
    // ----------------------------------------------

    historico.unshift(
        snapshot
    );


    salvarHistorico(
        historico
    );


    // ----------------------------------------------
    // GUARDAR OS DADOS ANTIGOS
    // ----------------------------------------------

    const tarefasAntigas = {};


    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            tarefasAntigas[dia] =
                JSON.parse(
                    localStorage.getItem(
                        dia
                    ) || "[]"
                );

        }
    );


    localStorage.setItem(

        "tarefasSemanaAnterior",

        JSON.stringify(
            tarefasAntigas
        )

    );


    // ----------------------------------------------
    // ZERAR SOMENTE AS MARCAÇÕES
    // ----------------------------------------------

    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            const quantidade =
                tarefas[dia]
                    ? tarefas[dia].length
                    : 0;


            const novoEstado =
                Array(
                    quantidade
                ).fill(false);


            localStorage.setItem(

                dia,

                JSON.stringify(
                    novoEstado
                )

            );

        }
    );


    // ----------------------------------------------
    // REGISTRAR NOVA SEMANA
    // ----------------------------------------------

    localStorage.setItem(

        "semanaAtual",

        obterChaveSemana()

    );


    // ----------------------------------------------
    // ATUALIZAR TELA
    // ----------------------------------------------

    alert(

        "Semana finalizada com sucesso! 🌸\n\n" +

        "Ela foi salva no Histórico com " +
        snapshot.porcentagem +
        "% de progresso.\n\n" +

        "As tarefas foram liberadas para " +
        "uma nova semana."

    );


    abrirPagina(
        "historico"
    );

}


// --------------------------------------------------
// ATUALIZAR HISTÓRICO NA TELA
// --------------------------------------------------

function atualizarHistorico() {

    const periodo =
        document.getElementById(
            "periodoSemana"
        );


    const total =
        document.getElementById(
            "totalTarefasSemana"
        );


    const concluidas =
        document.getElementById(
            "tarefasConcluidasSemana"
        );


    const porcentagem =
        document.getElementById(
            "porcentagemSemana"
        );


    const barra =
        document.getElementById(
            "historicoProgressoBar"
        );


    if (periodo) {

        periodo.textContent =
            obterPeriodoSemana();

    }


    const totalAtual =
        obterTotalTarefas();


    const concluidasAtual =
        obterTarefasConcluidas();


    const porcentagemAtual =
        totalAtual === 0
            ? 0
            : Math.round(
                (
                    concluidasAtual /
                    totalAtual
                ) * 100
            );


    if (total) {

        total.textContent =
            totalAtual;

    }


    if (concluidas) {

        concluidas.textContent =
            concluidasAtual;

    }


    if (porcentagem) {

        porcentagem.textContent =
            porcentagemAtual +
            "%";

    }


    if (barra) {

        barra.style.width =
            porcentagemAtual +
            "%";

    }


    renderizarHistoricoSalvo();

}


// --------------------------------------------------
// MOSTRAR SEMANAS FINALIZADAS
// --------------------------------------------------

function renderizarHistoricoSalvo() {

    const container =
        document.getElementById(
            "listaHistoricoSemanas"
        );


    if (!container) {
        return;
    }


    const historico =
        obterHistorico();


    if (
        !Array.isArray(historico) ||
        historico.length === 0
    ) {

        container.innerHTML = `

            <div class="historico-vazio">

                <p>
                    🌱 Nenhuma semana finalizada ainda.
                </p>

                <small>
                    Quando uma semana for concluída,
                    ela aparecerá aqui.
                </small>

            </div>

        `;

        return;

    }


    let html = `

        <div class="historico-lista">

            <h3>
                📖 Semanas finalizadas
            </h3>

    `;


    historico.forEach(
        (semana, index) => {

            // ------------------------------------------
            // DADOS DA SEMANA
            // ------------------------------------------

            const periodo =
                semana.periodo ||
                semana.semana ||
                semana.period ||
                semana.data ||
                semana.datas ||
                "Semana finalizada";


            const total =
                Number(
                    semana.totalTarefas ??
                    semana.total ??
                    semana.quantidadeTarefas ??
                    0
                );


            const concluidas =
                Number(
                    semana.tarefasConcluidas ??
                    semana.concluidas ??
                    semana.tarefasFeitas ??
                    semana.completadas ??
                    0
                );


            let porcentagem =
                semana.porcentagem ??
                semana.progresso ??
                semana.percentual ??
                semana.percent ??
                null;


            if (
                porcentagem === null ||
                porcentagem === undefined ||
                porcentagem === ""
            ) {

                porcentagem =
                    total > 0
                        ? Math.round(
                            (
                                concluidas /
                                total
                            ) * 100
                        )
                        : 0;

            }


            porcentagem =
                Number(
                    porcentagem
                );


            if (
                !Number.isFinite(
                    porcentagem
                )
            ) {

                porcentagem = 0;

            }


            porcentagem =
                Math.max(
                    0,
                    Math.min(
                        100,
                        porcentagem
                    )
                );


            // ------------------------------------------
            // ID DOS DETALHES
            // ------------------------------------------

            const detalheId =
                "historico-detalhe-" +
                index;


            // ------------------------------------------
            // TAREFAS SALVAS NO SNAPSHOT
            // ------------------------------------------

            const tarefasSalvas =
                Array.isArray(
                    semana.tarefas
                )
                    ? semana.tarefas
                    : [];


            // ------------------------------------------
            // ORGANIZAR TAREFAS POR DIA
            // ------------------------------------------

            const tarefasPorDia = {

                segunda: [],

                terca: [],

                quarta: [],

                quinta: [],

                sexta: []

            };


            tarefasSalvas.forEach(
                tarefa => {

                    if (
                        tarefa &&
                        tarefasPorDia[
                            tarefa.dia
                        ]
                    ) {

                        tarefasPorDia[
                            tarefa.dia
                        ].push(
                            tarefa
                        );

                    }

                }
            );


            const nomesDias = {

                segunda:
                    "Segunda-feira",

                terca:
                    "Terça-feira",

                quarta:
                    "Quarta-feira",

                quinta:
                    "Quinta-feira",

                sexta:
                    "Sexta-feira"

            };


            // ------------------------------------------
            // MONTAR LISTA DAS TAREFAS
            // ------------------------------------------

            let tarefasHtml = "";


            if (
                tarefasSalvas.length === 0
            ) {

                tarefasHtml = `

                    <div
                        class="historico-sem-tarefas"
                    >

                        <p>
                            📋
                            Os detalhes das tarefas
                            desta semana não foram
                            registrados.
                        </p>

                        <small>
                            Esta semana foi salva antes
                            do novo sistema de registro
                            individual das tarefas.
                        </small>

                    </div>

                `;

            } else {

                [
                    "segunda",
                    "terca",
                    "quarta",
                    "quinta",
                    "sexta"
                ]
                .forEach(
                    dia => {

                        const lista =
                            tarefasPorDia[
                                dia
                            ];


                        if (
                            lista.length === 0
                        ) {

                            return;

                        }


                        tarefasHtml += `

                            <div
                                class="historico-dia"
                            >

                                <h5>
                                    🌷
                                    ${nomesDias[dia]}
                                </h5>

                                <div
                                    class="historico-lista-tarefas"
                                >
                        `;


                        lista.forEach(
                            tarefa => {

                                const horario =
                                    tarefa.horario ||
                                    "";


                                const nome =
                                    tarefa.nome ||
                                    "Tarefa";


                                const concluida =
                                    tarefa.concluida === true;


                                tarefasHtml += `

                                    <div
                                        class="
                                            historico-tarefa
                                            ${
                                                concluida
                                                    ? "concluida"
                                                    : "pendente"
                                            }
                                        "
                                    >

                                        <span
                                            class="historico-tarefa-status"
                                        >
                                            ${
                                                concluida
                                                    ? "✅"
                                                    : "⭕"
                                            }
                                        </span>


                                        <div
                                            class="
                                                historico-tarefa-texto
                                            "
                                        >

                                            <strong>
                                                ${horario}
                                            </strong>

                                            <span>
                                                ${nome}
                                            </span>

                                        </div>


                                        <small>
                                            ${
                                                concluida
                                                    ? "Concluída"
                                                    : "Não concluída"
                                            }
                                        </small>

                                    </div>

                                `;

                            }
                        );


                        tarefasHtml += `

                                </div>

                            </div>

                        `;

                    }
                );

            }


            // ------------------------------------------
            // CARTÃO DA SEMANA
            // ------------------------------------------

            html += `

                <div
                    class="historico-semana"
                    data-historico-index="${index}"
                >

                    <div
                        class="historico-semana-topo"
                    >

                        <strong>
                            🌸 ${periodo}
                        </strong>

                        <span>
                            Finalizada
                        </span>

                    </div>


                    <div
                        class="historico-semana-dados"
                    >

                        <div>

                            <strong>
                                ${concluidas}
                            </strong>

                            <small>
                                concluídas
                            </small>

                        </div>


                        <div>

                            <strong>
                                ${total}
                            </strong>

                            <small>
                                tarefas
                            </small>

                        </div>


                        <div>

                            <strong>
                                ${porcentagem}%
                            </strong>

                            <small>
                                progresso
                            </small>

                        </div>

                    </div>


                    <div
                        class="historico-semana-barra"
                    >

                        <div
                            style="
                                width:${porcentagem}%;
                            "
                        ></div>

                    </div>


                    <button
                        type="button"
                        class="btn-detalhes-historico"
                        data-target="${detalheId}"
                    >

                        👁️ Ver detalhes

                    </button>


                    <div
                        id="${detalheId}"
                        class="historico-detalhes"
                        style="display:none;"
                    >

                        <div
                            class="historico-detalhes-conteudo"
                        >

                            <h4>
                                📊 Resumo da semana
                            </h4>


                            <p>
                                <strong>
                                    Período:
                                </strong>

                                ${periodo}
                            </p>


                            <p>
                                <strong>
                                    Tarefas concluídas:
                                </strong>

                                ${concluidas}
                                de
                                ${total}
                            </p>


                            <p>
                                <strong>
                                    Progresso:
                                </strong>

                                ${porcentagem}%
                            </p>


                            <p>
                                <strong>
                                    Status:
                                </strong>

                                Semana finalizada ✅
                            </p>


                            <div
                                class="historico-detalhes-aviso"
                            >

                                🔒
                                Esta semana está
                                registrada no Histórico
                                e não será alterada pelas
                                marcações da semana atual.

                            </div>


                            <div
                                class="historico-tarefas-detalhes"
                            >

                                <h4>
                                    📋 Tarefas da semana
                                </h4>

                                ${tarefasHtml}

                            </div>


                        </div>

                    </div>

                </div>

            `;

        }
    );


    html += `

        </div>

    `;


    // ------------------------------------------
    // COLOCAR NA TELA
    // ------------------------------------------

    container.innerHTML =
        html;


    // ------------------------------------------
    // BOTÕES "VER DETALHES"
    // ------------------------------------------

    container
        .querySelectorAll(
            ".btn-detalhes-historico"
        )
        .forEach(
            botao => {

                botao.addEventListener(
                    "click",
                    function() {

                        const targetId =
                            botao.dataset.target;


                        const detalhe =
                            document.getElementById(
                                targetId
                            );


                        if (!detalhe) {
                            return;
                        }


                        const aberto =
                            detalhe.style.display !==
                            "none";


                        if (aberto) {

                            detalhe.style.display =
                                "none";


                            botao.textContent =
                                "👁️ Ver detalhes";

                        } else {

                            detalhe.style.display =
                                "block";


                            botao.textContent =
                                "🔽 Ocultar detalhes";

                        }

                    }
                );

            }
        );

}
        
                                                    





// --------------------------------------------------
// INICIALIZAÇÃO
// --------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function() {

        abrirPagina(
            "capa"
        );

    }
);
// --------------------------------------------------
// CONTROLE DE SEMANA AUTOMÁTICO
// --------------------------------------------------

function verificarNovaSemana() {

    const semanaAtual =
        obterChaveSemana();

    const semanaRegistrada =
        localStorage.getItem(
            "semanaAtual"
        );


    // Primeira utilização
    if (!semanaRegistrada) {

        localStorage.setItem(
            "semanaAtual",
            semanaAtual
        );

        return;

    }


    // Se mudou a segunda-feira,
    // começa uma nova semana automaticamente.
    if (
        semanaRegistrada !==
        semanaAtual
    ) {

        localStorage.setItem(
            "semanaAtual",
            semanaAtual
        );

        // As marcações pertencem à semana anterior.
        // Somente quando a semana realmente mudou
        // elas são zeradas.
        [
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta"
        ]
        .forEach(
            dia => {

                const quantidade =
                    tarefas[dia]
                        ? tarefas[dia].length
                        : 0;


                const estadoNovo =
                    Array(
                        quantidade
                    ).fill(false);


                localStorage.setItem(

                    dia,

                    JSON.stringify(
                        estadoNovo
                    )

                );

            }
        );

    }

}


// --------------------------------------------------
// INICIALIZAR ESTADO DAS TAREFAS
// --------------------------------------------------

function inicializarEstados() {

    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            const quantidade =
                tarefas[dia]
                    ? tarefas[dia].length
                    : 0;


            const salvo =
                localStorage.getItem(
                    dia
                );


            if (!salvo) {

                localStorage.setItem(

                    dia,

                    JSON.stringify(
                        Array(
                            quantidade
                        ).fill(false)
                    )

                );

                return;

            }


            try {

                const estado =
                    JSON.parse(
                        salvo
                    );


                if (
                    !Array.isArray(
                        estado
                    )
                ) {

                    localStorage.setItem(

                        dia,

                        JSON.stringify(
                            Array(
                                quantidade
                            ).fill(false)
                        )

                    );

                    return;

                }


                // Ajustar quantidade de marcações
                // caso alguma tarefa tenha sido
                // adicionada ou removida.

                while (
                    estado.length <
                    quantidade
                ) {

                    estado.push(
                        false
                    );

                }


                if (
                    estado.length >
                    quantidade
                ) {

                    estado.length =
                        quantidade;

                }


                localStorage.setItem(

                    dia,

                    JSON.stringify(
                        estado
                    )

                );

            } catch (erro) {

                localStorage.setItem(

                    dia,

                    JSON.stringify(
                        Array(
                            quantidade
                        ).fill(false)
                    )

                );

            }

        }
    );

}


// --------------------------------------------------
// ATUALIZAR TAREFAS SALVAS
// --------------------------------------------------

function carregarTarefasPersonalizadas() {

    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            const salvo =
                localStorage.getItem(
                    "tarefas_" +
                    dia
                );


            if (!salvo) {
                return;
            }


            try {

                const dados =
                    JSON.parse(
                        salvo
                    );


                if (
                    Array.isArray(
                        dados
                    ) &&
                    dados.length > 0
                ) {

                    tarefas[dia] =
                        dados;

                }

            } catch (erro) {

                console.warn(
                    "Erro ao carregar tarefas:",
                    dia
                );

            }

        }
    );

}


// --------------------------------------------------
// CORRIGIR ESTADOS APÓS CARREGAR TAREFAS
// --------------------------------------------------

function sincronizarEstadosComTarefas() {

    [
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta"
    ]
    .forEach(
        dia => {

            const quantidade =
                tarefas[dia]
                    ? tarefas[dia].length
                    : 0;


            let estado = [];


            try {

                estado =
                    JSON.parse(
                        localStorage.getItem(
                            dia
                        ) || "[]"
                    );

            } catch (erro) {

                estado = [];

            }


            if (
                !Array.isArray(
                    estado
                )
            ) {

                estado = [];

            }


            while (
                estado.length <
                quantidade
            ) {

                estado.push(
                    false
                );

            }


            if (
                estado.length >
                quantidade
            ) {

                estado =
                    estado.slice(
                        0,
                        quantidade
                    );

            }


            localStorage.setItem(

                dia,

                JSON.stringify(
                    estado
                )

            );

        }
    );

}


// --------------------------------------------------
// INICIALIZAÇÃO FINAL DO APLICATIVO
// --------------------------------------------------

function iniciarPlanner() {

    carregarTarefasPersonalizadas();

    verificarNovaSemana();

    sincronizarEstadosComTarefas();

    abrirPagina(
        paginaAtual
    );

}


// --------------------------------------------------
// DOM READY
// --------------------------------------------------

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(

        "DOMContentLoaded",

        iniciarPlanner

    );

} else {

    iniciarPlanner();
}
// =========================================================
// NOTIFICAÇÕES — PREPARAÇÃO E TESTE
// =========================================================

async function ativarNotificacoes() {

    if (!("Notification" in window)) {

        alert(
            "Este dispositivo ou navegador não oferece suporte a notificações."
        );

        return false;
    }


    if (!("serviceWorker" in navigator)) {

        alert(
            "O Planner não conseguiu acessar o Service Worker."
        );

        return false;
    }


    try {

        const registro =
            await navigator.serviceWorker.ready;


        const permissao =
            await Notification.requestPermission();


        if (permissao !== "granted") {

            alert(
                "As notificações não foram autorizadas."
            );

            return false;
        }


        console.log(
            "🔔 Notificações autorizadas."
        );


        alert(
            "🔔 Notificações ativadas com sucesso!"
        );


        return true;

    } catch (erro) {

        console.error(
            "Erro ao ativar notificações:",
            erro
        );


        alert(
            "Não foi possível ativar as notificações."
        );


        return false;
    }
}


// =========================================================
// NOTIFICAÇÃO DE TESTE
// =========================================================

async function testarNotificacaoPlanner() {

    try {

        if (
            !("Notification" in window)
        ) {

            alert(
                "Este dispositivo não oferece suporte a notificações."
            );

            return;
        }


        if (
            Notification.permission !==
            "granted"
        ) {

            const ativou =
                await ativarNotificacoes();


            if (!ativou) {
                return;
            }

        }


        const registro =
            await navigator.serviceWorker.ready;


        await registro.showNotification(
            "🌸 Planner da Luziana",
            {

                body:
                    "🔔 Esta é uma notificação de teste do Planner!",

                icon:
    "./assets/icon-192.png",

badge:
    "./assets/icon-192.png",

                tag:
                    "teste-planner-luziana",

                vibrate: [
                    200,
                    100,
                    200
                ],

                data: {
                    url: "./"
                }

            }
        );


        console.log(
            "🔔 Notificação de teste enviada."
        );


    } catch (erro) {

        console.error(
            "Erro ao testar notificação:",
            erro
        );


        alert(
            "Não foi possível enviar a notificação de teste."
        );

    }
}

// =========================================================
// REGISTRAR SERVICE WORKER DO PLANNER
// =========================================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", async () => {

        try {

            const registro =
                await navigator.serviceWorker.register("./sw.js");

            console.log(
                "🌸 Service Worker registrado:",
                registro.scope
            );

        } catch (erro) {

            console.error(
                "❌ Erro ao registrar Service Worker:",
                erro
            );

        }

    });

}
