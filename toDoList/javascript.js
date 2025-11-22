let textlist =document.getElementById("todolist");
let btntambah =document.getElementById("tambah");
let list =document.getElementById("list");



btntambah.addEventListener("click",()=>{
    addTodo();
})

function addTodo(){
    let text=textlist.value; //mengambil nilai dari input
    
    if(text ===" ")return;

    let donebtn=document.createElement("donebtn");//membuat elemen bari di javasript untuk donebtn
    donebtn.textContent="✅";//mengatur konten donebtn
    donebtn.style.marginLeft="10px";//mengatur tata letak

    let deletebtn =document.createElement("deletebtn");
    deletebtn.textContent="❌";
    deletebtn.style.marginLeft="20px";

    deletebtn.addEventListener("click",()=>{
        list.removeChild(li);
    })

    donebtn.addEventListener("click",()=>{
        li.classList.toggle("completed");
    })
    
    let li=document.createElement("li"); //membuat elemen li
    li.textContent = text //isi text dari input

    li.appendChild(deletebtn);//menambahkan deletebtn
    li.appendChild(donebtn);//menambahkan done btn 
    list.appendChild(li);//menambahkan ke list


    textlist.value=" ";
}


