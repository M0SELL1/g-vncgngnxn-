function transforma(){
    //tira imagens
    var parent = document.getElementById("div_1");
    var child = document.getElementsByTagName("img");
    while(child.length > 0){
        console.log(filho.length);
        parent.removeChild(filho[0]);
    }
 
   //imagem 1
   var QuebraLinha = document.createElement("br");
   var criaElem = document.createElement("p");
   var node = document.createTextNode("Professor Leandro Maia segurando um vira-lata caramelo assustado de sainha (no caso o chocorro está de saia, não o professor.)");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   var elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
 
   //imagem 2
   QuebraLinha = document.createElement("br");
   criaElem = document.createElement("p");
   node = document.createTextNode("Professor Humberto Honda sendo humilde e pegando ônibus com seus alunos.");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
   alert("simm!")
}
