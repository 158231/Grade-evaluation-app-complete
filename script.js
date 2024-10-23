const btn=document.getElementById("result");
const num=document.getElementById("num");
const output=document.getElementById("output");
console.dir(num);
console.log(btn,num,output);
btn.addEventListener("mousedown",(event)=>{
    if(num.valueAsNumber>=90 && num.valueAsNumber<=100){
        output.innerText="Grade: A"
    }
    else if(num.valueAsNumber>=80 && num.valueAsNumber<90){
        output.innerText="Grade: B"
    }
    else if(num.valueAsNumber>=70 && num.valueAsNumber<80){
        output.innerText="Grade: C"
    }
    else if(num.valueAsNumber>=60 && num.valueAsNumber<70){
        output.innerText="Grade: D"
    }
    else if(num.valueAsNumber>=50 && num.valueAsNumber<60){
output.innerText="Grade: F"
    }
    else{
        output.innerText="F"
    }
})

