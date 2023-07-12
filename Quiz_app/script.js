const quizs=document.getElementById("quiz");
const quiestion=document.getElementById("question");
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");
const sumbit=document.getElementById("Submit");
const answersEle=document.querySelectorAll('.answer');

//question you want to ask
const quiz_Data=[
    {
        question:"How Many Members in IVE korean group",
        a:6,
        b:2,
        c:9,
        d:12,
        correct:"a"
    },
    {
        question :"Who is the leader of Stray Kids",
        a:"Felix",
        b:"Bang chan",
        c:"Lee know",
        d:"Han",
        correct:"b"
    },
    {
        question :"which of these groups is most popular right now",
        a:"Twice",
        b:"Everglow",
        c:"Black Pink",
        d:"Itzy",
        correct : "c"
    },
    {
        question:"Which of these groups has a lot of young members",
        a:"G_idle",
        b:"Ive",
        c:"Le sserfim",
        d:"New Jeans",
        correct:"d"
    }
]
let current_Quiz=0;
let score=0;

loadQuiz();
function loadQuiz(){
    deSelection();
   const CurrentQuizData=quiz_Data[current_Quiz];
   quiestion.innerHTML=CurrentQuizData.question;
   a_text.innerHTML=CurrentQuizData.a;
   b_text.innerHTML=CurrentQuizData.b;
   c_text.innerHTML=CurrentQuizData.c;
   d_text.innerHTML=CurrentQuizData.d;

}

function SelectAnswer(){
    let answer=undefined;
    // check if user select any items have
    answersEle.forEach((answerEl)=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    })
    return answer;
}
function deSelection()
{
    answersEle.forEach((answerEl)=>{
        answerEl.checked=false;
    })
    
}
//add click event to sumbit button
sumbit.addEventListener('click',()=>{
  const answer=SelectAnswer();
   if(answer){
      if(answer===quiz_Data[current_Quiz].correct){
        score++;
      }

    current_Quiz++;
    if(current_Quiz<quiz_Data.length){
        loadQuiz();
    }else if(score===quiz_Data.length){
        quizs.innerHTML=`<h1>Congratulation you are really kpoper </h1>`
    }else{
        quizs.innerHTML=`<h1> you answer ${score} / ${quiz_Data.length} correctly</h1>
        <button onclick="location.reload()">try again</button>`
    }
   }
})

