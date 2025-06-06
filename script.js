let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let rodando = false;

const display = document.getElementById('display');
const btnIniciar = document.getElementById('start');
const btnPausar = document.getElementById('pause');
const btnResetar = document.getElementById('reset');

function atualizarDisplay() {
    const h = horas.toString().padStart(2, '0');
    const m = minutos.toString().padStart(2, '0');
    const s = segundos.toString().padStart(2, '0');
    display.textContent = `${h}:${m}:${s}`;
}

function contarTempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    atualizarDisplay();
}

btnIniciar.addEventListener('click', () => {
    if (!rodando) {
        intervalo = setInterval(contarTempo, 1000);
        rodando = true;
    }
});

btnPausar.addEventListener('click', () => {
    clearInterval(intervalo);
    rodando = false;
});

btnResetar.addEventListener('click', () => {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    rodando = false;
    atualizarDisplay();
});

// ⏲️ Função do Timer (Contagem regressiva)
const inputTimer = document.getElementById('input-timer');
const btnIniciarTimer = document.getElementById('start-timer');

btnIniciarTimer.addEventListener('click', () => {
    let tempoRestante = parseInt(inputTimer.value);

    if (isNaN(tempoRestante) || tempoRestante <= 0) {
        alert("Por favor, insira um tempo válido em segundos.");
        return;
    }

    clearInterval(intervalo);
    rodando = true;

    intervalo = setInterval(() => {
        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            display.textContent = "00:00:00";
            alert("⏰ Tempo esgotado!");
            rodando = false;
        } else {
            let h = Math.floor(tempoRestante / 3600);
            let m = Math.floor((tempoRestante % 3600) / 60);
            let s = tempoRestante % 60;

            const hh = h.toString().padStart(2, '0');
            const mm = m.toString().padStart(2, '0');
            const ss = s.toString().padStart(2, '0');

            display.textContent = `${hh}:${mm}:${ss}`;
            tempoRestante--;
        }
    }, 1000);
});
