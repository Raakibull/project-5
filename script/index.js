let count1 = 6; 
let count2= 23;

document.querySelectorAll(".completed").forEach(button => {
    button.addEventListener("click", function() {
        count1 -= 1; 
        

        document.getElementById("task").textContent = count1; 
        this.disabled = true;

       
    });
});

document.querySelectorAll(".completed").forEach(button => {
    button.addEventListener("click", function() {
        count2 += 1; 
        

        document.getElementById("nav").textContent = count2;

       
    });
});


document.querySelectorAll(".completed").forEach(button => {
    button.addEventListener("click", function() {
    this.classList.add("clicked");
});

});

// color change//
let button = document.getElementById('colorButton');

let colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink' ,'#F4F7FF'];
let currentColorIndex = 0;

button.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

