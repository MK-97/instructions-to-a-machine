
function diceroll_log(dicelog) {
    //initialize array
    //document.getElementById('test').innerHTML = '';
    
    var concat_log = [document.getElementById('test').innerHTML];
    concat_log.unshift(dicelog);
    
    document.getElementById('test').innerHTML = concat_log;
    return;
}

function rolldice(choice) {
    //generate number between 1 to choice
    var result = Math.floor((Math.random() * choice) + 1);
    
    // show result
    document.getElementById('probability').innerHTML = result;
    diceroll_log(result);
    return;
}

function reset() {
    document.getElementById('test').innerHTML = '';
    return;
}