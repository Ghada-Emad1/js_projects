let count_El=document.getElementById("count-el");
let save_el=document.getElementById("save-el");
// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
//increment the coutn variable when button is clicked
// change the count-el in the html to reflect the new count
let counting=0;
function increment(){
    counting+=1;
    count_El.textContent=counting;
}
function save(){
    let countstr=counting+" _ ";
    save_el.textContent+=countstr;
   count_El.textContent=0;
   counting=0;
}
