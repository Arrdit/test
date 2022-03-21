// function stiliKeq() {
//     document.getElementById("paragrafi1") = element.classList.add("stiliKeq");
// }
// function stiliMire() {
//     document.getElementById("paragrafi1").className = ".sitliMire";
// }

function mire() {

    var element = document.getElementById("paragrafi1");
    element.classList.remove("sitliKeq")
    element.classList.add("stiliMire");

    var element = document.getElementById("paragrafi2");
    element.classList.remove("sitliKeq")
    element.classList.add("stiliMire");

    var element = document.getElementById("paragrafi3");
    element.classList.remove("sitliKeq")
    element.classList.add("stiliMire");


  }

function keq() {
    var element = document.getElementById("paragrafi1");
    element.classList.remove("sitliKeq")
    element.classList.add("sitliKeq");
    
    var element = document.getElementById("paragrafi2");
    element.classList.remove("sitliKeq")
    element.classList.add("sitliKeq");

    var element = document.getElementById("paragrafi3");
    element.classList.remove("sitliKeq")
    element.classList.add("sitliKeq");
  }


  //html elemente te cilat nuk kane nevoje per selektor
console.log(document.head)
console.log(document.body)
document.log(document.documentElement)



//selektoret e elementeve
console.log(document.getElementsByTagName('p'))


//krijimi dhe fshirja e elementeve



let paragrafipare = document.querySelectorAll('p')
paragrafipare.remove

//ngjitja e elementit ne dokument 
function ngjitElementin(){
    let titulli = document.createElement('h1');
    titulli.innerHTML = 'heading me js'
    let b = document.body
    b.prepend(titulli)//shtimi i elementit ne fillim 
    //b.append(titulli//shtimi i elementit ne fund)
}

let paragrafiKater = document.createElement('p')
paragrafi4.innerHTML = 'paragrafi testues'
function paragrafi4(){
    document.body.append(paragrafiKater.cloneNode(true))
}
function paragrafi5(){
  document.body.prepend(paragrafiKater.cloneNode(true))
}

function fshirje(){
  let par1 = document.querySelector('p')
  let par2 = document.querySelector('p')
  par1.remove()
}

