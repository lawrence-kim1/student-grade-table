class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';
    for (var i = 0; i < grades.length; i++) {
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
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tableBody = this.tableElement.querySelector('tbody');
    var row = document.createElement('tr');
    var name = row.appendChild(document.createElement('td'));
    name.textContent = data.name;
    var course = row.appendChild(document.createElement('td'));
    course.textContent = data.course;
    var grade = row.appendChild(document.createElement('td'));
    grade.textContent = data.grade;
    var tableButtonData = row.appendChild(document.createElement('td'));
    var tableButton = tableButtonData.appendChild(document.createElement('button'));
    tableButton.textContent = 'DELETE';
    tableButton.classList.add('btn btn-danger');
    tableBody.append(row);
    tableButton.addEventListener('click', function () {
      deleteGrade(data.id);
    });
  }
}
