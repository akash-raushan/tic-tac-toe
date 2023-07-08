console.log("WELCOME TO TIC TAC TOE")
// let music= new Audio("Audio.mp3")
// let audioTurn= new Audio("turn.mp3")
// let gameover= new Audio("gameover.mp3")
let isgameover=false

let turn="X"

const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +' won'
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="150px"
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width="20vw"
        }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if (boxtext.innerText===''){
            boxtext.innerText=turn
            turn = changeTurn()
            // audioTurn.play()
            checkwin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn For "+ turn
            }
        }
    })
})


// listener on reset
reset.addEventListener("click",(e) =>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText=''
    })
    turn='X'
    isgameover=false
    document.querySelector('.line').style.width="0vw"
    document.getElementsByClassName("info")[0].innerText="Turn For "+ turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="00px"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="00px"
})
