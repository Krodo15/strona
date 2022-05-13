var startPoint = "x";
var remis =  0;
var p = [1,2,3,4,5] ;
var wygrana = []
table.addEventListener("click", clickField);
function clickField(e){
    
    if (e.target.innerHTML == ""){
        remis++;
        e.target.innerHTML = startPoint;
        if (startPoint == "x"){
            startPoint = "o";
        }
        else{
            startPoint = "x";
    }
   
   }

for(x=1; x<10 ; x++){
    p[x] = document.getElementById("p"+x).innerHTML;
}
  
   function getElementP(elem,what){
       document.getElementById("p"+elem).innerHTML = '<div style="color:lime;">'+what+'</div>'
       console.log (elem+" "+what)
   }
   function getResult(info){
       document.getElementById("result").innerHTML = info;
   }
   function wygranaGry(x,kto,par1,par2,par3){
    // x - unikalny identyfikator,
    // jaka kofiguracja wygrywa,
    // par1,par2,par3 - pola, które wygrywają
    wygrana[x]=p[par1] + p[par2] + p[par3];

    if (wygrana[x]== kto){
        if (kto == "xxx"){
            getElementP(par1,"x");
            getElementP(par2,"x");
            getElementP(par3,"x");
            getResult('<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>');
            document.getElementById("resetButton").className = "visible resetButton";
            table.removeEventListener("click",clickField)
        }
        if(kto == "ooo"){
            getElementP(par1,"o")
            getElementP(par2,"o")
            getElementP(par3,"o")
            getResult('<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>');
            document.getElementById("resetButton").className = "visible resetButton";
            table.removeEventListener("click",clickField)

        }
        table.removeEventListener("click".clickField);
        resetTable.disabled = false;
            
    }
   }
   
wynik = []
wynik[1] = "xxx";
wynik[2] = "ooo";

for(x=1;x<3;x++){
    wygranaGry(1,wynik[x],1,2,3);
    wygranaGry(2,wynik[x],4,5,6);
    wygranaGry(3,wynik[x],7,8,9);
    wygranaGry(4,wynik[x],1,4,7);
    wygranaGry(5,wynik[x],2,5,8);
    wygranaGry(6,wynik[x],3,6,9);
    wygranaGry(7,wynik[x],1,5,9);
    wygranaGry(8,wynik[x],3,5,7);
}

    if(remis == 9){
        document.getElementById("info").innerHTML = '<div style="font-size:70px";><h1>REMIS!!!</h1></div>' ;
        remis = 0 ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
}

resetButton.addEventListener("click",resetTable) ;
function resetTable(e){
     for(x=1 ;x< 10 ; x++ ){
        p[x] = document.getElementById("p"+x).innerHTML = "";
     }
        
    document.getElementById("info").innerHTML = "";
    document.getElementById("resetButton").className = "visible resetButton";
    table.addEventListener("click",clickField);
    startPoint = "x";
    remis = 0;


}

