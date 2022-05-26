// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which location is warmer?",
    a: [{ text: "South Pole", isCorrect: false },
        { text: "North Pole", isCorrect: true },
        { text: "West Pole", isCorrect: false },
        { text: "East Pole", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the largest land mammal found in North America?",
    a: [{ text: "Polar Bear", isCorrect: false, isSelected: false },
        { text: "Buffalo", isCorrect: true },
        { text: "Moose", isCorrect: false },
        { text: "Mountain lion", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is the name for a baby swan?",
    a: [{ text: "Swanling", isCorrect: false },
        { text: "Gosling", isCorrect: false },
        { text: "Cygnet", isCorrect: true },
        { text: "Chick", isCorrect: false }
    ]

}
,
{
    id: 3,
    q: "Which species of bird lays the largest eggs?",
    a: [{ text: "Emu", isCorrect: false },
        { text: "Ostrich", isCorrect: true },
        { text: "Eagle", isCorrect: false },
        { text: "Albatross", isCorrect: false }
    ]

}
,
{
    id: 4,
    q: "Which of the following is not a type of antelope?",
    a: [{ text: "Oribi", isCorrect: false },
        { text: "Eland", isCorrect: false },
        { text: "Bushbuck", isCorrect: false },
        { text: "Freisian", isCorrect: true }
    ]

}
,
{
    id: 5,
    q: "Commonly found in the garden, what is a ‘gastropoda’?",
    a: [{ text: "Snail", isCorrect: true },
        { text: "Worm", isCorrect: false },
        { text: "Crow", isCorrect: false },
        { text: "Hedgehog", isCorrect: false }
    ]

}
,
{
    id: 6,
    q: "Of all the animals on Earth, which is the largest?",
    a: [{ text: "Elephant", isCorrect: false },
        { text: "Blue Whale", isCorrect: true },
        { text: "Basking shark", isCorrect: false },
        { text: "Hippopotamus", isCorrect: false }
    ]

}
,
{
    id: 7,
    q: "Which planet in our Solar System has the most moons?",
    a: [{ text: "Earth", isCorrect: false },
        { text: "Mars", isCorrect: false },
        { text: "Jupiter", isCorrect: false },
        { text: "Saturn", isCorrect: true }
    ]

}
,
{
    id: 8,
    q: "Which chemical element gives Mars its distinctive red color?",
    a: [{ text: "Iron", isCorrect: true },
        { text: "Silicone", isCorrect: false },
        { text: "Hydrogen", isCorrect: false },
        { text: "Copper", isCorrect: false }
    ]

}
,
{
    id: 9,
    q: "What precious metal has the chemical symbol Au?",
    a: [{ text: "Silver", isCorrect: false },
        { text: "Gold", isCorrect: true },
        { text: "Platinum", isCorrect: false },
        { text: "Copper", isCorrect: false }
    ]

}
,
{
    id: 10,
    q: "The human body is made up of approximately how much water?",
    a: [{ text: "40%", isCorrect: false },
        { text: "50%", isCorrect: false },
        { text: "60%", isCorrect: true },
        { text: "70%", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})