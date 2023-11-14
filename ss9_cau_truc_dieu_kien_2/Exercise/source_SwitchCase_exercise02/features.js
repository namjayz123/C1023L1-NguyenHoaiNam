function ShowResult(){
    let input = +document.getElementById('input').value;
    switch (input) {
        case 1: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 2: document.getElementById('result').innerText = 'Tháng ' + input + ' có 28 hoặc 29 ngày'; break;
        case 3: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 4: document.getElementById('result').innerText = 'Tháng ' + input + ' có 30 ngày'; break;
        case 5: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 6: document.getElementById('result').innerText = 'Tháng ' + input + ' có 30 ngày'; break;
        case 7: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 8: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 9: document.getElementById('result').innerText = 'Tháng ' + input + ' có 30 ngày'; break;
        case 10: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        case 11: document.getElementById('result').innerText = 'Tháng ' + input + ' có 30 ngày'; break;
        case 12: document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'; break;
        default: document.getElementById('result').innerText = 'Không hợp lệ vui lòng nhập lại'; break;
    }
}