 console.log("js connected")
 
 let firstCard =getrandomcard()
 let secondCard =getrandomcard()
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

function getrandomcard(){
   return Math.round(Math.random()*10)  
}


function rendergame(){
   cardel.textContent = "" ;
   for (let i=0;i<cards.length;i++){
            cardel.textContent +=cards[i] + "," 
         }
         sumel.textContent=sum

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
         console.log(message);
         console.log(hasblackjack)
      }
      
      function newcard(){
         if (!isAlive){exit()}
        let card =getrandomcard()
        sum += card
        cards.push(card)
       console.log(cards)
      rendergame()

         // cardel.textContent += "," + card
         // console.log("draw a new card")
      }
     
   


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
 





 





