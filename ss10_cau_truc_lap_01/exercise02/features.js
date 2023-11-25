function checkPrime(numbers){
    if(numbers < 2) return 0;
    for(let i = 2; i <= Math.sqrt(numbers); i++){
        if(numbers % i == 0){
            return 0;
        }
    }
    return 1;
}
function showResult(){
let numbers = +document.getElementById('number').value;
let count = 0;
let i = 2;
    while(count < numbers){
        if(checkPrime(i)){
            document.write(i, "<br>");
            count++;
        }
        i++;
    }
}