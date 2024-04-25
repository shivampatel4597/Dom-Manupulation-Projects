console.log(5);
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let stopping;
let secs = 0;
let mins =0;
let hor =0;
function startTimer() {
   
 stopping =  setInterval(() => {
    secs++;
    if (secs == 60) {
      mins = mins+1;
      secs = 0;
     
    }
    if(mins == 60){
        hor = hor+1;
        mins =0;
        secs =0;
    }
    sec.innerHTML = secs;
    min.innerHTML = mins;
    hr.innerHTML = hor;
   
    // console.log(secs)
  }, 1000);
  
}

function stopTimer(){
    clearInterval(stopping)
   
}

function resetTimer(){
    clearInterval(stopping)
    secs = 0;
    mins = 0;
    hor = 0;
    sec.innerHTML = 0;
    min.innerHTML = 0;
    hr.innerHTML = 0;
}
start.addEventListener("click", startTimer);
stop.addEventListener('click',stopTimer)
reset.addEventListener('click',resetTimer)
