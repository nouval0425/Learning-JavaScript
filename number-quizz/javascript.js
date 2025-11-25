//membuat random number
let randomnumber = Math.floor(Math.random() * 10) + 1;
//mengambil data input

let pesan = document.getElementById("pesan");
//hitung jumlah percobaan
let percobaan=0;
let maxpercobaan =5;
//button
let btnclick =document.getElementById("btn");
let btnreset =document.getElementById("reset");


function cektebakan(){
    let input = parseInt(document.getElementById("input").value);
    guess =Number(input)

    percobaan++;

    
if (isNaN(guess)) {
    pesan.textContent = "MASUKAN TEBAKAN ANDA";
} else if (guess > randomnumber) {
    pesan.textContent = "TEBAKAN ANDA KELEBIHAN";
} else if (guess < randomnumber) {
    pesan.textContent = "TEBAKAN TERLALU KECIL";
} else if (guess === randomnumber) {
    pesan.textContent = "SELAMAT TEBAKAN ANDA BENAR";
    btnclick.disabled=true;
} else if(guess === maxpercobaan){
    pesan.textContent="MAAF SILAHKAN RESET, angka... :" + randomnumber;
    btnclick.disabled=true;
}
    input =" "
}

btnclick.addEventListener("click", cektebakan)

btnreset.addEventListener("click", function(){
    randomnumber = Math.floor(Math.random() * 10) + 1; // TANPA let
    percobaan = 0;
    pesan.textContent = "";
    document.getElementById("input").value = ""; // ini yang benar
    btnclick.disabled = false;
});


