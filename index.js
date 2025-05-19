function dice(){
     var num1 = Math.floor(Math.random()*6)+1;
     var num2 = Math.floor(Math.random()*6)+1;
     var srcchnge1 =document.querySelector(".player1 img");
     var srcchnge2 =document.querySelector(".player2 img");
     srcchnge1.src= "https://raw.githubusercontent.com/Singhashish-commits/DiceGame/main/inverted-dice-"+num1+".png";
     srcchnge2.src= "https://raw.githubusercontent.com/Singhashish-commits/DiceGame/main/inverted-dice-"+num2+".png";
     var heading = document.querySelector("h1");
     if(num1>num2){
        heading.textContent="player1 win";
     }
     else if(num2>num1){
        heading.textContent="Player 2 win";
     }
     else {
        heading.textContent="Draw, let's Try again";
     }
       
}






