let inputField = document.querySelector(".input");
let AllSpan = document.querySelectorAll(".buttons span");
let ResultSpan = document.querySelector(".results span");
console.log(ResultSpan)

AllSpan.forEach(span => {
    
    span.addEventListener("click" , e =>{


        if(e.target.classList.contains("check-items")){
            checkitems();
        }
        if(e.target.classList.contains("add-item")){
            additems();
        }
        if(e.target.classList.contains("delete-item")){
            deleteitems();
        }
        if(e.target.classList.contains("show-item")){
            showitems();
        }

    })

});




function checkInput(){
        ResultSpan.innerHTML = "input cannot be embty";
}

function checkitems() {
    
    if(inputField.value !== ""){

        if(localStorage.getItem(inputField.value)){

            ResultSpan.innerHTML = `found local storage data called <span>${inputField.value}</span>`
        
        }else{

            ResultSpan.innerHTML = `didnt found local storage data called <span>${inputField.value}</span>`

        }

    }else{
        checkInput();
    }

}
function additems() {

    if(inputField.value !== ""){

        localStorage.setItem(inputField.value , "players")

        ResultSpan.innerHTML = ` local storage data called <span>${inputField.value}</span> is added` 
    


    }else{

        checkInput();

    }

}
function deleteitems() {

        if(inputField.value !== ""){

        if(localStorage.getItem(inputField.value)){

            localStorage.removeItem(inputField.value)

            ResultSpan.innerHTML = `local storage data called <span>${inputField.value}</span> is deleted`
        
    
        }else{

            ResultSpan.innerHTML = `didnt found local storage data called <span>${inputField.value}</span> to delete`

        }    
    }


}
function showitems() {



    if(localStorage.length){

        ResultSpan.innerHTML =""

        for(let [key,value] of Object.entries(localStorage)){

            ResultSpan.innerHTML += `<span class = "key">${key}</span>` ;

        }

    }else{

        ResultSpan.innerHTML = "local storage data is embty"

    }


}