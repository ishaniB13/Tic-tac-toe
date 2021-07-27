function initiate() {
    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "X";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start.");
    document.getElementById("b1").style.color = "#fff ";
    document.getElementById("b2").style.color = "#fff ";
    document.getElementById("b3").style.color = "#fff ";
    document.getElementById("b4").style.color = "#fff ";
    document.getElementById("b5").style.color = "#fff ";
    document.getElementById("b6").style.color = "#fff ";
    document.getElementById("b7").style.color = "#fff ";
    document.getElementById("b8").style.color = "#fff ";
    document.getElementById("b9").style.color = "#fff ";
}

function setMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function nextMove(box) {
    if (document.winner != null) {
        setMessage(document.winner + " Already Won the Game!");
    } else if (box.textContent == "") {
        box.textContent = document.turn;
        switchTurn();
    } else {
        setMessage("That Square is Already Used.")
    }
}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Congratulations " + document.turn + "! You Win!");
        document.winner = document.turn;
    } else
    if (CheckforTie()) {
        setMessage("Its a TIE! Play again!");
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;

    }
    return result;

}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
        document.getElementById("b" + a).style.color = "white"
        document.getElementById("b" + b).style.color = "white"
        document.getElementById("b" + c).style.color = "white"
        document.getElementById("b" + a).style.backgroundColor = "#dc685a"
        document.getElementById("b" + b).style.backgroundColor = "#dc685a"
        document.getElementById("b" + c).style.backgroundColor = "#dc685a"
    }
    return result;
}

function getBox(number) {
    return document.getElementById("b" + number).textContent;
}

function clearBox(number) {
    document.getElementById("b" + number).textContent = "";
    document.getElementById("b" + number).style.backgroundColor = "#78bec5"
}

function CheckforTie() {
    for (var i = 1; i < 10; i++) {

        if (getBox(i) == "")
            return false;
    }
    return true;
}