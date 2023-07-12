let cards=[]; //array-ordered list of items
let sum = 0;
let hasblckjack=false;
let isAlive=false;
let message="";

let message_El=document.getElementById("message-el");
let sum_El=document.getElementById("sum-el");
let cards_El=document.getElementById("cards-el");


let player={
    Name:"per",
    chips:145,
    
}


let playerEl=document.getElementById("player-el");
playerEl.textContent=player.Name + ": $" +player.chips;
function getRandomCard()
{
    let random= Math.floor(Math.random()* 13) +1;
    if(random===1){return 11;}
    else if(random>10){
        return 10;
    }
    else {
        return random;
    }
}

function startgame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    rendergame();
}
function rendergame()
{
    
    cards_El.textContent="cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cards_El.textContent+=cards[i]+" ";
    }

    sum_El.textContent="sum : "+sum;
    if (sum <= 20) {
        message="do you want to draw a new card";
         
      } else if (sum === 21) {
          message ="wehoo you've got blackjack";
         hasblckjack=true;
         
      } 
      else {
          message ="you are out of the game";
          isAlive=false;
          
      }
      message_El.textContent=message;
}

function newcard()
{
    if(isAlive===true && hasblckjack===false)
    {
        let card=getRandomCard();
        sum+=card;
        cards.push(card);
         console.log(cards);
          rendergame();
    }
}




//arrays-ordered lists of items
