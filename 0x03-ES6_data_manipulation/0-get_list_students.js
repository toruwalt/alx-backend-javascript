//Create a function named getListStudents that returns an array of objects.

//Each object should have three attributes: id (Number), firstName (String), and location (String).

//The array contains the following students in order:

//Guillaume, id: 1, in San Francisco
//James, id: 2, in Columbia
//Serena, id: 5, in San Francisco

export default function getListStudents () {
    const array = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 3, firstName: 'Serena', location: 'San Francisco' }
    ];

    return array;
};