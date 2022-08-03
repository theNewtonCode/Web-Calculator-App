const output = document.getElementById("dispout");
let res;

document.getElementById("delete").onclick = () => {
    output.innerHTML = "";
}

document.getElementById(".").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+".")};
document.getElementById("0").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"0")};
document.getElementById("1").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"1")};
document.getElementById("2").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"2")};
document.getElementById("3").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"3")};
document.getElementById("4").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"4")};
document.getElementById("5").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"5")};
document.getElementById("6").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"6")};
document.getElementById("7").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"7")};
document.getElementById("8").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"8")};
document.getElementById("9").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"9")};


document.getElementById("add").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"+")};
document.getElementById("sub").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"-")};
document.getElementById("mul").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"x")};
document.getElementById("div").onclick =  () =>  {res = output.innerText; output.innerHTML = (res+"/")};

//creating a function for cancel button to remove the previous added term;
function trim(){
    output.innerHTML = (output.innerHTML).slice(0,output.innerHTML.length-1);
}
const cancel = document.getElementById("cancelprev");
cancel.onclick =trim;

//now we have to split the string to the corresponding terms and create the mathematical expression;
function calulate(){
let inner = output.innerText;
let val1;
let val2;


if(inner.includes("+")){
    const exp = inner.split("+");
    val1 = parseFloat(exp[0]);
    val2 = parseFloat(exp[1]);
    return val1+val2;
}
else if(inner.includes("-")){
    const exp = inner.split("-");
    val1 = parseFloat(exp[0]);
    val2 = parseFloat(exp[1]);
    return val1-val2;
}
else if(inner.includes("x")){
    const exp = inner.split("x");
    val1 = parseFloat(exp[0]);
    val2 = parseFloat(exp[1]);
    return val1*val2;
}
else if(inner.includes("/")){
    const exp = inner.split("/");
    if(exp.length<=2){
    val1 = parseFloat(exp[0]);
    val2 = parseFloat(exp[1]);
    return val1/val2;
    }
}
}
    

//creating a function to display the result on the label;
function doresult(){
    var result = calulate();
    output.innerHTML = result;
}
const equal = document.getElementById("eq");
equal.onclick = doresult;
