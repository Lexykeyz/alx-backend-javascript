ES6 Data Manipulation
This project contains tasks for learning to manipulate data in ECMAScript 2015 (ES6).

Tasks To Complete
 0. Basic list of objects
0-get_list_students.js contains a script that exports a function named getListStudents with the following requirements:

Returns an array of objects.
Each object should have three attributes: id (Number), firstName (String), and location (String).
The array contains the following students in the order they're listed:
Guillaume, id: 1, in San Francisco.
James, id: 2, in Columbia.
Serena, id: 5, in San Francisco.
 1. More mapping
1-get_list_student_ids.js contains a script that exports a function named getListStudentIds with the following requirements:

Returns an array of ids from a list of object.
This function is taking one argument which is an array of objects - and this array is in the same format as the return value of getListStudents from the previous task.
If the argument is not an array, the function returns an empty array.
You must use the map function on the array.
 2. Filter
2-get_students_by_loc.js contains a script that exports a function named getStudentsByLocation with the following requirements:

Returns an array of objects who are located in a specific city.
It should accept a list of students (from getListStudents) and a city (string) as parameters.
You must use the filter function on the array.
