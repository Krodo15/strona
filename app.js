var pierwiastki = [];
var y = 0;
container = document.getElementsByClassName("symbol");

for(x = 0; x < container.length; x++){
    if(container[x].textContent != "DE"
    && container[x].textContent != "DEL"  
    && container[x].textContent != "57-71" 
    && container[x].textContent != "89-103"){
    pierwiastki[y] = container[x].textContent;
    y++;
    }
}
for(x = 0; x < pierwiastki.length; x++){
    console.log("x:" + x + "," + pierwiastki[x]);
}
