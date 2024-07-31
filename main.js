function display(value){
    document.getElementById("result").value+=value;
}

function calculator(){

  var p =  document.getElementById("result").value;
  var m = eval(p);
  document.getElementById("result").value=m;

}

function clearScreen(){

document.getElementById("result").value="";



}

function bk(){

var amo=document.getElementById("result").value;
var malli=amo.slice(0,-1);
document.getElementById("result").value=malli;

}





