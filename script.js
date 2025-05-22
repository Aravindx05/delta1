let gameseq=[];
let userseq=[];
let btns=["yellow","green","purpule","red"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
     started=true;  
     levelup(); 
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
 function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randindx=Math.floor(Math.random()*3);
    let rancolor=btns[randindx];
    let randbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    btnflash(randbtn);
 }

function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game over!your score was <b>${level}</b><br> press Any key to start`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();    
    }
}

 function btnpress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);

 }
let albtns=document.querySelectorAll(".btn");
for(btn of albtns){
    btn.addEventListener("click",btnpress);

}


function reset(){
    started=false;
    gameseq=[];
    userseq=[]; 
    level=0;
}







// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let input=document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=input.value;

//     let btndel=document.createElement("button");
//     btndel.innerText="delete";
//     btndel.classList.add("delete");
    
//     item.appendChild(btndel);
//     ul.appendChild(item);
//     input.value="";
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listitem=event.target.parentElement;
//         listitem.remove();
//     }
// });

    // let btndels=document.querySelectorAll(".delete");
    // for(btndel of btndels){
    // btndel.addEventListener("click",function(){
    //     let par=this.parentElement;
    //     par.remove();
    // })
    // }

    // lets build a game