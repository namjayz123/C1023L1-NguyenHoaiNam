function showResult1(){
    let result = document.getElementById('result-1');
    let myColor = ["Red", "Green", "White", "Black"];
    result.innerHTML = myColor.toString();
}
function showResult2(){
    let result = document.getElementById('result-2');
    let input = document.getElementById('input').value;
    let str = input.toString();
    let answer = [str[0]];
    for(let i = 1; i < str.length; i++){
        if((str[i -1] % 2 === 0) && (str[i] % 2 === 0)){
            answer.push('-', str[i]);
        }
        else{
            answer.push(str[i]);
        }
    }
    result.innerHTML = answer.join('');
}
function showResult3(){
    let result = document.getElementById('result-3');
    let input = document.getElementById('input-2').value;
    let answer = [];
    let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Lower = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < input.length; i++){
        if(Upper.indexOf(input[i]) !== -1){
            answer.push(input[i].toLowerCase());
        }
        else if(Lower.indexOf(input[i]) !== -1){
            answer.push(input[i].toUpperCase());
        }
        else{
            answer.push(input[i]);
        }
    }
    result.innerHTML = answer.join('');
}