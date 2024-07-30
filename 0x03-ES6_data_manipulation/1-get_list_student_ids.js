export default function (Students) {
  let stud = [];
  if (Students instanceof Array) {
    stud = Students.map((Student) => Student.id);
  }
  return stud;
}
