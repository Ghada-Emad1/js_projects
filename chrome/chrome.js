const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
let myleads=[];

inputBtn.addEventListener("click",function(){
  
    myleads.push(inputEl.value);
    inputEl.value='';
    renderLead();
    
})

function renderLead(){
    let listItems="";

    for(let i=0;i<myleads.length;i++)
    {
       listItems+=`<a target='_blank' href='#'><li>${myleads[i]}</li></a>`;
       console.log(listItems);
    
    }
    ulEl.innerHTML=listItems;
}

//"<a target='_blank'>"+"<li>"+myleads[i]+"</li>"+"</a>"