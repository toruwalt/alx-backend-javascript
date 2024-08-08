export default function createEmployeesObject(departmentName, employees) {
  const x = [];
  for (const employee of employees) {
    x.push(employee);
  }

  return {
    [departmentName]: x,
  };
}
