function showResult(){
    let eng = ["banana", "apple", "orange", "water", "hot"];
    let vie = ["Chuối", "Táo", "Cam", "Nước", "Nóng"];
    let input = document.getElementById('input').value;
    let result = "";
    let index = 0;
    for(let i = 0; i < eng.length; i++){
        if(input == eng[i]){
            index = i;
            for(let j = 0; j < vie.length; j++){
                if(index == j){
                    result = vie[j];
                }
            }
        }
    }
    document.getElementById('result').innerHTML = result;
}