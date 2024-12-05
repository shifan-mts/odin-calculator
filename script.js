


let a  = 0;
let b = 0;
let op = '';
let result = Number(0);
let tx;
let operation1 = ' ';
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operation(op,a,b){
    let val = 0;
    switch (op) {
        case '+':
           val= add(a,b);
            break;
        case '-':
           val= sub(a,b);
            break;
        case '*':
           val= multiply(a,b);
            break;
        case '/':
           val= divide(a,b);
            break;    
        
    }
    
    return val;
}
let n;
function main(n){
    let arr = n.trim();
    a = arr[0];
    b = arr[2];
    op = arr[1];
    result = operation(op,Number(a),Number(b));
    const dis = document.querySelector(".display");
    dis.textContent = result.toString();
    
}

const dis = document.querySelector(".display");
let content;
let content1 = ' ';
function display1(content){
dis.textContent = content;
if((content.trim()).length == 3){
    main(content.trim())
   
}
}

let l = document.querySelectorAll(".e");
l.forEach(element => {
    element.addEventListener("click",()=>{
        content1 += element.textContent;

        display1(content1);
        if (['+', '-', '*', '/'].includes(element.textContent)) {
operation1 = (element.textContent);
        }
        if(element.textContent== "="){
            console.log(result);
            console.log("the operation",result.toString()+operation1+tx);
            main(result.toString()+operation1+tx);
        }
        tx = element.textContent;
    }
    

);

    
});

let n1 = document.querySelector("#clear");
n1.addEventListener("click",()=>{
    content1 = " ";
    result = 0;
    display1(" ");
});