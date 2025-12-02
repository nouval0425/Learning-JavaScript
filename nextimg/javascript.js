let next=document.getElementById("next")
let prev=document.getElementById("prev")
let gambar=document.getElementById("gambar")

let image=[
    "download(1).jpg",
    "download.jpg",
    "istri.jpg",
    "film.jpg",
    "ui.jpg"
]

let index = 0 ;

function updateumg(){
gambar.src=image[index];

}

next.addEventListener("click",()=>{
    index++;

    if(index < image.length -1){
        index =0;
    }
})