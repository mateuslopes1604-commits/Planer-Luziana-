<script>

const paginas = {

capa: `
<div class="cover">
<img src="assets/cover.png" alt="Capa do Planner">
</div>
`,

segunda: `
segunda: `
<div class="planner">

<h2>🌷 Segunda-feira</h2>

<div class="percent">
0% concluído
</div>

<div class="progress">
<div class="progress-bar"></div>
</div>

<div class="task">
<label><input type="checkbox"><span>Acordar</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Higiene pessoal</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Café da manhã</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Arrumar a cama</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Meditar na Palavra</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Treino</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Banho</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Trabalho</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Jantar</span></label>
</div>

<div class="task">
<label><input type="checkbox"><span>Tempo livre</span></label>
</div>

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
</script>
