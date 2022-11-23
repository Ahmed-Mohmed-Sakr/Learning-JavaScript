const gradeCalculator = (score, totalScore) => {
  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Arguments must be numbers");
  }

  const grade = (score / totalScore) * 100;
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

try {
  const studentOne = gradeCalculator(19.5, 20);
  console.log(studentOne);
} catch (e) {
  console.log(e.message);
}
