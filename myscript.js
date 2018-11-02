function display(input){
    
    var orangebox = document.getElementsByClassName('box');
    
    var equation = orangebox[0].innerHTML;
    
    equation = equation.concat(input);
    
    orangebox[0].innerHTML = equation;
}

function operation(){
    
    
}

