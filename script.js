const questions=[
    {
        question:"The upper house of Indian Parliament is known as – ",
        answers:[
            {text:"The Rajya Sabha",correct: true},
            {text:"The Lok Sabha",correct: false},
            {text:"The Vidhan Sabha",correct: false},
            {text:"The Vidhan Parishad",correct: false},
        ]
    },
    {
        question:"Which is the house where the Chairperson is not the member of that house –   ",
        answers:[
            {text:"The Rajya Sabha",correct: true},
            {text:"The Lok Sabha",correct: false},
            {text:"The Vidhan Sabha",correct: false},
            {text:"The Vidhan Parishad",correct: false},
        ]
    },
    {
        question:"The first mid-term elections for Lok Sabha were held in – ",
        answers:[
            {text:"1975",correct: false},
            {text:"1971",correct: true},
            {text:"1976",correct: false},
            {text:"1985",correct: false},
        ]
    },
    {
        question:"Finance bill of Indian Government is presented in –  ",
        answers:[
            {text:"Upper House",correct: false},
            {text:"Middle House",correct: false},
            {text:"Lower House",correct: true},
            {text:"Raw House",correct: false},
        ]
    },
    {
        question:"The Chairperson of the Lok Sabha is designated as –  ",
        answers:[
            {text:"Speaker",correct: true},
            {text:"President",correct: false},
            {text:"Vice President",correct: false},
            {text:"Prime Minister",correct: false},
        ]
    },
    {
        question:"Which states has only one member of the Lok Sabha – ",
        answers:[
            {text:"Rajasthan",correct: false},
            {text:"Madhya Pradesh",correct: false},
            {text:"Sikkim",correct: true},
            {text:"Uttar Pradesh",correct: false},
        ]
    },
    {
        question:"Which Indian state had the first woman Chief Minister – ",
        answers:[
            {text:"Uttar Pradesh",correct: true},
            {text:"Madhya Pradesh",correct: false},
            {text:"Sikkim",correct: false},
            {text:"Arunachal Pradesh",correct: false},
        ]
    },
    {
        question:"Who appoints the Governor of Jammu & Kashmir –  ",
        answers:[
            {text:"Prime Minister of India",correct: false},
            {text:"Chief Minister",correct: false},
            {text:"Governor",correct: false},
            {text:"The President of India",correct: true},
        ]
    },
    {
        question:"Who has the right to transfer any case anywhere in India – ",
        answers:[
           {text:"High Court",correct: false},
            {text:"Local Court",correct: false},
            {text:"Supreme Court",correct: true},
            {text:"Panchayat",correct: false},
        ]
    },
    {
        question:"The Contingency Fund of the State is operated by –  ",
        answers:[
             {text:"The President of India",correct: false},
            {text:"Governor of the State",correct: true},
            {text:"The Chief Minister of India",correct: false},
            {text:"The Prime Minister of India",correct: false},
        ]
    },
    {
        question:" Fist president of India who died while in office-  ",
        answers:[
            {text:" Zakir Hussain",correct: true},
            {text:"Rajendra Prasad",correct: false},
            {text:"Jawahar Lal Nehru",correct: false},
            {text:"Sardar Patel",correct: false},
        ]
    },
    {
        question:"The first British viceroy of India- ",
        answers:[
            {text:"Lord Kargen",correct: false},
            {text:"Lord Irvin",correct: false},
            {text:"Lord Tom",correct: false},
            {text:"Lord Cannon",correct: true},
        ]
    },
    {
        question:"The longest Corridor in India? -  ",
        answers:[
            {text:"Rameswaram temple Corridor",correct: true},
            {text:"Meenakshi Temple",correct: false},
            {text:"Kanyakumari Temple",correct: false},
            {text:" Badri Nath Temple",correct: false},
        ]
    },
    {
        question:"Who won the Nobel Prize for peace in the year 2014? – ",
        answers:[
            {text:"Malala Yousafzai & Kailash Satyarthi",correct: true},
            {text:"Mother Teresa",correct: false},
            {text:"Pandit Jakir Hussain",correct: false},
            {text:"Abdul Kalam Azad",correct: false},
        ]
    }
];
const ques=document.getElementById("question");
const ans=document.getElementById("answers");
const nextb=document.getElementById("next");

let currentQuestionIndex=0;
let score=0;

 function startQuiz(){
     currentQuestionIndex=0;
score=0;
nextb.innerHTML="Next";
 showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentques=questions[currentQuestionIndex];
    let qno=currentQuestionIndex+1;
    ques.innerHTML=qno+"."+currentques.question;
    currentques.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
 }
 function resetState(){
    nextb.style.display="none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
 }
 function selectAnswer(e){
let selbtn=e.target;
let isCorrect=selbtn.dataset.correct==="true";
if(isCorrect){
   selbtn.classList.add("correct");
   score++;
}
else{
    selbtn.classList.add("incorrect");
}
Array.from(ans.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
})
nextb.style.display="block";
 }
 function handleNextb(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
 }
 else{
    showScore();
 }
}
function showScore(){
   resetState();
   ques.innerHTML=`You scored:${score} out of ${questions.length}`;
   nextb.innerHTML="Start Again!!";
   nextb.style.display="block";
}

 nextb.addEventListener("click",function(){
    if(currentQuestionIndex<questions.length){
handleNextb();
    }
    else{
        startQuiz();
    }
 })
 startQuiz();