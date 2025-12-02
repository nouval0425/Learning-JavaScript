let next=document.getElementById("next")
let prev=document.getElementById("prev")
let gambar=document.getElementById("gambar")

let image=[
    "shh.jpg",
    "anjay.jpg",
    "film.jpg",
    "ui.jpg"
]

let ucapan =[
    "my istri",
    "aduh my istri lagi",
    "my favorite film",
    "ini kah my..."
]

let index = 0 ;

function updateimg(){
gambar.src=image[index];
document.getElementById("caption").textContent=ucapan[index];
}

next.addEventListener("click",()=>{
    index++;

    if(index > image.length -1){
        index =0;
    }
    updateimg();
})

prev.addEventListener("click",()=>{
    index--;

    if(index < 0){
        index = image.length -1;
    }
    updateimg();
})