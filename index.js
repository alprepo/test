//Ваш код будет здесь
window.addEventListener('load',function(){
    var button = document.querySelector(".startNewGame");
    var field =document.querySelector(".field");
    var cells = document.querySelectorAll(".cell");
    var winnerMessage = document.querySelector(".winner-message");

    var nextMove='x';

    button.addEventListener("click", function startNewGame(){
        for(var i=0; i<cells.length; i++){
            cells[i].classList.remove("x");
            cells[i].classList.remove("o");
        }
        nextMove='x';
        winnerMessage.innerHTML = '';
    });
    field.addEventListener("click", function handleSendClick(e){
        //console.log('rgtgrtg');
        if(!e.target.classList.contains("cell") || e.target.classList.contains("o") || e.target.classList.contains("x")){
            return;
        }
        console.log(getWinner());
        if(getWinner()){
            return;
        }
        e.target.classList.add(nextMove);
        if(nextMove==="x")
            nextMove="o";
        else
            nextMove="x";
        var winner = getWinner();
        if(winner){
            if(winner==='x')
                winnerMessage.innerHTML="Хрестик переміг";
            else
                winnerMessage.innerHTML="Нолик переміг";
        }
    })

});