let btnstart =document.getElementById("start")
let btnstop =document.getElementById("stop")
let btnreset =document.getElementById("reset")
let display =document.getElementById("display")

let ms =0;
let s=0;
let m =0;

let timer =null;
let running =false;


btnstart.addEventListener("click",() =>{
    if(running) return;
    running=true;
    
    
    
    timer = setInterval(() => {
        ms++;

        if(ms == 100){
            ms=0;
            s++;
        }
        
        if(s == 60){
            s=0;
            m++;
        }

        display.innerText=`${m} :${s} :${ms}`;
    }, 10);
    
})

btnstop.addEventListener("click",()=>{
    clearInterval(timer);
    running=false;
})

btnreset.addEventListener("click",()=>{
    clearInterval(timer);
    running=false;

    m=0;
    s=0;
    ms=0;

    display.innerText ="0 : 0 : 0"
})
