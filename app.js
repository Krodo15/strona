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


//    p1 = document.getElementById("p1").innerHTML;
//    p2 = document.getElementById("p2").innerHTML;
//    p3 = document.getElementById("p3").innerHTML;
//    p4 = document.getElementById("p4").innerHTML;
//    p5 = document.getElementById("p5").innerHTML;
//    p6 = document.getElementById("p6").innerHTML;
//    p7 = document.getElementById("p7").innerHTML;
//    p8 = document.getElementById("p8").innerHTML;
//    p9 = document.getElementById("p9").innerHTML;
   
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
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win2 == "xxx"){
        for(x=4 ; x<7 ; x++){
            console.log("x: "+x);
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px";>WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win3 == "xxx"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win4 == "xxx"){
        for(x=1 ; x<8 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win5 == "xxx"){
        for(x=2 ; x<9 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win6 == "xxx"){
        for(x=3 ; x<10 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win7 == "xxx"){
        for(x=3 ; x<8 ; x+= 2){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win8 == "xxx"){
        for(x=1 ; x<10 ; x+= 4){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        table.removeEventListener("click",clickField) ;
    }





    if(win1 == "ooo"){
        for(x=1 ; x<4 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px";>WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win2 == "ooo"){
        for(x=4 ; x<7 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime";>o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win3 == "ooo"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win4 == "ooo"){
        for(x=1 ; x<8 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win5 == "ooo"){
        for(x=2 ; x<9 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win6 == "ooo"){
        for(x=3 ; x<10 ; x+= 3){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win7 == "ooo"){
        for(x=3 ; x<8 ; x+= 2){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }
    if(win8 == "ooo"){
        for(x=1 ; x<10 ; x+= 4){
            document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
        }
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        table.removeEventListener("click",clickField) ;
    }

    if(remis == 9){
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">REMIS</div>' ;
        remis = 0 ;
    }
}

resetButton.addEventListener("click",reset) ;
function reset(e){
    
    document.getElementById("p1").innerHTML = "" ;
    document.getElementById("p2").innerHTML = "" ;
    document.getElementById("p3").innerHTML = "" ;
    document.getElementById("p4").innerHTML = "" ;
    document.getElementById("p5").innerHTML = "" ;
    document.getElementById("p6").innerHTML = "" ;
    document.getElementById("p7").innerHTML = "" ;
    document.getElementById("p8").innerHTML = "" ;
    document.getElementById("p9").innerHTML = "" ;
    document.getElementById("info").innerHTML = "";
    table.addEventListener("click",clickField) ;
    remis = 0 ;
    startPoint = "x" ;
}


