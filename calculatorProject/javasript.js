const number =document.querySelectorAll(".number");
const display=document.getElementById("tampilkan");
const operator=document.querySelectorAll(".operator");
const equal =document.getElementById("equal");
const clear =document.getElementById("clear");
const backspace =document.getElementById("backspace")

//menyimpan angkale
let firstvalue =""
let currentinput=""
let currentoperator =""


//function guna saat angka diklik akan keluar di tampilan
number.forEach(btn =>{
    btn.addEventListener("click",() =>{
        currentinput += btn.innerText;
        display.value = currentinput;
        
    })
})

//function untuk operator
operator.forEach(btn =>{
    btn.addEventListener("click",() =>{
        if (currentinput === "")return;

      firstvalue = currentinput; //simpan value pertama
      currentoperator = btn.innerText; //menyimpan operator
      currentinput ="" //dijadikan kosong untuk angka kedua
      //display.value=firstvalue+ " "+currentoperator;  
    });
});

//function untuk tombol =

    equal.addEventListener("click",() =>{
        if(firstvalue === "" || currentinput ==="")return;

        let a =parseFloat(firstvalue);
        let b=parseFloat(currentinput);
        let result =0;

     if(currentoperator ==="+") result = a + b;
     if(currentoperator ==="-") result = a - b;
     if(currentoperator ==="/") result = a / b;
     if(currentoperator ==="*") result = a * b;

    display.value = result;

     currentinput=result.toString();
     firstvalue="";
     currentoperator="";
        

    });


//untuk tombol c / clear

    clear.addEventListener("click",()=>{
        firstvalue="";
        currentinput="";
        currentoperator="";
        display.value="";
    })

    backspace.addEventListener("click",() =>{
        currentinput= currentinput.slice(0,-1);

        display.value =currentinput;
    })
