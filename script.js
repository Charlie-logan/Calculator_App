let arr=["bt1","bt2","bt3","bt4","bt5","bt6","bt7","bt8","bt9","bt0","btp","btm","btdec","btd","btmul"];

for(let aObj of arr){
    // console.log(i);
    let btn=document.getElementById(aObj);
    btn.addEventListener("click",()=>{
        let inp=btn.textContent;
        console.log(inp);
        document.getElementById("p1").value+=inp;
    })
}

let calculate=document.getElementById('btequ');
calculate.addEventListener('click',()=>{
    let exp=document.getElementById('p1');
    let result=eval(exp.value);
    console.log(result);
    exp.value=result;
});

let del=document.getElementById('del');
del.addEventListener('click',()=>{
    let exp=document.getElementById('p1');
    exp.value=exp.value.slice(0,-1);
    // console.log(exp);
});

let reset=document.getElementById('res');
reset.addEventListener('click',()=>{
    let exp=document.getElementById('p1');
    exp.value="";
});