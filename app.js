//Input  field

const input = document.querySelector("#input");

//Button click and render on input field

document.querySelector('#zero').addEventListener('click' , ()=>{
    input.value+=0;
})

document.querySelector("#one").addEventListener('click' , ()=>{
    input.value+=1;
})

document.querySelector('#two').addEventListener('click' , ()=>{
    input.value+=2;
})

document.querySelector("#three").addEventListener('click' , ()=>{
    input.value+=3;
})

document.querySelector('#four').addEventListener('click' , ()=>{
    input.value+=4
})

document.querySelector("#five").addEventListener('click' , ()=>{
    input.value+=5;
})

document.querySelector("#six").addEventListener('click' , ()=>{
    input.value+=6;
})

document.querySelector("#seven").addEventListener('click' , ()=>{
    input.value+=7;
})

document.querySelector("#eight").addEventListener('click' , ()=>{
    input.value+=8;
})

document.querySelector("#nine").addEventListener('click' , ()=>{
    input.value+=9;
})

document.querySelector("#equal").addEventListener('click' , ()=>{
    console.log(input.value);
})

//Render clear btn


document.querySelector('#clear').addEventListener('click' , ()=>{
    input.value="";
})


//Rendering sign 


document.querySelector('#add').addEventListener('click' , ()=>{
    input.value='+'
})





