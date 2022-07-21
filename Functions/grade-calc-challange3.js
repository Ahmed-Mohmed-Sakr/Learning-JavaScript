let gradeCalculator = function (score, totalScore) {
  let grade = (score / totalScore) * 100;
  let letterGrade = "";

  if (grade >= 90) {
    letterGrade = "A";
  } else if (grade >= 80) {
    letterGrade = "B";
  } else if (grade >= 70) {
    letterGrade = "C";
  } else if (grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got an ${letterGrade} (${grade}%)!`;
};

let studentOne = gradeCalculator(19, 20);
console.log(studentOne);
