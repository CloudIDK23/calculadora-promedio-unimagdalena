alert("Bienvenido a la calculadora de promedio para estudiantes de UNIMAGDALENA!")

const botonSemestral = document.getElementById("boton_semestral");
const botonPonderado = document.getElementById("boton_ponderado");

const seccionSemestral = document.getElementById("seccion_semestral");
const seccionPonderado = document.getElementById("seccion_ponderado");

botonSemestral.addEventListener("click", () => {
    seccionSemestral.classList.remove("hidden");
    seccionPonderado.classList.add("hidden");
});

botonPonderado.addEventListener("click", () => {
    seccionPonderado.classList.remove("hidden");
    seccionSemestral.classList.add("hidden");
});




const numeroMaterias=document.getElementById("numero_materias");
const crearCasillas=document.getElementById("crear_casillas");
const casillasDiv=document.getElementById("casillas");
const formMaterias=document.getElementById("formula_materias");
const resultadoDiv=document.getElementById("resultado");

crearCasillas.addEventListener("click", () => {
    const num=parseInt(numeroMaterias.value);

    if (isNaN(num)||num<1) {
        alert("Por favor, ingresa un número válido de materias.");
        return;
    }

    casillasDiv.innerHTML=""; 
    formMaterias.classList.remove("hidden");

    for (let i=1;i<=num;i++) {
        const div=document.createElement("div");
        div.classList.add("fila");

        div.innerHTML= `
            <label>Materia ${i}:</label>
            <input type="number"class="nota" placeholder="Nota (0-500)" min="0" max="500" step="1" required>
            <input type="number"class="creditos" placeholder="Créditos" min="1" required>
        `;

        casillasDiv.appendChild(div);
    }
});




formMaterias.addEventListener("submit",(e) =>{
    e.preventDefault();

    const notas=document.querySelectorAll(".nota");
    const creditos=document.querySelectorAll(".creditos");

    let suma_semestral=0;
    let suma_creditos=0;

    for (let i=0;i<notas.length;i++) {
        const nota=parseFloat(notas[i].value);
        const credito=parseFloat(creditos[i].value);

        if (nota < 0||nota>500) {
            alert("Todas las notas deben estar entre 0 y 500.");
            return;
        }

        suma_semestral+=nota*credito;
        suma_creditos+=credito;
    }

    const promedio=suma_semestral/suma_creditos;

    resultadoDiv.classList.remove("hidden");
    resultadoDiv.innerHTML= `
        <h3>📘 Promedio Semestral:</h3>
        <p><strong>${promedio.toFixed(2)}</strong></p>
    `;
});




const numeroSemestres=document.getElementById("numero_semestres");
const crearSemestres=document.getElementById("crear_casillas_ponderado");
const casillasPonderado=document.getElementById("casillas_ponderado");
const formPonderado=document.getElementById("formula_ponderado");
const resultadoPonderado=document.getElementById("resultado_ponderado");

crearSemestres.addEventListener("click", () => {
    const num=parseInt(numeroSemestres.value);

    if (isNaN(num) || num < 1) {
        alert("Por favor, ingresa un número válido de semestres.");
        return;
    }

    casillasPonderado.innerHTML = ""; 
    formPonderado.classList.remove("hidden");

    for (let i=1;i<=num; i++) {
        const div = document.createElement("div");
        div.classList.add("fila");

        div.innerHTML = `
            <label>Semestre ${i}:</label>
            <input type="number" class="promedio_semestre" placeholder="Promedio (0-500)" min="0" max="500" step="1" required>
            <input type="number" class="creditos_semestre" placeholder="Créditos" min="1" required>
        `;

        casillasPonderado.appendChild(div);
    }
});




formPonderado.addEventListener("submit", (e) => {
    e.preventDefault();

    const promedios=document.querySelectorAll(".promedio_semestre");
    const creditos=document.querySelectorAll(".creditos_semestre");

    let suma_ponderada=0;
    let suma_creditos=0;

    for (let i=0; i<promedios.length;i++) {
        const promedio=parseFloat(promedios[i].value);
        const credito=parseFloat(creditos[i].value);

        if (promedio<0||promedio>500) {
            alert("Todos los promedios deben estar entre 0 y 500.");
            return;
        }

        suma_ponderada+=promedio*credito;
        suma_creditos+=credito;
    }

    const promedio_ponderado=suma_ponderada/suma_creditos;

    resultadoPonderado.classList.remove("hidden");
    resultadoPonderado.innerHTML= `
        <h3>🎓 Promedio Ponderado General:</h3>
        <p><strong>${promedio_ponderado.toFixed(2)}</strong></p>
        <p><small>Basado en ${promedios.length} semestres y ${suma_creditos} créditos totales</small></p>
    `;
});