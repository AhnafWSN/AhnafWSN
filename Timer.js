const jam = document.getElementById("hours");
const menit = document.getElementById("minutes");
const detik = document.getElementById("seconds");
const start = document.getElementById("button1");
const pause = document.getElementById("button2");
const reset = document.getElementById("button3");

if(jam && menit && detik){
    var interval = null;
    var total = 0;
    var isRunning = false;

    totalValue = ()=>{
        total = Number(jam.value)*3600 + Number(menit.value)*60 + Number(detik.value);
    }

    Timer = ()=>{
        totalValue();
        total--;

        if (total >= 0){
            var hr = Math.floor(total / 3600);
            var mnt = Math.floor(total / 60 % 60);
            var sec = Math.floor(total % 60);

            hr = (hr < 10) ? "0" + hr : hr;
            mnt = (mnt < 10) ? "0" + mnt : mnt;
            sec = (sec < 10) ? "0" + sec : sec;

            jam.value = hr;
            menit.value = mnt;
            detik.value = sec;

        }
        else{
            alert("Time's Over!");
            clearIntervalInterval(interval);
            jam.value = "";
            menit.value = "";
            detik.value = "";
            isRunning = false;
        }
    }

    start.addEventListener('click', ()=>{
        totalValue();
        if(!(jam.value || menit.value || detik.value)){
            alert("Please do not leave the form blank!");
        }else if(total <= -1){
            alert("Insert the Correct Time");
            clearIntervalInterval(interval);
            jam.value = "";
            menit.value = "";
            detik.value = "";
            return;
        }else{

            if(!isRunning){
                clearInterval(interval);
                interval = setInterval(Timer, 1000);
            }
            isRunning = true;
        }
    });

    pause.addEventListener('click', ()=>{

        if(isRunning){
            clearInterval(interval);
            isRunning = false;
        }
    });

    reset.addEventListener('click', ()=>{
        clearInterval(interval);
        isRunning = false;
        jam.value = "";
        menit.value = "";
        detik.value = "";
    });
}
    
