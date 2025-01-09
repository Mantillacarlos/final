document.addEventListener("DOMContentLoaded", () => {
    const playAllButton = document.getElementById("play-all");
    const changeBgButton = document.getElementById("change-bg");

    playAllButton.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach(audio => {
            audio.play();
        });
    });

    changeBgButton.addEventListener("click", () => {
        document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });

});

const btn = document.getElementById('colorBtn');
const colores = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33B5'];
btn.addEventListener('click', () => {
  const crandom = colores[Math.floor(Math.random() * colores.length)];
  btn.style.backgroundColor = crandom;
});
