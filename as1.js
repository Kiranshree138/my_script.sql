 const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ]

const studentsNames= students.map(student=>student.name);
console.log(studentsNames);


const nc=students.map(student=>({
    Name:student.name,
    Course:student.course
}));
console.log("name and course of students",nc);


const studentStatus = students.map(student => ({
    name: student.name,
    course: student.course,
    status: student.marks >= 60 ? "Pass" : "Fail"
}));
console.log(studentStatus);


const studentStrings = students.map(student => `${student.name} - ${student.course}`);
console.log(studentStrings);


const updatedStudents = students.map(student => ({
  ...student,
  marks: student.marks + 5
}));
console.log(updatedStudents);


const csStudents = students.filter(student => student.course === "Computer Science");
console.log("Computer Science Students:", csStudents);


const highScorers = students.filter(student => student.marks > 80);
console.log("High Scorers:", highScorers);


const studentsWithFeesPaid = students.filter(student => student.feesPaid);
console.log("Students with Fees Paid:", studentsWithFeesPaid);


const matureHighScorers = students.filter(student => student.age > 20 && student.marks > 70);
console.log("Mature High Scorers:", matureHighScorers);


const strugglingMechanical = students.filter(student => student.course === "Mechanical" && student.marks < 85);
console.log("Struggling Mechanical Students:", strugglingMechanical);


const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("Total Marks of All Students:", totalMarks);


const averageMarks = totalMarks / students.length;
console.log("Average Marks of All Students:", averageMarks);


const feesPaidCount = students.reduce((count, student) => count + (student.feesPaid ? 1 : 0), 0);
console.log("Number of Students with Fees Paid:", feesPaidCount);


const highestMarks = students.reduce((max, student) => Math.max(max, student.marks), 0);
console.log("Highest Marks in the Class:", highestMarks);


const groupedByCourse = students.reduce((groups, student) => {
  if (!groups[student.course]) {
    groups[student.course] = [];
  }
  groups[student.course].push(student);
  return groups;
}, {});
console.log("Students Grouped by Course:", groupedByCourse);