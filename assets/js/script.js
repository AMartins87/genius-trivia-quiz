/** This JS script was created with the help from 
 * the walk through Love Maths project 
 * and using https://www.sitepoint.com/simple-javascript-quiz/ 
 * and https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
 */

const startButton = document.getElementById('play-btn');
const nextButton = document.getElementById('next-btn');
const questionBox = document.getElementById('question-box');
const questionSection = document.getElementById('question');
const optionButton = document.getElementById('options-section');
const resultsContainer = document.getElementById('results-container');

let mixQuestions;
let currentQuestionIndex;
let TimeOut = 4000;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion(); 
});

function hideRules() {
    document.getElementById("rules-container").style.display = "none"; // used by index.html to hide rules of the quiz after user clicks on play button
}

// Starts the quiz
function startQuiz() {
    startButton.classList.add('hide'); // hides play button
    mixQuestions = questions.sort(() => Math.random() - 0.5), // this mixes questions
        currentQuestionIndex = 0,
        questionBox.classList.remove('hide'), // questions will appear 
        nextQuestion(); // calling next question
    mixQuestions.splice(5, 15); // This selects 5 random questions each time the user plays the quiz. Used code from w3schools.com
}

function nextQuestion() {
    clearConditions(); // resets everything back to a default setting, i.e. no correct/incorrect background, next question button disappears
    showQuestion(mixQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionSection.innerHTML = question.question;
    let counter = 1;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.setAttribute('id', counter);
        counter += 1;
        button.classList.add('btn');
        if (option.correct) {
            button.dataset.correct = option.correct;
        }
        button.addEventListener('click', selectOption);
        optionButton.appendChild(button);
    });
}

// Hides next question button 
function clearConditions() {
    nextButton.classList.add('hide');
    resultsContainer.classList.add('hide');
    while (optionButton.firstChild) {
        optionButton.removeChild(optionButton.firstChild);
    }
}

// Listens for a selected option
function selectOption(e) {
    const clickedButton = e.target;
    const correct = clickedButton.dataset.correct; 
    setCorrectnessClass(document.body, correct); 
    document.getElementById(e.target.id).classList.add('selection'); // highlights users clicked choice
    Array.from(optionButton.children).forEach(button => {
        setCorrectnessClass(button, button.dataset.correct);
    });
    if (mixQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.classList.add('hide');
        TimeOut = setTimeout(showEndScreen, 4000); // delays a move to an end screen
    }
}

// Removes questions container and shows end of quiz screen
function showEndScreen() {
    startButton.innerText = 'Play again!'; // changes text of the button from Play to Play again!
    startButton.classList.remove('hide'); // shows play button for user to try the quiz again
    questionBox.classList.add('hide'); // hides questions container
    resultsContainer.classList.remove('hide'); // shows end of quiz screen
}

// Gives options colored background based on correct/incorrect answers
function setCorrectnessClass(element, correct) {
    clearCorrectnessClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

// Hides the colored background
function clearCorrectnessClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}


let questions = [

    {
        question: "What is the world's most venomous fish?",
        options: [{
                text: 'Lionfish',
                correct: false
            },
            {
                text: 'Pufferfish',
                correct: false
            },
            {
                text: 'Stonefish',
                correct: true
            }
        ],
    },
    {
        question: "How many languages are written from right to left?",
        options: [{
                text: '3',
                correct: false
            },
            {
                text: '12',
                correct: true
            },
            {
                text: '20',
                correct: false
            }
        ],
    },
    {
        question: "Which finger is responsible for 50% of the strength in your hand?",
        options: [{
                text: 'Thumb',
                correct: false
            },
            {
                text: 'Index finger',
                correct: false
            },
            {
                text: 'Pinky',
                correct: true
            }
        ],
    },
    {
        question: "Before it was a called a mouse, what animal was that computer accessory named after?",
        options: [{
                text: 'Clam',
                correct: false
            },
            {
                text: 'Turtle',
                correct: true
            },
            {
                text: 'Snail',
                correct: false
            }
        ]
    },
    {
        question: "What is ablutophobia?",
        options: [{
                text: 'A fear of bathing',
                correct: true
            },
            {
                text: 'A fear of work or the workplace',
                correct: false
            },
            {
                text: 'A fear of belly buttons',
                correct: false
            }
        ]
    },
    {
        question: "Which planets in our solar system do not have moons?",
        options: [{
                text: 'Mercury and Venus',
                correct: true
            },
            {
                text: 'Mars and Mercury',
                correct: false
            },
            {
                text: 'Mars and Neptune',
                correct: false
            }
        ]
    },
    {
        question: "What is the loudest animal on Earth?",
        options: [{
                text: 'Sperm whale',
                correct: true
            },
            {
                text: 'Snapping Shrimp',
                correct: false
            },
            {
                text: 'Howler Monkey',
                correct: false
            }
        ]
    },
    {
        question: "Which country has the oldest continuously used national flag?",
        options: [{
                text: 'Netherlands',
                correct: false
            },
            {
                text: 'Nepal',
                correct: false
            },
            {
                text: 'Denmark',
                correct: true
            }

        ]
    },
    {
        question: "In which country was the largest Tyrannosaurus rex skeleton found?",
        options: [{
                text: 'South Dakota, USA',
                correct: false
            },
            {
                text: 'Saskatchewan, Canada',
                correct: true
            },
            {
                text: 'Lourinhã, Portugal',
                correct: false
            }
        ]
    },
    {
        question: "What is the world's deepest lake?",
        options: [{
                text: 'Caspian Sea',
                correct: false
            },
            {
                text: 'Lake Vostok',
                correct: false
            },
            {
                text: 'Lake Baikal',
                correct: true
            }
        ]
    },
    {
        question: "What percentage of Sweden's household garbage makes it to landfills?",
        options: [{
                text: '2%',
                correct: false
            },
            {
                text: '4%',
                correct: false
            },
            {
                text: '1%',
                correct: true
            }
        ]
    },
    {
        question: "How long is a moment?",
        options: [{
                text: '25 seconds',
                correct: false
            },
            {
                text: '90 seconds',
                correct: true
            },
            {
                text: '45 seconds',
                correct: false
            }
        ]
    },
    {
        question: "What is correct name given to the dot on top of the letter i?",
        options: [{
                text: 'Interpunct',
                correct: false
            },
            {
                text: 'Tittle ',
                correct: true
            },
            {
                text: 'Diacritic',
                correct: false
            }
        ]
    },
    {
        question: "How many muscles does a cat have in each ear?",
        options: [{
                text: '17',
                correct: false
            },
            {
                text: 'None ',
                correct: false
            },
            {
                text: '32',
                correct: true
            }
        ]
    },
    {
        question: "Who took the assumed name Sebastian Melmoth when living in Paris?",
        options: [{
                text: 'Oscar Wilde',
                correct: true
            },
            {
                text: 'Jim Morrison ',
                correct: false
            },
            {
                text: 'Samuel Beckett',
                correct: false
            }
        ]
    },
];