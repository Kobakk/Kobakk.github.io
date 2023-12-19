function currentTime() {
    let date = new Date();
    //let hh = date.getHours();
    //let mm = date.getMinutes();
//hh + ":" + mm;
    let time = date.getTime();

    document.getElementById("reloj").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
    currentTime();
});
