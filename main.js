let number=16;
const div=document.getElementsByClassName("divN");
const wrapper= document.getElementById("wrapper");
wrapper.style.gridTemplateColumns=`repeat(${number},1fr)`;
wrapper.style.gridTemplateRows=`repeat(${number},1fr)`;
for(let i=0;i<number**2;i++){
    let div=document.createElement("div");
    div.setAttribute(`id`,`div`+i);
    div.classList.add("divN");
    wrapper.appendChild(div);     
    let opacity=Number(div.style.opacity);  
    div.addEventListener('mouseover',function(){
            div.style.backgroundColor="black";
            div.style.opacity="0.1"; 
            opacity+=0.1;
            div.style.opacity=opacity.toString()
            console.log(div.style.opacity);
            console.log(opacity);
        })
   
        
}
    
   