var eval_string = '';
var displayval;
var decimal = false;
var op = false;
var neg = false;

window.onload = function(){
    
    var clearbtn = document.getElementById('clear');
    var numbtns = document.getElementsByClassName('btn-num');
    var opbtns = document.getElementsByClassName('btn-ops');
    var displayscr = document.getElementById('display');
    var decimalbtn = document.getElementById('dec');
    var eqbtn = document.getElementById('equal')
    
    // establish event listners
    clearbtn.addEventListener('click', clear, false);
    decimalbtn.addEventListener('click', addDecimal, false);
    eqbtn.addEventListener('click', evaluate, false);
    
    for(var x = 0; x < numbtns.length; x++){
            numbtns[x].addEventListener('click', displayUpdate, false);
    }
    for(var x = 0; x < opbtns.length; x++){
            opbtns[x].addEventListener('click', do_Op, false);
    }
    
    
} // end of onload

function addDecimal(){
    if (decimal)
        return;
    
    displayval += '.';
    eval_string +='.';
    display.innerHTML += '.';
    
    decimal = true;
}

function clear(){
    displayval = '0';
    eval_string = '';
    display.innerHTML = displayval;
    decimal = false;
    op = false;
    neg = false;
    
} // end of clear

function displayUpdate(input){
    
    var btnval = input.target.innerHTML;
    displayval = display.innerHTML;
    
    if(displayval === '0' || op && !neg){
        displayval = '';
    }
    
    eval_string += btnval;
    displayval += btnval;
    
    console.log(displayval);
    
    display.innerHTML = displayval;
    
    op = false;
    neg = false;
    
} // end of displayUpdate

function do_Op(input){
    var opval = input.target.innerHTML;
    
    
    if(op)
        return;
    
    if(opval === '-' && eval_string === ''){
        display.innerHTML = opval;
        displayval += opval;
        neg = true;
    }
    
    eval_string += opval;
    //display.innerHTML = '0';
    
    op = true;
}

function evaluate(){
    var result = eval(eval_string);
    display.innerHTML = result;
}