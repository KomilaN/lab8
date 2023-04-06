$(document).ready(function () {
     
     
     // Generate quiz questions
     // ...

     //let quizBox = document.getElementById ("quiz-box"); // JS way
     
     //    quizBox.append ("<div class='question'>"); 
     //     $('.question').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
     //     $('.question').append ("<label><input type='radio' name='q1' value='a'>2010</label>")
     //     $('.question').append ("<label><input type='radio' name='q1' value='a'>2009</label>")
     //     $('.question').append ("<label><input type='radio' name='q1' value='a'>2011</label>")
     //     $('.question').append ("<label><input type='radio' name='q1' value='a'>2012</label>")
     right_answers = 0;
     quizBox = $("#quiz-box"); // Jquery
     btn = $('button');

     questions = ["What is the longest river?", "What is the smallest country in the world?", "What is the capital of New Zealand?", "where is Quebec located?", "What is the only continent with land in all four hemispheres?"]
     options = [["Nile", "Amazon", "Amazon", "Mississippi"], ["Ethiopia", "Venice", "Vatican City", "Hong-Kong"], ["Auckland", "Wellington", "Ottawa", "Kentucky"], ["Northern France", "Upper East Mexico", "Southern Taiwan", "Central Canada"], ["Africa", 'Antarctica', 'Asia', 'Greenland']]
     answers = ["Nile", "Vatican City", "Wellington", "Central Canada", 'Africa'];

     $.each(questions, function (number, question) {
          quizBox.append(`<div class='question${number + 1}'>`);
          $(`.question${number + 1}`).append(`<p class='d'> Q${number + 1}. ${question} </p>`);
          $.each(options[number], function (index, option) {
               $(`.question${number + 1}`).append(`<label><input type='radio' name='q${number + 1}' value='${option}'>${option}</label>`);
          });
     });

     btn.on('click', function () {
          $.each(questions, function (number) {
               const answer = $(`input[name=q${number + 1}]:checked`).val();
               if (answer == answers[number]) {
                    console.log(answer);
                    right_answers++;
               }
          });
     });

     btn.on('click', function () {
          $("#quiz-box").append("<h2 style='color:red'>Your score is: " + right_answers + "</h2>");
     })

});