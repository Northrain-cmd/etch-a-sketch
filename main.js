let number=16;
let colorN;
let color;
let flag=false;
Grid(16);

function Grid(number){
const div=document.getElementsByClassName("divN");
const wrapper= document.getElementById("wrapper");
wrapper.style.gridTemplateColumns=`repeat(${number},1fr)`;
wrapper.style.gridTemplateRows=`repeat(${number},1fr)`;
for(let i=0;i<number**2;i++){
    let div=document.createElement("div");
    div.setAttribute(`id`,`div`+i);
    div.classList.add("divN");
    wrapper.appendChild(div);   
    div.style.backgroundColor="black";  
    div.style.opacity="0"; 
    let opacity=Number(div.style.opacity);  
    color="black";
   
    div.addEventListener('mouseover',function(){
            if (flag==0){   
                div.style.backgroundColor="black";
                div.style.opacity="0.1"; 
                opacity+=0.1;
                div.style.opacity=opacity.toString()
                console.log(div.style.opacity);
                console.log(opacity);}
            else {
                div.style.backgroundColor=`${random()}`;
                div.style.opacity="0.1"
                opacity+=0.1;
                div.style.opacity=opacity.toString();}
            })}
      
     
}
let array=['black'];  
function random(){
    for(let i=0;i<254;i++){
        let randomNumber1=Math.floor(Math.random()*255);
        let randomNumber2=Math.floor(Math.random()*255);
        let randomNumber3=Math.floor(Math.random()*255);
        let newColor=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
        array.push(newColor);
        let col=array[Math.floor(Math.random()*254)];
        console.log(col);
        return  col;
    }
} 
const resizeBtn=document.getElementById("resBtn");
resizeBtn.addEventListener('click',()=>{
number=prompt("Choose Grid Size(1-100)");
wrapper.innerHTML="";
flag=0;
Grid(number);
})
const colorBtn=document.getElementById('colBtn');
colorBtn.addEventListener('click',()=>{
        color=`${random()}`;
        flag= !flag;
            })           
const   clearBtn=document.getElementById("clear");
clearBtn.addEventListener('click',()=>{wrapper.innerHTML="";
                                        flag=0;
                                        Grid(number);});    