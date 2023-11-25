function countNumber(){
    let result = document.getElementById('result-100');
    for(let i = 1; i <= 100; i++){
        result.innerHTML = i;
        console.log(i);
        if(i == 99){
            alert('ĐÃ HOÀN THÀNH'); break;
        }
    }
}