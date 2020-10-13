$(document).ready(function() {
   // The logic to get the input values ​​of [national language score, English score, math score, science score, social score] and calculate the total score and average score. Create.
  function score_indicate() {
     // In the variable "subject_points"
    // Substitute the array of [national language score, English score, math score, science score, social score]
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // Add [Japanese score, English score, math score, science score, social score] respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
     // Output the variable "sum" (total points) to "SUM:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);

     // In the variable "average"
    //
    let average = sum / subject_points.length;
    $("#average_indicate").text(average); // Hint! Use the length method to find the total number. (length method: Method to get the length of the string, the number of elements in the array, etc.)
  };
  function get_achievement() {
       // In the variable "averageIndicate"
      // Get the average score from id = "average_indicate" on HTML and substitute it.
      let averageIndicate = $("#average_indicate").text();
      console.log(averageIndicate)
      // If "averageIndicate" is 80 or higher, "A" is returned.
      if (averageIndicate >= 80){
        return "A";
        // If "averageIndicate" is 60 or more, "B" is returned.
      } else if (averageIndicate >= 60) {
        return "B";
      }   else if ( averageIndicate >= 40) {
       return "C";

     } else {
       return "D";
     }
   };
        // If "averageIndicate" is 40 or more, "C" is returned.
        // If "averageIndicate" is any other score, "D" is returned.
        function get_pass_or_failure(){
          let subject_points = [Number($('#national_language').val()),
                                Number($('#english').val()),
                                Number($('#mathematics').val()),
                                Number($('#science').val()),
                                Number($('#society').val())
                                ];
          // Substitute the number of subjects entered in the variable "number".
          let number = subject_points.length;
          // Assign "pass" to the variable "judge".
          let judge = "pass";
           for (let i=0; i<number; i++){
              if (subject_points[i]<60){
                judge = "fail";
                 break;
              }
            }

          // If the score of each subject entered is lower than 60 points, "Judge" is reassigned to the variable "judge" and "judge" is returned.
          // Hint! Try searching for "javascript score pass / fail logic".
          return judge;
        };
        //   // Create the final judge logic.
  function judgement() {
     // Assign the "return value of get_achievement ()" to the variable "achievement".
    let achievement = get_achievement();
    // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // When you press the "Result" (id = "alert-indicate)" button, "Your grade is $ {achievement} and $ {pass_or_failure}" is output.
$('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your grade is ${achievement}. It is a ${pass_or_failure}</label>`);

    // $('#declaration').append(`<label id ="alert-indicate "class = "alert alert-info" > Your grade is ${achievement} and ${pass_or_failure} </label>`);
  };
  // This is the process to fire "function score_indicate ()" when any of [Japanese score, English score, math score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // This is the process that "get_achievement ()" is output when the "Grade" (id = "evaluation") button is pressed.
  $('#btn-evaluation').click(function() {
     $("#evaluation").text(get_achievement());
  });
  // When you press the "Pass / Fail" (id = "btn-judge") button, "function et_pass_or_failure ()" is output.
    $('#btn-judge').click(function() {
     $("#judge").text(get_pass_or_failure());
  });
  // This is the process that "function judgment ()" is output when the "Result" (id = "btn-declaration") button is pressed.

    // Create the final judge logic.
  function judgement(){

    // Assign the "return value of get_achievement ()" to the variable "achievement".
       let achievement = get_achievement();
       // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
       let pass_or_failure = get_pass_or_failure();

       // When you press the "Result" (id = "alert-indicate)" button, "Your grade is $ {achievement} and $ {pass_or_failure}" is output.
       $('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your grade is ${achievement}. It is a ${pass_or_failure}</label>`);
 };

     // This is the process to fire "function score_indicate ()" when any of [Japanese score, English score, math score, science score, social score] is changed.
     $('#national_language, #english, #mathematics, #science, #society').change(function() {
       score_indicate();
     });
     // This is the process that "get_achievement ()" is output when the "Grade" (id = "evaluation") button is pressed.
     $('#btn-evaluation').click(function() {
       $("#evaluation").text(get_achievement());
     });
     // When you press the "Pass / Fail" (id = "btn-judge") button, "function et_pass_or_failure ()" is output.
     $('#btn-judge').click(function() {
     $("#judge").text(get_pass_or_failure());
   });
     // This is the process that "function judgment ()" is output when the "Result" (id = "btn-declaration") button is pressed.
     $('#btn-declaration').click(function() {
       $("#alert-indicate").remove();
       $("#declaration").text(judgement());
     });
   });
