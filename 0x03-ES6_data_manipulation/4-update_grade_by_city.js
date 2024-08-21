/*
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

 You must use filter and map combined. */

 export default function updateStudentGradeByCity(students, city, newGrades) {
  if ((students instanceof Array) && typeof(city) == "string" && (newGrades instanceof Array)) {
    const students_filtered = students.filter((students) => students.location == city);
    /* return students_filtered.map((student) => 
      student.grade = newGrades.grade,
      students.location = students.location,
      students.id = students.id
    )}; */
    return students_filtered.map((student) => {
      return {
        ...student,
        grade: newGrades.grade,
      }})
  }
}