var startPoint = "x";
var remis =  0;
var p = [1,2,3,4,5] ;
console.log(p[2]);
table.addEventListener("click", clickField);
function clickField(e){
    remis++;
    if (e.target.innerHTML == ""){
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
  
   win1 = p[1]+p[2]+p[3];
   win2 = p[4]+p[5]+p[6];
   win3 = p[7]+p[8]+p[9];
   win4 = p[1]+p[4]+p[7];
   win5 = p[2]+p[5]+p[8];
   win6 = p[3]+p[6]+p[9];
   win8 = p[1]+p[5]+p[9];
   win7 = p[3]+p[5]+p[7];
   console.log(win1);
   
   if(win1 == "xxx"){
    console.log(win1) ;
   }
    if(win1 == "xxx"){
        for(x=1 ; x<4 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win2 == "xxx"){
        for(x=4 ; x<7 ; x++){
            console.log("x: "+x);
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px";><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win3 == "xxx"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win4 == "xxx"){
        for(x=1 ; x<8 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win5 == "xxx"){
        for(x=2 ; x<9 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win6 == "xxx"){
        for(x=3 ; x<10 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win7 == "xxx"){
        for(x=3 ; x<8 ; x+= 2){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win8 == "xxx"){
        for(x=1 ; x<10 ; x+= 4){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KRZYŻYKI!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }





    if(win1 == "ooo"){
        for(x=1 ; x<4 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px";><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win2 == "ooo"){
        for(x=4 ; x<7 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win3 == "ooo"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win4 == "ooo"){
        for(x=1 ; x<8 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win5 == "ooo"){
        for(x=2 ; x<9 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win6 == "ooo"){
        for(x=3 ; x<10 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win7 == "ooo"){
        for(x=3 ; x<8 ; x+= 2){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;"><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
    if(win8 == "ooo"){
        for(x=1 ; x<10 ; x+= 4){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px";><h1>WYGRAŁY KÓŁKA!!!</h1></div>' ;
        table.removeEventListener("click",clickField) ;
        document.getElementById("resetButton").className = "visible resetButton";
    }

    if(remis == 9){
        document.getElementById("info").innerHTML = '<div style="font-size:70px";><h1>REMIS!!!</h1></div>' ;
        remis = 0 ;
        document.getElementById("resetButton").className = "visible resetButton";
    }
}

resetButton.addEventListener("click",reset) ;
function reset(e){
     for(x=1 ;x< 10 ; x++ ){
        p[x] = document.getElementById("p"+x).innerHTML = "";
     }
    document.getElementById("info").innerHTML = "";
    document.getElementById("resetButton").className = "hide resetButton ";
    table.addEventListener("click",clickField);
    startPoint = "x";
    remis = 0;

}


