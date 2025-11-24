let author =document.getElementById("author");
let quotes =document.getElementById("quotes");
let button =document.getElementById("button");

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

//fungsi untuk random code & tampilkan konten
function generatecode(){
    let random =Math.floor(Math.random()* quotesarray.length);

    quotes.textContent =quotesarray[random].text;
    author.textContent ="-" + quotesarray[random].author;

}

button.addEventListener("click",generatecode);
generatecode();

