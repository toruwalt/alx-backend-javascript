/**
 * Retrieves a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  const array = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 3, firstName: 'Serena', location: 'San Francisco' },
  ];
  return array;
}
