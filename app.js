var min = 0;
var sec = 0;
var ms = 0;
var mili = document.getElementById("milisecond");
var minutes = document.getElementById("minutes");
var second = document.getElementById("second");
var set1 = document.getElementById("s")
var set2 = document.getElementById("p")
var run;
function time() {
    ms++
    mili.innerHTML = ms
    if (ms >= 100) {
        sec++
        second.innerHTML = sec;
        ms = 0;
    }
    else if (sec >= 60) {
        min++
        minutes.innerHTML = min;
        sec = 0
    }
}
function start() {
    run = setInterval(time, 10)
    set1.disabled = true
}
function pause() {
    clearInterval(run)
    if (set2 = true) {
        set1.disabled = false
    }
}
function reset() {
    pause()
    mili.innerHTML = 0;
    second.innerHTML = 0;
    minutes.innerHTML = 0;
    sec = 0
    min = 0
}
// var date = new Date();
// var a = date.getHours();
// var b = date.getMinutes();
// var c = date.getSeconds();
// function waqt() {
//     document.write(a + ":" + b + ":" + c)
// }
