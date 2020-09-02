
/*------------------------------------------------------*/
setInterval(c,1000);
function c(){
    var a= new Date();
    var h= a.getHours();
    var m =a.getMinutes();
    var s = a.getSeconds();

    var ap = (h > 12)? "PM" : "AM";
    h = (h > 12)? (h-12) : h;

    if(h<10){
        h= "0" + h;
    }

    if(m<10){
        m= "0" + m;
    }

    if(s<10){
        s= "0" + s;
    }
    document.querySelector(".three").innerHTML = h + ":" + m + ":" + s+" " +ap;
}  
c();  
/*-----------------------------------------------------------*/
setInterval(dte,1000);
function dte(){
    var dt = new Date();
    var date_final = dt.getDate();
    if ( date_final < 10)
    {
        date_final='0'+date_final;
    }
    document.querySelector(".dte").innerHTML = date_final;
}
dte();

/*-----------------------------------------------------------*/

function monyear(){
    var mon = new Date();
    var m=mon.getMonth();
    switch(m){
            case 0: m ="January";
                        break;
            case 1: m ="February";
                        break;
            case 2: m ="March";
                        break;
            case 3: m ="April";
                        break;  
            case 4: m ="May";
                        break;   
            case 5: m ="June";
                        break;  
            case 6: m ="July";
                        break;
            case 7: m ="August";
                        break;   
            case 8: m ="September";
                        break;  
            case 9: m ="October";
                        break;  
            case 10: m ="November";
                        break;  
            case 11: m ="December";
                        break;   
        }
    var y= mon.getFullYear();

    if (m.length > 5){
        document.querySelector(".one").innerHTML = m + "," + "<br>" + y;
    }
    
}
monyear();

/*------------------------------------------------------------*/
document.querySelector(".goal").addEventListener('click',function(){
    document.querySelector(".add input").style.display = "block";
    document.querySelector(".add button").style.display = "block";

})
/*------------------------------------------------------------*/
function insert(){
    document.querySelector(".add input").style.display = "none";
    document.querySelector(".add button").style.display = "none";
    var an = document.querySelector(".insert").value;
    document.querySelector(".todo").style.display="block";
    document.querySelector(".todo").innerHTML = an;
}

document.querySelector(".add button").addEventListener('click',insert);









