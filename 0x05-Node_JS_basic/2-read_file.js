const fs = require('fs');

function countStudents(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const rows = lines.slice(1)
      .filter((line) => line.trim() !== '')
      .map((line) => {
        const values = line.split(',');
        const rowObject = {};

        headers.forEach((header, index) => {
          rowObject[header] = values[index];
        });
        return rowObject;
      });
    let numOfStuds = 0;
    let numOfCS = 0;
    let numOfSWE = 0;
    const numOfCSList = [];
    const numOfSWEList = [];

    rows.forEach((row) => {
      numOfStuds += 1;
      Object.keys(row).forEach((key) => {
        if (row[key] === 'CS') {
          numOfCS += 1;
          numOfCSList.push(row.firstname);
        }
        if (row[key] === 'SWE') {
          numOfSWE += 1;
          numOfSWEList.push(row.firstname);
        }
      });
    });
    console.log(`Number of students: ${numOfStuds}`);
    console.log(`Number of students: ${numOfCS}. List: ${numOfCSList.join(', ')}`);
    console.log(`Number of students: ${numOfSWE}. List: ${numOfSWEList.join(', ')}`);
  });
}

module.exports = countStudents;
