const tarefas = {

capa: [],

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

let html="";

tarefas[dia].forEach(tarefa=>{

html+=`
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
<h2>🌷 Terça-feira</h2>
<p>Em construção...</p>
`,

quarta: `
<h2>🌷 Quarta-feira</h2>
<p>Em construção...</p>
`,

quinta: `
<h2>🌷 Quinta-feira</h2>
<p>Em construção...</p>
`,

sexta: `
<h2>🌷 Sexta-feira</h2>
<p>Em construção...</p>
`,

historico: `
<h2>📚 Histórico</h2>
<p>Em construção...</p>
`

};

const app = document.getElementById("app");

function abrirPagina(nome){

app.innerHTML = paginas[nome];

document.querySelectorAll(".day").forEach(botao=>{
botao.classList.remove("active");
});

const ativo = document.querySelector(`[data-day="${nome}"]`);

if(ativo){
ativo.classList.add("active");
}

}

document.querySelectorAll(".day").forEach(botao=>{

botao.addEventListener("click",()=>{

abrirPagina(botao.dataset.day);

});

});

abrirPagina("capa");
console.log("INDEX NOVO CARREGADO");

document.addEventListener("change", function(e){

    if(e.target.type !== "checkbox") return;

    const checks = document.querySelectorAll(".task input");
    const marcados = document.querySelectorAll(".task input:checked");

    const porcentagem = checks.length
        ? Math.round((marcados.length / checks.length) * 100)
        : 0;

    const barra = document.querySelector(".progress-bar");
    const texto = document.querySelector(".percent");

    if(barra){
        barra.style.width = porcentagem + "%";
    }

    if(texto){
        texto.textContent = porcentagem + "% concluído";
    }

    const estado = Array.from(checks).map(check => check.checked);
    localStorage.setItem("segunda", JSON.stringify(estado));
    alert(localStorage.getItem("segunda"));

});
