
let questions = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text", "Home Tool", "None"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language styles a webpage?",
        options: ["HTML", "CSS", "Java", "C"],
        answer: "CSS"
    },
    {
        question: "Which language makes a webpage interactive?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: "JavaScript"
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    let q = questions[index];

    document.getElementById("question").innerText = q.question;

    let output = "";

    for (let option of q.options) {
        output += `<button onclick="checkAnswer('${option}')">${option}</button><br><br>`;
    }

    document.getElementById("options").innerHTML = output;
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Completed! Your Score: " + score + "/" + questions.length;

        document.getElementById("options").innerHTML = "";
    }
}

loadQuestion();
