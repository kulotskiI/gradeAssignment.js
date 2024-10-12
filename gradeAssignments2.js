//prompt the user to enter their grade

function yourGrade(){
    let grade = prompt("Please enter your grade: ");
    if (grade >= 90 && grade <= 100){
        allert("Excellent!");
    } else if (grade >= 80 && grade <=89){
        allert("Good!");
    } else if (grade <= 70 && grade <=79) {
        allert("Fair!");
    } else if (grade <= 70) {
        allert("Needs Improvement!");
    } else{
        allert ("Invalid Input");
    }
}