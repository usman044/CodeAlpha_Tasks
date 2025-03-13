const button = document.querySelectorAll(".btn");

button.forEach(button => {
    button.addEventListener("click" , (e)=> {
        let btnValue = e.target.innerText;
        handleInput(btnValue);
    })
})

const screen = document.querySelector(".screen input");

function handleInput(value) {
    if(value == "AC"){
        screen.value="";
    }
    else if(value == "="){
        try {
             screen.value = eval(screen.value);
        } catch (error) {
            screen.value = "error";
        }
    }
    else{
        screen.value += value;
    }
}


