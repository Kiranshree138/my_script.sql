CREATE TABLE students (
  id INTEGER,
  name TEXT,
  age INTEGER,
  course TEXT);

INSERT INTO students (id, name, age, course)
VALUES (1, 'Amit Sharma', 20, 'Computer Science'),
       (2, 'Priya Singh', 22, 'Information Technology'),
       (3, 'Ravi Kumar', 19, 'Electronics'),
       (4, 'Neha Verma', 21, 'Mechanical'),
       (5, 'Sohan Lal', 23, 'Civil Engineering'),
       (6, 'Anjali Mehta', 20, 'Computer Science'),
       (7, 'Vikas Gupta', 22, 'Information Technology'),
       (8, 'Pooja Mishra', 19, 'Mechanical'),
       (9, 'Rajesh Khanna', 21, 'Electronics'),
       (10, 'Sneha Kapoor', 22, 'Civil Engineering');
       
       INSERT INTO students (id, name, age, course)
       VALUES (1, 'Amit Sharma', 20, 'Computer Science');

SELECT * FROM students
WHERE course = 'Information Technology';

UPDATE students
SET course = 'Mechanical'
WHERE id = 3;

DELETE FROM students
WHERE name = 'Ravi Kumar';



