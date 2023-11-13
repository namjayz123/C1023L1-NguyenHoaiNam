function ShowResult(){
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let bmi = weight / (height * height);
    if(bmi < 18.5){
        document.getElementById('result').innerText = 'Result: ' + bmi +  ' cân nặng thấp';
    }
    else if(bmi >= 18,5 && bmi < 25){
        document.getElementById('result').innerText = 'Result: ' + bmi + ' bình thường';
    }
    else if(bmi >= 25 && bmi < 30){
        document.getElementById('result').innerText = 'Result: ' + bmi + ' tiền béo phì';
    }
    else if(bmi >= 30 && bmi < 35){
        document.getElementById('result').innerText = 'Result: ' + bmi + ' béo phì I';
    }
    else if(bmi >= 35 && bmi < 40){
        document.getElementById('result').innerText = 'Result: ' + bmi + ' béo phì II';
    }
    else{
        document.getElementById('result').innerText = 'Result: ' + bmi + ' béo phì III';
    }
}