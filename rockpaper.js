computer_choice='';
function comp(){
    let x=Math.floor(Math.random()*3);
    if(x===0){
        computer_choice='rock';
        comp_choice('#F083A2');
        return "rock";
    }
    if(x===1){
        computer_choice='paper';
        comp_choice('#C38EDC');
        return "paper";
    }
    if(x===2){
        computer_choice='scissors';
        comp_choice('#7FACFF');
        return "scissors";
    }
}   

function comp_choice(comp_color){
    let choicebyComp=document.querySelector('#computer');
    choicebyComp.textContent=computer_choice;
    choicebyComp.style.color=comp_color;
}


let userchoice='';
function user(){
     let rock=document.querySelector("#rock");
     let scissors=document.querySelector("#scissors");
     let paper=document.querySelector("#paper");
    
    rock.addEventListener('click',()=>{
        userchoice='rock';
        playgame();
        choices('#F083A2');
        
    });
    paper.addEventListener('click',()=>{
        userchoice='paper';
        playgame();
        choices('#C38EDC');
        
    });
    scissors.addEventListener('click',()=>{
        userchoice='scissors';
        playgame();
        choices('#7FACFF');
        
    });
    
   
   

}
    

function choices(user_color){
    let choicebyUser=document.querySelector('#user');
    
    choicebyUser.textContent=userchoice;
    choicebyUser.style.color=user_color;
    
}

let computer_score=0;
let user_score=0;
function playgame(){
   
    let result=document.querySelector('.result');
    let CompScoreDisplay=document.querySelector('#compscore');
    let UserScoreDisplay=document.querySelector('#userscore');
    user_Choice=userchoice;
    compChoice=comp();
   
    

    if(user_Choice==compChoice){
        result.textContent="It's a tie!";
        result.style.backgroundColor='grey';
        result.style.color='white';
        console.log('tie');
        
    }
    else if(
        (user_Choice==='rock' && compChoice==='scissors')||
        (user_Choice==='paper' && compChoice==='rock')||
        (user_Choice==='scissors' && compChoice==='paper')
    ){
        result.textContent="You Won";
        result.style.backgroundColor='lightgreen';
        result.style.color='white';
        user_score+=1;
        UserScoreDisplay.textContent=user_score;
        console.log('user wins');
        
    }
    else{
        result.textContent="Computer Won";
        result.style.backgroundColor='#FF6666';
        result.style.color='white';
        computer_score+=1;
        CompScoreDisplay.textContent=computer_score;
        console.log('computer wins');
       
    }
    console.log('your choice is:',user_Choice);
    console.log('computer choice is:',compChoice);
    
}

function reset(){
    let reset=document.querySelector('.reset');
    let result=document.querySelector('.result');
    let CompScoreDisplay=document.querySelector('#compscore');
    let UserScoreDisplay=document.querySelector('#userscore');
    let choicebyUser=document.querySelector('#user');
    let choicebyComp=document.querySelector('#computer');
    
    

    reset.addEventListener('click',()=>{
        CompScoreDisplay.textContent=0;
        UserScoreDisplay.textContent=0;
        choicebyComp.textContent='';
        choicebyUser.textContent='';
        result.textContent='Chose';
        result.style.backgroundColor='white';
        result.style.color='#3f3f3f';
        computer_score=0;
        user_score=0;

        
        
        
    })
}



user();
reset();
let result=document.querySelector('.result');