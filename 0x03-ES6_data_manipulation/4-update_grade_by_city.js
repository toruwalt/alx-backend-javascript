export default function updateStudentGradeByCity(students, city, newGrades) {
  let updatedList;
  if ((students instanceof Array) && typeof city === 'string' && (newGrades instanceof Array)) {
    const studentsFiltered = students.filter((students) => students.location === city);

    const updatedList = studentsFiltered.map((student) => {
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });

    return updatedList;
  }
  return updatedList;
}
