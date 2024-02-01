document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.getElementById("reloj");

    let time = setInterval(() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds <10) seconds = "0" + seconds;
        if (hours < 10 ) hours = "0" + hours;
        elemento.textContent = `${hours} : ${minutes} : ${seconds} `;
    }, 1000);
});

