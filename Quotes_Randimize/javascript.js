let author =document.getElementById("author");
let quotes =document.getElementById("quotes");
let button =document.getElementById("button");
let styles =["style1", "style2", "style3"]

const quotesarray =[
    {
        text :"berakit rakit dahulu bersenang senang kemudian",
        author :"i'm"
    },
    {
        text :"Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan.",
        author :"Steve Jobs"
    },

    {
        text :"Kegagalan adalah bumbu yang memberi rasa pada kesuksesan.",
        author :"Truman Capote"
    },

    {
        text :"Masa depan adalah milik mereka yang percaya pada keindahan mimpi-mimpi mereka.",
        author :"Eleanor Roosevelt"
    },
    {
        text :"Berpikirlah 100 kali sebelum mengambil keputusan, tapi setelah itu, bertindaklah 100%.",
        author :"Muhammad Ali Jinnah"
    },
    {
        text :"Tantangan adalah yang membuat hidup menarik, dan mengatasinya adalah yang membuat hidup bermakna.",
        author :"Joshua J. Marine"
    },
    {
        text :"Jangan takut terhadap bayangan, itu berarti ada cahaya yang bersinar di dekatnya.",
        author :"Ruth Renkel"
    },
    {
        text :"Meskipun Anda jatuh sepuluh kali, bangunlah sebelas kali. Teruslah berjuang untuk impian Anda.",
        author :"Park Sae Ro Yi"
    },
    {
        text :"Meskipun kita akan menua dan ingatan kita memudar, kita harus terus maju dan hidup dengan potensi terbaik kita.",
        author :"Jiraiya"
    },
    {
        text :"Jadikan setiap hari sebagai mahakarya",
        author :"John Wooden"
    },

];

function randombackground(){
    let r =math.floor(math.random()*  256);
    let g =math.floor(math.random()*  256);
    let b =math.floor(math.random()*  256);

document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
}

//fungsi untuk random code & tampilkan konten &ganti warna
function generatecode() {
    let random = Math.floor(Math.random() * quotesarray.length);

    // animasi fade
    document.querySelector(".box").classList.add("fade");

    setTimeout(() => {
        quotes.textContent = quotesarray[random].text;
        author.textContent = "- " + quotesarray[random].author;

        // reset style lama
        quotes.className = "";
        author.className = "";

        // pilih style random
        let randomStyle = styles[Math.floor(Math.random() * styles.length)];

        // pasang style baru
        quotes.classList.add(randomStyle);
        author.classList.add(randomStyle);

        // animasi balik
        document.querySelector(".box").classList.remove("fade");

        randombackground();

    }, 250);
}


button.addEventListener("click",generatecode);
generatecode();

