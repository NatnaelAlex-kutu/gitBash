const player=document.querySelector('#play') 
const timer=document.querySelector('#counter') 
const reset=document.querySelector('#reset') 

var counter=0
function stopwatch(){
    counter+=1
    timer.innerHTML=counter
    
 }

player.addEventListener('click',function(){
    
     setInterval(stopwatch, 1000);
    
})
reset.addEventListener('click',()=>{
    counter=0
    
})

