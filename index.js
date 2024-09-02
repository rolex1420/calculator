let number=document.querySelectorAll(`.number`);
let numberbox=document.getElementById("value");
let firstNumber=0,secondNumber=0,operaterSine="";
number.forEach(button=>{
    console.log("button.innerText");
    button.addEventListener("click",()=>{
        if(operaterSine==""){
    firstNumber=parseInt(firstNumber*10)+parseInt(button.value);
    numberbox.value=firstNumber;
        }else{
            secondNumber=parseInt(secondNumber*10)+parseInt(button.value);
            numberbox.value=secondNumber;
        }
})
})

let operater=document.querySelectorAll(`.operater`);
operater.forEach(sine=>{
    sine.addEventListener("click",()=>{
        console.log(sine.innerText);
        operaterSine=sine.innerText;
    })
})

let equale=document.getElementById("=");
equale.addEventListener("click",()=>{
    claculation();
})
function claculation(){
    if(operaterSine==="+"){
        firstNumber=parseInt(firstNumber)+parseInt(secondNumber);
        numberbox.value=firstNumber;
        operaterSine="";
        secondNumber=0;
    }else if(operaterSine==="-"){
        firstNumber=parseInt(firstNumber)-parseInt(secondNumber);
        numberbox.value=firstNumber;
        operaterSine="";
        secondNumber=0
    }else if(operaterSine==="*"){
        firstNumber=parseInt(firstNumber)*parseInt(secondNumber);
        numberbox.value=firstNumber;
        operaterSine="";
        secondNumber=0;
    }else if(operaterSine==="/"){
        firstNumber=parseInt(firstNumber)/parseInt(secondNumber);
        numberbox.value=firstNumber;
        operaterSine="";
        secondNumber=0;
    }
}

let crose=document.getElementById("crose");
crose.addEventListener("click",()=>{
    firstNumber=parseInt(firstNumber/10);
    numberbox.value=firstNumber;
})

    