export default function getStudentsByLocale(students, locale) {
  let studentWithLocale = [];
  if (Array.isArray(students) && typeof locale === 'string') {
    studentWithLocale = students.filter((student) => student.location === locale);
  }
  return studentWithLocale;
}
