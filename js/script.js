//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn_1_1 = info_box.querySelector(".buttons .restart_1_1");
const continue_btn_1_2 = info_box.querySelector(".buttons .restart_1_2");
const continue_btn_1_3 = info_box.querySelector(".buttons .restart_1_3");
const continue_btn_2_1 = info_box.querySelector(".buttons .restart_2_1");
const continue_btn_2_2 = info_box.querySelector(".buttons .restart_2_2");
const continue_btn_2_3 = info_box.querySelector(".buttons .restart_2_3");
const continue_btn_3_1 = info_box.querySelector(".buttons .restart_3_1");
const continue_btn_3_2 = info_box.querySelector(".buttons .restart_3_2");
const continue_btn_3_3 = info_box.querySelector(".buttons .restart_3_3");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const course_1_btn = document.querySelector(".course_1_btn button");
const course_2_btn = document.querySelector(".course_2_btn button");
const course_3_btn = document.querySelector(".course_3_btn button");
const ok_1_btn_1 = document.querySelector(".ok_1_1 button");
const ok_1_btn_2 = document.querySelector(".ok_1_2 button");
const ok_1_btn_3 = document.querySelector(".ok_1_3 button");
const ok_2_btn_1 = document.querySelector(".ok_2_1 button");
const ok_2_btn_2 = document.querySelector(".ok_2_2 button");
const ok_2_btn_3 = document.querySelector(".ok_2_3 button");
const ok_3_btn_1 = document.querySelector(".ok_3_1 button");
const ok_3_btn_2 = document.querySelector(".ok_3_2 button");
const ok_3_btn_3 = document.querySelector(".ok_3_3 button");
const course_1_btn_1 = document.querySelector(".course_1_btn_1");
const course_1_btn_2 = document.querySelector(".course_1_btn_2");
const course_1_btn_3 = document.querySelector(".course_1_btn_3");
const course_2_btn_1 = document.querySelector(".course_2_btn_1");
const course_2_btn_2 = document.querySelector(".course_2_btn_2");
const course_2_btn_3 = document.querySelector(".course_2_btn_3");
const course_3_btn_1 = document.querySelector(".course_3_btn_1");
const course_3_btn_2 = document.querySelector(".course_3_btn_2");
const course_3_btn_3 = document.querySelector(".course_3_btn_3");

var video = document.querySelector("#videoElement");

function turncameraOn(){
    show('container')
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}
function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}

// if startQuiz button clicked
start_btn.onclick = ()=>{
    hide(1);
    hide(15);
    show(2);
    show(3);
    show(4);
    //info_box.classList.add("activeInfo"); //show info box
}

//if 'Matemática' button clicked
course_1_btn.onclick = ()=>{
    hide(2);
    hide(3);
    hide(4);
    show('mate_basic');
    show('mate_inter');
    show('mate_dif');
}

//if 'Geografía' button clicked
course_2_btn.onclick = ()=>{
    hide(2);
    hide(3);
    hide(4);
    show('geo_basic');
    show('geo_inter');
    show('geo_dif');
}

//if 'Literatura' button clicked
course_3_btn.onclick = ()=>{
    hide(2);
    hide(3);
    hide(4);
    show('lit_basic');
    show('lit_inter');
    show('lit_dif');
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.location.reload();
}

//clic en mate basica
course_1_btn_1.onclick = ()=>{
    hide('mate_basic');
    hide('mate_inter');
    hide('mate_dif');
    info_box.classList.add("activeInfo");
    show('continuar_mate_basic');
}
continue_btn_1_1.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_mate_basic'); }, 6200 );
    show(100);
    show(50);
}

//clic en mate inter
course_1_btn_2.onclick = ()=>{
    hide('mate_basic');
    hide('mate_inter');
    hide('mate_dif');
    info_box.classList.add("activeInfo");
    show('continuar_mate_inter');
}

continue_btn_1_2.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_mate_inter'); }, 6200 );
    show(100);
    show(50);
}

//clic en mate dif
course_1_btn_3.onclick = ()=>{
    hide('mate_basic');
    hide('mate_inter');
    hide('mate_dif');
    info_box.classList.add("activeInfo");
    show('continuar_mate_dif');
}

continue_btn_1_3.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_mate_dif'); }, 6200 );
    show(100);
    show(50);
}

// clic en geografía basica
course_2_btn_1.onclick = ()=>{
    hide('geo_basic');
    hide('geo_inter');
    hide('geo_dif');
    info_box.classList.add("activeInfo");
    show('continuar_geo_basic');
}
continue_btn_2_1.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_geo_basic'); }, 6200 );
    show(100);
    show(50);
}

//clic en geo inter
course_2_btn_2.onclick = ()=>{
    hide('geo_basic');
    hide('geo_inter');
    hide('geo_dif');
    info_box.classList.add("activeInfo");
    show('continuar_geo_inter');
}

continue_btn_2_2.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_geo_inter'); }, 6200 );
    show(100);
    show(50);
}

//clic en geo dif
course_2_btn_3.onclick = ()=>{
    hide('geo_basic');
    hide('geo_inter');
    hide('geo_dif');
    info_box.classList.add("activeInfo");
    show('continuar_geo_dif');
}

continue_btn_2_3.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_geo_dif'); }, 6200 );
    show(100);
    show(50);
}

// clic en literatura basica
course_3_btn_1.onclick = ()=>{
    hide('lit_basic');
    hide('lit_inter');
    hide('lit_dif');
    info_box.classList.add("activeInfo");
    show('continuar_lit_basic');
}
continue_btn_3_1.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_lit_basic'); }, 6200 );
    show(100);
    show(50);
}

//clic en lit inter
course_3_btn_2.onclick = ()=>{
    hide('lit_basic');
    hide('lit_inter');
    hide('lit_dif');
    info_box.classList.add("activeInfo");
    show('continuar_lit_inter');
}

continue_btn_3_2.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_lit_inter'); }, 6200 );
    show(100);
    show(50);
}

//clic en lit dif
course_3_btn_3.onclick = ()=>{
    hide('lit_basic');
    hide('lit_inter');
    hide('lit_dif');
    info_box.classList.add("activeInfo");
    show('continuar_lit_dif');
}

continue_btn_3_3.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    setTimeout( function () { show('ok_lit_dif'); }, 6200 );
    show(100);
    show(50);
}


//if ok_1 go to math quiz
ok_1_btn_1.onclick = ()=>{
    turncameraOn();
    hide('ok_mate_basic');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(8);
    showMathQuestions(0); //calling showMathQuestions function
    queCounter_1(1); //passing 1 parameter to queCounter
    startTimer_1(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_1_btn_2.onclick = ()=>{
    turncameraOn();
    hide('ok_mate_inter');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(8);
    showMathQuestions(0); //calling showMathQuestions function
    queCounter_1(1); //passing 1 parameter to queCounter
    startTimer_1(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_1_btn_3.onclick = ()=>{
    turncameraOn();
    hide('ok_mate_dif');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(8);
    showMathQuestions(0); //calling showMathQuestions function
    queCounter_1(1); //passing 1 parameter to queCounter
    startTimer_1(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

//if ok_2 go to geo quiz
ok_2_btn_1.onclick = ()=>{
    turncameraOn();
    hide('ok_geo_basic');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(9);
    showGeoQuestions(0); //calling showMathQuestions function
    queCounter_2(1); //passing 1 parameter to queCounter
    startTimer_2(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_2_btn_2.onclick = ()=>{
    turncameraOn();
    hide('ok_geo_inter');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(9);
    showGeoQuestions(0); //calling showMathQuestions function
    queCounter_2(1); //passing 1 parameter to queCounter
    startTimer_2(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_2_btn_3.onclick = ()=>{
    turncameraOn();
    hide('ok_geo_dif');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(9);
    showGeoQuestions(0); //calling showMathQuestions function
    queCounter_2(1); //passing 1 parameter to queCounter
    startTimer_2(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

//if ok_1 go to lit quiz

ok_3_btn_1.onclick = ()=>{
    turncameraOn();
    hide('ok_lit_basic');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(10);
    showLitQuestions(0); //calling showMathQuestions function
    queCounter_3(1); //passing 1 parameter to queCounter
    startTimer_3(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_3_btn_2.onclick = ()=>{
    turncameraOn();
    hide('ok_lit_inter');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(10);
    showLitQuestions(0); //calling showMathQuestions function
    queCounter_3(1); //passing 1 parameter to queCounter
    startTimer_3(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

ok_3_btn_3.onclick = ()=>{
    turncameraOn();
    hide('ok_lit_dif');
    hide(100);
    hide(50);
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    show(10);
    showLitQuestions(0); //calling showMathQuestions function
    queCounter_3(1); //passing 1 parameter to queCounter
    startTimer_3(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz_1 = result_box.querySelector(".buttons .restart_1");
const restart_quiz_2 = result_box.querySelector(".buttons .restart_2");
const restart_quiz_3 = result_box.querySelector(".buttons .restart_3");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked math
restart_quiz_1.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showMathQuestions(que_count); //calling showQestions function
    queCounter_1(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer_1(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    //next_btn.classList.remove("show"); //hide the next button
}

// if restartQuiz button clicked geo
restart_quiz_2.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showGeoQuestions(que_count); //calling showQestions function
    queCounter_2(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer_2(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    //next_btn.classList.remove("show"); //hide the next button
}

// if restartQuiz button clicked lit
restart_quiz_3.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showLitQuestions(que_count); //calling showQestions function
    queCounter_3(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer_3(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    //next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn_1 = document.querySelector("footer .next_btn_1");
const next_btn_2 = document.querySelector("footer .next_btn_2");
const next_btn_3 = document.querySelector("footer .next_btn_3");
const next_btn_1_2 = document.querySelector("footer .next_btn_1_2");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn_1.onclick = ()=>{
    show(8);
    if(que_count < math_questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showMathQuestions(que_count); //calling showQestions function
        queCounter_1(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer_1(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo restante"; //change the timeText to Time Left
        next_btn_1.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult_1(); //calling showResult function
    }
}

next_btn_1_2.onclick = ()=>{
    show(89);
    if(que_count < math_questions_2.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showMathQuestions(que_count); //calling showQestions function
        queCounter_1_2(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer_1_2(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo restante"; //change the timeText to Time Left
        next_btn_1_2.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult_1_2(); //calling showResult function
    }
}

// if Next Que button clicked (geo)
next_btn_2.onclick = ()=>{
    show(9);
    if(que_count < geo_questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showGeoQuestions(que_count); //calling showQestions function
        queCounter_2(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer_2(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo restante"; //change the timeText to Time Left
        next_btn_2.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult_2(); //calling showResult function
    }
}

// if Next Que button clicked
next_btn_3.onclick = ()=>{
    show(10);
    if(que_count < lit_questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showLitQuestions(que_count); //calling showQestions function
        queCounter_3(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer_3(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo restante"; //change the timeText to Time Left
        next_btn_3.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult_3(); //calling showResult function
    }
}

// getting math_questions and options from array (math_questions)
function showMathQuestions(index){
    const que_text_1 = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ math_questions[index].numb + ". " + math_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ math_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ math_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ math_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ math_questions[index].options[3] +'</span></div>';
    que_text_1.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected_1(this)");
    }
}

//math_2
function showMath_2Questions(index){
    const que_text_1_2 = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ math_questions_2[index].numb + ". " + math_questions_2[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ math_questions_2[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ math_questions_2[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ math_questions_2[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ math_questions_2[index].options[3] +'</span></div>';
    que_text_1.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected_1(this)");
    }
}

// getting geo_questions and options from array (geo_questions)
function showGeoQuestions(index){
    const que_text_2 = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ geo_questions[index].numb + ". " + geo_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ geo_questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ geo_questions[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ geo_questions[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ geo_questions[index].options[3] +'</span></div>';
    que_text_2.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected_2(this)");
    }
}

// getting lit_questions and options from array (lit_questions)
function showLitQuestions(index){
    const que_text_3 = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ lit_questions[index].numb + ". " + lit_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ lit_questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ lit_questions[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ lit_questions[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ lit_questions[index].options[3] +'</span></div>';
    que_text_3.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected_3(this)");
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option (math)
function optionSelected_1(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = math_questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_1.classList.add("show"); //show the next button if user selected any option
}

//if user clicked on option (geo)
function optionSelected_2(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = geo_questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_2.classList.add("show"); //show the next button if user selected any option
}

//if user clicked on option (list)
function optionSelected_3(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = lit_questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_3.classList.add("show"); //show the next button if user selected any option
}

//mate basica
function showResult_1(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    show(11);
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>¡Felicitaciones! 🎉, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Bien 😎, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Qué mal... 😐, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//mate inter
function showResult_1_2(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    show(11);
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>¡Felicitaciones! 🎉, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions_2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Bien 😎, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions_2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Qué mal... 😐, acertaste <p>'+ userScore +'</p> de <p>'+ math_questions_2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function showResult_2(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    show(12);
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>¡Felicitaciones! 🎉, acertaste <p>'+ userScore +'</p> de <p>'+ geo_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Bien 😎, acertaste <p>'+ userScore +'</p> de <p>'+ geo_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Qué mal... 😐, acertaste <p>'+ userScore +'</p> de <p>'+ geo_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function showResult_3(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    show(13);
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>¡Felicitaciones! 🎉, acertaste <p>'+ userScore +'</p> de <p>'+ lit_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Bien 😎, acertaste <p>'+ userScore +'</p> de <p>'+ lit_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Qué mal... 😐, acertaste <p>'+ userScore +'</p> de <p>'+ lit_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//mate basica
function startTimer_1(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = math_questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn_1.classList.add("show"); //show the next button if user selected any option
        }
    }
}

//mate inter
function startTimer_1_2(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = math_questions_2[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn_1.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimer_2(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = geo_questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn_2.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimer_3(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = lit_questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn_3.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 38);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
//mate
function queCounter_1(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ math_questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
//mate inter
function queCounter_1_2(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ math_questions_2.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function queCounter_2(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ geo_questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function queCounter_3(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ lit_questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function hide(id){
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function show(id) {
    document.getElementById(id).style.display = "";
}

function spin(){

    var x = 1024; //min value
    var y = 9999; // max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById(50);
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000); //5000 = 5 second
}
