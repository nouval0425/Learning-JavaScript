function updateClock(){ 
let now=new Date()

//untuk hari-hari
let days =["minggu","senin","selasa","Rabu","Kamis","Jum'at","sabtu"]
let daysName=days[now.getDay()];

//untuk tgl/bln/thn
let date =now.getDate();
let month =now.getMonth() + 1;
let year =now.getFullYear();

//untuk jam
let hours =now.getHours()
let minutes =now.getMinutes()
let second =now.getSeconds()

if(hours < 10 )hours ="0"+ hours;
if(minutes < 10 )minutes ="0"+ minutes;
if(second < 10 )second ="0"+ second;

document.getElementById("day").textContent=daysName;
document.getElementById("date").textContent=`${date} / ${month} / ${year}`;
document.getElementById("time").textContent=`${hours} : ${minutes} : ${second}`;

}

setInterval(updateClock,1000);

updateClock();