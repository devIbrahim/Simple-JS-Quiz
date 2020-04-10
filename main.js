   
   //QUIZ PROJECT

const form = document.querySelector('.quiz-form');
const correctAnswers = ['B','A','A','A'];


form.addEventListener("submit", (e) => {
 
    let score = 0;
    userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];

    e.preventDefault();
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        }
    });

    console.log(score);

    document.querySelector('.result').classList.remove("d-none");
    scrollTo(0,0);
 
    let output = 0;
    let timer = setInterval(() => {

    document.querySelector('.result-perc').innerText = output + '%';
    if(output === score){
        clearInterval(timer);
    }else{
        output++;
    }

    },10);

});