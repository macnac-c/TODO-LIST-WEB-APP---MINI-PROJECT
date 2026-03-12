let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

//to add task onto the list
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    //to add delete button next to each task
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    inp.value=""; //resetting the input value after adding the task
});

//to remove tasks when delete button is clicked
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
});