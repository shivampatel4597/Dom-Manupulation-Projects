let input = document.getElementById("input");
let add = document.getElementById("add");
let content = document.getElementById("content1")
let check = document.querySelectorAll(".cross")

 // Function to remove an item
 function removeItem(event) {
    event.target.closest(".content-child").remove();
}

add.addEventListener('click',()=>{
    console.log("add clicked")
    if(input.value !== "" ){
        let inputValue = input.value.toUpperCase();
    
        let newElement = document.createElement('div');
        newElement.className = 'content-child';
        
        // Set innerHTML of the new element
        newElement.innerHTML = `
            <p>${inputValue}</p>
            <i class="fa-solid fa-xmark cross"></i>
        `;
        
        // Append the new element to the content
        content.appendChild(newElement);
        
        // atteching event listeners to cross
        let crossIcon = newElement.querySelector('.cross');
                    crossIcon.addEventListener('click', removeItem);
        
                    input.value = ""
    }
    else{
        alert("please enter valid text")
    }
    })




check.forEach(function(check){
    check.addEventListener('click',(event)=>{
        if(event.target.classList.contains("cross")){
            event.target.closest(".content-child").remove();
        }
        })
}) 


