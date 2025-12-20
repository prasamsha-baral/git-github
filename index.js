 let firstcard =11;
 let secondcard =10;
 let sum = firstcard + secondcard
 console.log(sum)

//  if (sum > 21){
//     console.log ("you lost")
//  }
//  else if (sum < 21){
//     console.log("do you want to draw a card ?")
//  }
//  else if (sum ==21){
//     console.log("wohoo you've won the blackjacck game.")
//  }
 if(sum<=20){
        console.log("do you want to draw a new card?")
    }
    else if (sum==21){
        console.log("wohoo you've won the blackjacck game.")
    }
    else{
        console.log("You're out of the game.")
    }


 let age =20
 if (age<21){
    console.log("sorry ! you cant enter the club.")
 }
 else{
    console.log("Welcome !")
 }

 let age1=101
 if (age1<100){
    console.log("Sorry NOT elegible.")
 }
 else if (age1==100){
    console.log("Here is your birthday card from the king !")
 }
 else{
    console.log("Not elegible , You already gotten one.")
 }

//  Boolean

  let hasdiscountcode =true
  function order(){
  if (hasdiscountcode){
    console.log("discount applied.")
    hasdiscountcode=false
  }
  else{
    console.log("No discount applied.")
  }
}
order()
order()