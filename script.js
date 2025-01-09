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

