

///////////////////////////////// Deyra e pare ///////////////////////////////////////

let names = ["Ronaldo","Messi","Shaqiri","Graniti"];

let listaEmrave=document.querySelector('#lista');

names.forEach(emri =>{
  let elementi = document.createElement ("li");

  elementi.appendChild(document.createTextNode(emri))

  listaEmrave.appendChild(elementi);

}) 


document.getElementById("text")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("submit").click();
        }
    });
 
document.getElementById("submit").onclick = function() {
    let newName = document.querySelector('#text').value;

    let elementiMeiRI = document.createElement ("li");

    elementiMeiRI.appendChild(document.createTextNode(newName))
  
    listaEmrave.appendChild(elementiMeiRI);

    document.querySelector('#text').value= '';

}

///////////////////////////////// Deyra e dyte /////////////////////////////////////////

function kliko(){

 let limiti = document.getElementById("numri").value;
 totali = 0;
   for( let index=0 ; index<limiti ;index++){
      document.getElementById('rezultati').innerHTML =  totali = totali + index;
   }
}

