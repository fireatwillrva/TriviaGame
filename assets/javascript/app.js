// Start button
$('#start').on('click', function(){
    game.start();
})
// End button
$(document).on('click','#end', function(){
    game.done();
})
    
//QUESTIONS
var questions =[{
    // Question 1
    question: "What type of galaxy is the most common in the universe?",
    answers: [" Spiral<br>", " Barred Spiral<br>", " Elliptical<br>", " Irregular"],
    correctAnswer: " Elliptical<br>"
}, {
    // Question 2
    question: "How many planets are in our solar system?",
    answers: [" Six<br>", " Seven<br>", " Eight<br>", " Nine"],
    correctAnswer: " Eight<br>"
}, {
    // Question 3
    question: "What is the most common type of star found in the Milky Way?",
    answers: [" White Dwarf<br>", " Compact Star<br>", " Neutron Star<br>", " Red Dwarf"],
    correctAnswer: " Red Dwarf"
}, {
    // Question 4
    question: "What has a gravitational pull so strong that even light cannot escape it?",
    answers: [" Black Hole<br>", " Red Supergiant<br>", " The Great Attractor<br>", " Quasar"],
    correctAnswer: " Black Hole<br>"
},
{
    // Question 5
    question: "Which planet is known as The Morning Star or The Evening Star?",
    answers: [" Mars<br>", " Saturn<br>", " Venus<br>", " Mercury"],
    correctAnswer: " Venus<br>"
},
{
    // Question 6
    question: "How long does it take for light to travel from the Sun to Earth?",
    answers: [" 30 Seconds<br>", " 8 Minutes<br>", " 20 Minutes<br>", " 1 Hour"],
    correctAnswer: " 8 Minutes<br>"
},
{
    // Question 7
    question: "What type of galaxy is the Milky Way?",
    answers: [" Spiral<br>", " Barred Spiral<br>", " Elliptical<br>", " Irregular"],
    correctAnswer: " Spiral<br>"
},
{
    // Question 8
    question: "Which planet in our solar system has the most gravity?",
    answers: [" Mars<br>", " Jupiter<br>", " Saturn<br>", " Uranus<br>"],
    correctAnswer: " Jupiter<br>"
}];
// *** Game variables ***
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
             alert("Time is up!");
             game.done();
        }
    },
    // Start game
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h3>Time Remaining: <span id="counter">60</span> Seconds</h3>') 
        $('#start').remove();
        for(var i =0; i<questions.length; i++){
            $('#subwrapper').append('<h3>' + questions[i].question + '</h3>');
            for(var j=0; j<questions[i].answers.length; j++){
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='"+ questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    // End game
    done: function(){
        // Question 1 tally
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 2 tally
        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 3 tally
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 4 tally
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 5 tally
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 6 tally
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 7 tally
        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
        // Question 8 tally
        $.each($("input[name='question-7']:checked"), function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),

// Result Screen
        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2><br>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + ((questions.length) - (this.incorrect + this.correct)) + "</h3>");
        $('#subwrapper').append('<br><button id="resetGame">Try again?</button><br><br>')
       
        // Reset button
        $('#resetGame').on('click', function reset(){
            var game = {
                correct: 0,
                incorrect: 0,
                counter: 60,
                countdown: function(){
                    game.counter--;
                    $('#counter').html(game.counter);
                    if(game.counter<=0){
                         console.log("Time is up!");
                         game.done();
                    }
                },
            },
            timer = setInterval(game.countdown, 1000);
            $('#subwrapper').html('<h3>Time Remaining: <span id="counter">60</span> Seconds</h3>') 
            $('#start').remove();
            for(var i =0; i<questions.length; i++){
            $('#subwrapper').append('<h3>' + questions[i].question + '</h3>');
                for(var j=0; j<questions[i].answers.length; j++){
                 $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='"+ questions[i].answers[j] + "'>" + questions[i].answers[j])
                }
            }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
        })
    },
   
};