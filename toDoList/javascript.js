let textlist = document.getElementById("todolist");
let btntambah = document.getElementById("tambah");
let list = document.getElementById("list");

// --- Load data ketika halaman dibuka ---
loadTodo();

btntambah.addEventListener("click", () => {
    addTodo();
});

function addTodo() {
    let text = textlist.value.trim(); //ambil text input
    
    if (text === "") return;

    let li = createTodoElement(text);
    list.appendChild(li);

    saveTodo();
    textlist.value = "";
}

// --- Fungsi membuat element to-do ---
function createTodoElement(text) {
    let li = document.createElement("li");
    li.textContent = text;

    // Tombol selesai
    let donebtn = document.createElement("button");
    donebtn.textContent = "✅";
    donebtn.style.marginLeft = "10px";

    donebtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTodo();
    });

    // Tombol hapus
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "❌";
    deletebtn.style.marginLeft = "20px";

    deletebtn.addEventListener("click", () => {
        list.removeChild(li);
        saveTodo();
    });

    // Masukkan tombol ke li
    li.appendChild(deletebtn);
    li.appendChild(donebtn);

    return li;
}

// --- Simpan seluruh list ke localStorage ---
function saveTodo() {
    let todos = [];
    let items = list.querySelectorAll("li");

    items.forEach(li => {
        todos.push({
            text: li.childNodes[0].nodeValue.trim(),
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("todoData", JSON.stringify(todos));
}

// --- Load dari localStorage ---
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
