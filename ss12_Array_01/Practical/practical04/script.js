function showResult(){
    let result = document.getElementById('result');
    let arr = [-3, 5, 1, 3, 2, 10];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    result.innerHTML = "Max number is: " + max;
}