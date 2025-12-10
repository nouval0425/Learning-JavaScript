let textlist =document.getElementById("todolist");
let btntambah =document.getElementById("tambah");
let list =document.getElementById("list");


loadTodo(); 

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
        save();
    })

    donebtn.addEventListener("click",()=>{
        li.classList.toggle("completed");
        save();
    })
    
    let li=document.createElement("li"); //membuat elemen li
    li.textContent = text //isi text dari input

    li.appendChild(deletebtn);//menambahkan deletebtn
    li.appendChild(donebtn);//menambahkan done btn 
    list.appendChild(li);//menambahkan ke list


    textlist.value=" ";
  
}

//untuk menyimpan data
function save(){
let todos=[];
let items =list.querySelectorAll("li")

items.forEach(li =>{
    todos.push({
        text:li.childNodes[0].nodeValue.trim(),
        completed:li.classList.contains("completed")
    })
})
localStorage.setItem("todoData",JSON.stringify(todos))
}


//untuk menampikan data
function loadTodo() {
    let data = localStorage.getItem("todoData");

    if (!data) return;

    let todos = JSON.parse(data);

    todos.forEach(item => {
        let li = createTodoElement(item.text);

        if (item.completed) {
            li.classList.add("completed");
        }

        list.appendChild(li);
    });
}

