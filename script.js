const students = [
    { name: "Amit Sharma", age: 19, course: "B.Tech" },
    { name: "Priya Verma", age: 22, course: "MCA" },
    { name: "Rohit Gupta", age: 20, course: "BCA" },
    { name: "Neha Singh", age: 23, course: "B.Sc" },
    { name: "Karan Patel", age: 18, course: "B.Com" }
];

let isLightBackground = true;
let showingFiltered = false;

function createTable(data) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    
    const table = document.createElement('table');
    
    // Create header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    ['Name', 'Age', 'Course'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    const tbody = document.createElement('tbody');
    
    data.forEach(student => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);
        
        const ageCell = document.createElement('td');
        ageCell.textContent = student.age;
        row.appendChild(ageCell);
        
        const courseCell = document.createElement('td');
        courseCell.textContent = student.course;
        row.appendChild(courseCell);
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

function toggleBackgroundColor() {
    const body = document.body;
    if (isLightBackground) {
        body.style.backgroundColor = '#e0f7fa';
    } else {
        body.style.backgroundColor = '#f8f9fa';
    }
    isLightBackground = !isLightBackground;
}

function toggleTableVisibility() {
    const table = document.querySelector('table');
    if (table) {
        table.classList.toggle('hidden');
    }
}

function filterStudentsByAge() {
    const filterBtn = document.getElementById('filterAgeBtn');
    
    if (showingFiltered) {
        createTable(students);
        filterBtn.textContent = 'Show Age > 20';
        showingFiltered = false;
    } else {
        const filteredStudents = students.filter(student => student.age > 20);
        createTable(filteredStudents);
        filterBtn.textContent = 'Show All Students';
        showingFiltered = true;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createTable(students);
    
    document.getElementById('bgColorBtn').addEventListener('click', toggleBackgroundColor);
    document.getElementById('toggleTableBtn').addEventListener('click', toggleTableVisibility);
    document.getElementById('filterAgeBtn').addEventListener('click', filterStudentsByAge);
});