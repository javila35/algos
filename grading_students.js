function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const remainder = grade % 5;
    console.log(remainder);
    if (remainder === 3) return grade + (remainder - 1);
    else if (remainder === 4) return grade + (remainder - 3);
    return grade;
  });
}

console.log([75, 67, 40, 33], gradingStudents([73, 67, 38, 33]));
console.log([75], gradingStudents([74]));
