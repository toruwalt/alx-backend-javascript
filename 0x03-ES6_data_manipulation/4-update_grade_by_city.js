export default function updateStudentGradeByCity(students, city, newGrades) {
  if ((students instanceof Array) && typeof(city) === "string" && (newGrades instanceof Array)) {
    const students_filtered = students.filter((students) => students.location == city);
    
    
    const updated_list = students_filtered.map((student) => {
      const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : "N/A",
        };
      })

    return updated_list;
    }
  }
