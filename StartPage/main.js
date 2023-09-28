function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();

    let time = hh + ":" + mm;

    document.getElementById("reloj").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
    currentTime();
});
