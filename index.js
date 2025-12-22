 console.log("js connected")
 
 let firstCard =11;
 let secondCard =3;
 let sum = firstCard + secondCard;
 let cards = [firstCard , secondCard]
 let hasblackjack =false;
 let isAlive = true;
 let message =""
 let playel = document.getElementById("play-el")
console.log(playel)
let sumel = document.querySelector("#sum-el")
let cardel =document.getElementById("card-el")
function  startGame(){
   rendergame()
}



function rendergame(){

      if(sum<=20){
            message="Do you want to draw a new card?";

         }
         else if (sum==21){
            message="Wohoo you've won the blackjacck game.";
            hasblackjack=true;
         }
         else{
            message="You're out of the game.";
            isAlive=false; 
         }
         playel.textContent=message
         sumel.textContent=sum
         cardel.textContent=cards[0] + "," + cards[1]

         console.log(message);
         console.log(hasblackjack)
      }
      
      function newcard(){
        let card =2
        sum += card
        cards.push(card)
       console.log(cards)
        rendergame()
         cardel.textContent+= "," + card
         // console.log("draw a new card")
      }
      newcard()
   




      // if(sum<=20){
      //       console.log("do you want to draw a new card?");

      //    }
      //    else if (sum==21){
      //       console.log("wohoo you've won the blackjacck game.");
      //       hasblackjack=true;
      //    }
      //    else{
      //       console.log("You're out of the game.");
      //       isAlive=false;
            
      //    }
      //    console.log(isAlive);
 





 





