let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count +=1
    countEL.textContent = count
    console.log("The Incremenet Button was clicked!")
}

function decrement() {
    if(count>0){
        count -=1
        countEL.textContent = count
    }
    
    console.log("The Decremenet Button was clicked!")
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    count = 0
    countEL.textContent = count
    console.log("The Save Button was clicked!")
}