const cardArray= [
    {
        name:'fries',
        imge:'fries.png'
    },
    {
        name:'fries',
        imge:'fries.png'
    },{
       name:'cheeseburger',
       imge:'cheeseburger.png'
    },{
      name:'hotdog',
      imge:'hotdog.png'

    },{
        name:'ice-cream',
        imge:'ice-cream.png'

    },{
        name:'milkshake',
        imge:'milkshake.png'

    },{
        name:'pizza',
        imge:'pizza.png'
    }
    ,{
        name:'cheeseburger',
        imge:'cheeseburger.png'
     },{
       name:'hotdog',
       imge:'hotdog.png'
 
     },{
         name:'ice-cream',
         imge:'ice-cream.png'
 
     },{
         name:'milkshake',
         imge:'milkshake.png'
 
     },{
         name:'pizza',
         imge:'pizza.png'
     }

]

// shuffling an array randomely 
cardArray.sort(() =>  0.5 - Math.random());
console.log(cardArray);
const grid=document.querySelector('#grid');
let cardArrayName=[];
let cardArrayids=[];
const cardsWon=[];
const resultDisplay= document.getElementById('result');
console.log(grid);
function createBoard(){
    for (let i=0;i<cardArray.length;i++){
        const card =document.createElement('img');
        card.setAttribute('src','blank.png')
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        console.log(card);
        grid.appendChild(card);
    }
}
function checkMatch(){
    console.log("check for match");
    const cards=document.querySelectorAll('#grid img');
    const cardOptionOneID=cardArrayids[0];
    const cardOptionTwoID=cardArrayids[1];
    console.log(cardArray[0]);
    //console.log(cardArray[1]);
    // to avoid check for the same image twice 
    if (cardOptionOneID == cardOptionTwoID){
       
        cards[cardOptionOneID].setAttribute('src','blank.png');
        cards[cardOptionTwoID].setAttribute('src','blank.png');
        alert("you checked the same image");  
    }
    // to check if the image you checked in first the same in second 
    else if (cardArrayName[0] === cardArrayName[1]){
      alert('its a match');
      cards[cardOptionOneID].setAttribute('src','white.png');
      cards[cardOptionTwoID].setAttribute('src','white.png');
      cards[cardOptionOneID].removeEventListener('click',flipCard);
      cards[cardOptionTwoID].removeEventListener('click',flipCard);
      cardsWon.push(cardArrayName);
    }
    else {
        cards[cardOptionOneID].setAttribute('src','blank.png');
        cards[cardOptionTwoID].setAttribute('src','blank.png');
        alert('sorry try again! ):');
    }
    resultDisplay.textContent=cardsWon.length;
    cardArrayName=[];
    cardArrayids=[];
    if ( (cardArray.length/2) == cardsWon.length){
        resultDisplay.innerHTML='Congratulations! you find them ALL';
        
    }
}
function flipCard(){
   let cardId=this.getAttribute('data-id');
   
   console.log(cardArray[cardId]);
   cardArrayName.push(cardArray[cardId].name);
   cardArrayids.push(cardId);
   //console.log(cardArrayName);
   this.setAttribute('src',cardArray[cardId].imge);
   if (cardArrayName.length === 2){  setTimeout(checkMatch,500); //500ms 
}
 
}
createBoard();