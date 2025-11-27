let merah =document.getElementById("m");
let kuning =document.getElementById("k");
let hijau =document.getElementById("h");
let biru =document.getElementById("b");
let pink =document.getElementById("p");
let hitam =document.getElementById("htm");
let random =document.getElementById("r");


merah.addEventListener("click",()=>{
document.body.style.backgroundColor ="red"
document.getElementById("quotes").textContent="ini adalah warna merah"
})

//kuning
kuning.addEventListener("click",()=>{
document.body.style.backgroundColor ="yellow"
document.getElementById("quotes").textContent="ini adalah warna kuning"
})

//hijau
hijau.addEventListener("click",()=>{
document.body.style.backgroundColor ="green"
document.getElementById("quotes").textContent="ini adalah warna hijau"
})

//biru
biru.addEventListener("click",()=>{
document.body.style.backgroundColor ="blue"
document.getElementById("quotes").textContent="ini adalah warna biru"
})
//pink
pink.addEventListener("click",()=>{
document.body.style.backgroundColor ="pink"
document.getElementById("quotes").textContent="ini adalah warna pink"
})
//hitam
hitam.addEventListener("click",()=>{
document.body.style.backgroundColor ="black"
document.getElementById("quotes").textContent="ini adalah warna hitam"
})
//random
document.getElementById("random").addEventListener("click", function(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("quotes").textContent="ini adalah warna random"
});

