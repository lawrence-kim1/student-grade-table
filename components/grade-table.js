class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';
    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');
      var name = row.appendChild(document.createElement('td'));
      name.textContent = grades[i].name;
      var course = row.appendChild(document.createElement('td'));
      course.textContent = grades[i].course;
      var grade = row.appendChild(document.createElement('td'));
      grade.textContent = grades[i].grade;
      tableBody.append(row);
    }
  }
}
