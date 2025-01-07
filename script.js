document.getElementById("change-bg").addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "#f3f3f3" : "lightblue";
});


document.getElementById("play-all").addEventListener("click", () => {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.play();
    });
});
