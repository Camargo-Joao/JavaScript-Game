//variáveis

var andar = document.getElementById("object")
var mario = document.querySelector(".img")
var caldeirao = document.getElementById("caldeirao")
var esqueleto = document.getElementById("esqueleto")
var casa = document.getElementById("casa")
var arvore = document.getElementById("arvore")
var chao = document.getElementById("chao")
var c = chao.offsetLeft
var a = arvore.offsetLeft
var z = casa.offsetLeft
var x = andar.offsetLeft
var y = caldeirao.offsetLeft

//apertar teclas
window.addEventListener("keydown", function(event){
    var tecla = event.keyCode
    //samurai
    if(tecla == "39" && x >=0 && x<950){
        x=x+10
        andar.style.left=x+"px"
        mario.classList.remove("img_left")
        mario.classList.add("img")
        mario.classList.add("walk")
    }
    if(tecla == "37" && x >0 && x<=950){
        x=x-10
        andar.style.left=x+"px"
        mario.classList.remove("img")
        mario.classList.add("img_left")
        mario.classList.add("walk")
    }
    //caldeirao
    if(tecla=="39" && x == 950){
        y=y-10
        caldeirao.style.left=y+"px"
    }
    if(tecla=="37" && x == 0 ){
        y=y+10
        caldeirao.style.left=y+"px"
    }
    //casa
    if(tecla=="39" && x == 950){
        z=z-3
        casa.style.left=z+"px"
    }
    if(tecla=="37" && x == 0 ){
        z=z+3
        casa.style.left=z+"px"
    }
    //arvores
    if(tecla=="39" && x == 950){
        a=a-0.5
        arvore.style.left=a+"px"
    }
    if(tecla=="37" && x == 0 ){
        a=a+0.5
        arvore.style.left=a+"px"
    }
    //chao
    if(tecla=="39" && x == 950){
        c=c-1
        chao.style.left=c+"px"
    }
    if(tecla=="37" && x == 0 ){
        c=c+1
        chao.style.left=c+"px"
    }
    //habilidades
    if(tecla == "83"){
        mario.setAttribute("class", "fumaca")
        this.setTimeout(function(){
            mario.classList.remove("fumaca")
            mario.setAttribute("class","img")
        },500)
    }
    if(tecla == "65"){
        mario.setAttribute("class", "atacar")
        this.setTimeout(function(){
            mario.classList.remove("atacar")
            mario.setAttribute("class","img")
        },1350)
    }
    if(tecla=="38"){
        andar.classList.add("pulo")
            this.setTimeout(function(){
                andar.classList.remove("pulo")
            },700)
    }
    if(tecla=="87"){
        mario.classList.add("special1")
        mario.classList.remove("special2")
        mario.classList.remove("special3")
    }
    if(tecla=="81"){
        mario.classList.add("special2")
        mario.classList.remove("special1")
        mario.classList.remove("special3")
    }
    if(tecla=="69"){
        mario.classList.add("special3")
        mario.classList.remove("special1")
        mario.classList.remove("special2")
    }
    if(tecla=="82"){
        mario.classList.remove("special1")
        mario.classList.remove("special2")
        mario.classList.remove("special3")
    }

    //interações 
    if(tecla == "65" && x>=820 && x<=920){ 
        this.setTimeout(function(){
            esqueleto.classList.add("fumaca")
            this.setTimeout(function(){
                esqueleto.classList.add("morrer")
            },500)                    
        }, 1000)
    }
    console.log(x)
})


//soltar teclas
window.addEventListener("keyup", function(event){
    var tecla= event.keyCode
    if(tecla == "39"){
       
       mario.setAttribute("class","img") 
    }
    if(tecla == "37"){
      
         mario.setAttribute("class","img_left") 
     }
    
})




