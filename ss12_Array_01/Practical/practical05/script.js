let b = document.getElementById('caroGame');
let board = [];
let data = "";
for(let i = 0; i < 5; i++){
    board[i] = new Array(0, 0, 0, 0, 0);
}

for(let i = 0; i < 5; i++){
    data += "<br>";
    for(let j = 0; j < 5; j++){
        data +=board[i][j] + "&nbsp;&nbsp";
    }
}

b.innerHTML = data;

function ShowResult(){
    let posX = +prompt("X: ");
    let posY = +prompt("Y: ");
    let data = "";
    board[posX][posY] = 'x';
    for(let i = 0; i < 5; i++){
        data += "<br>";
        for(let j = 0; j < 5; j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML = data;
}
