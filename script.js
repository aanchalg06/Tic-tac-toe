console.log('Welcome to Tic Tac Toe')
// let y = [1,2,3];
//     y.forEach((e)=>e +=2)
//     console.log(y)
let music=new Audio("music.mp3")
let Audioturn =new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn="X";
let over= false;


//X to 0/ 0 to X
const changeturn = ()=>{

    return turn ==="X"?"0" : "X"
}

//Function to check win
const Checkwin=()=>{

    let boxtext=document.getElementsByClassName('boxtext');

    console.log(boxtext);

    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            over=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="250px";

            gameover.play();

            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
        }
    })
}

//main logic
let boxes= document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');

    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            Audioturn.play();
            Checkwin();

            if(!over){
            document.getElementsByClassName("info")[0].innerHTML= "Turn for "+ turn;}
        }
    })
})

//add onclick listener to reset button
reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=""
    });
    turn="X";
    over=false;

    document.getElementsByClassName("info")[0].innerHTML= "Turn for "+ turn;

    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
})