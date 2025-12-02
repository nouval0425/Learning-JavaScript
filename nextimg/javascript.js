let next=document.getElementById("next")
let prev=document.getElementById("prev")
let gambar=document.getElementById("gambar")

let image=[
    "shh.jpg",
    "anjay.jpg",
    "film.jpg",
    "ui.jpg"
]

let index = 0 ;

function updateimg(){
gambar.src=image[index];

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

    if(index > image.length -1){
        index =0;
    }
    updateimg();
})