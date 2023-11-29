
function showResult(){
    let arr = [-3, 5, 1, 3, 2, 10];
    let input = +document.getElementById('input').value;
    let result = document.getElementById('result');
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(input == arr[i]){
            result.innerHTML = "Value " + arr[i] + " found at " + i;
            count++;
        }
    }
    if(count == 0){
        result.innerHTML = "Your Value not found";
    }
}