var winningCombos =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]; //all winning combinations
var old_color;
var turn = 0;           //tracks the turns played
var player = 'blue';
var winner;

var fieldsBlue = [];
var fieldsRed = [];

//checks if a player won
var isWon = function(){    
    winningCombos.forEach(function(e){
        console.log(fieldsBlue.includes(e[0],e[1],e[2]))
        var check = ( fieldsBlue.includes(e[0]) && fieldsBlue.includes(e[1]) && fieldsBlue.includes(e[2]) || fieldsRed.includes(e[0]) && fieldsRed.includes(e[1]) && fieldsRed.includes(e[2]) );
        if(check){
            winner = player;
        }
    })
}
//change the next player field
var changePlayer= function(){
    $('.player').text( player.toUpperCase() + ' PLAYERS TURN' );
    $('.player').css({ 'background-color' : player });
}

$(Document).ready(function(){
    $('.field').click(function(){
        if($(this).attr('class').split(' ').length < 3){
            $(this).addClass(player);
            a = $(this).attr('class').split(' ')[1]
            old_color = player;
            turn++;
            if(player == 'blue'){               
                fieldsBlue.push(parseInt($(this).attr('class').split(' ')[1]));
                isWon();
                player = 'red';
            }
            else{                
                fieldsRed.push(parseInt($(this).attr('class').split(' ')[1]));
                isWon();
                player = 'blue';
            }
            if(winner != undefined){
                alert(winner.toUpperCase() + " WON!!!");
                location.reload();
            }
            console.log(turn == 9)
            if(turn == 9){
                alert("DRAW");
                location.reload();
            }
            changePlayer();    
        }  
        else{
            alert('Feld schon besetzt');
        }      
    })

    $(".field").bind('mouseover', function() {
        old_color = $(this).css("background-color");
        $(this)[0].style.backgroundColor = player;    
        $(".field").bind('mouseout', function () {
            $(this)[0].style.backgroundColor = old_color;                        
        });
    });

    $('.reset').click(function(){
        location.reload();
    })
})



