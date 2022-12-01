
function generate(){
var prompts1 = ['Reklamēšana', 'Bizness', 'Skola', 'Tehnoloģijas', 'Datori'];
var prompts2 = ['Plastmas', 'Kartons', 'Papīrs', 'Metāls', 'Alumīnījs', 'Putuplasts'];
var prompts3 = ['Transports', 'Vairumtirzniecība', 'Izglītiba', 'Ŗažošanas', 'Atkritumu-pārstrāde', 'Tūrisms', 'Mikrokontrolieri'];


var anwser1 = prompts1[Math.floor(Math.random()*prompts1.length)];
var anwser2 = prompts2[Math.floor(Math.random()*prompts2.length)];
var anwser3 = prompts3[Math.floor(Math.random()*prompts3.length)];

document.getElementById("anwser").innerHTML =  anwser1 + " | " + anwser2 + " | " +  anwser3;
}