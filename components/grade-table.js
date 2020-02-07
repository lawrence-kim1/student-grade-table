class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradeElement = noGradesElement;
    this.deleteGrade = null;
    this.editGrade = null;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (grades.length === 0) {
      document.querySelector('p').classList.remove('d-none');
    } else {
      document.querySelector('p').classList.add('d-none');
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  onEditClick(editGrade) {
    this.editGrade = editGrade;
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
    var tableDeleteData = row.appendChild(document.createElement('td'));
    tableDeleteData.classList.add('text-center');
    var tableEdit = tableDeleteData.appendChild(document.createElement('i'));
    tableEdit.classList.add('fa', 'fa-edit', 'text-info', 'mr-3');
    // tableEdit.addEventListener('click', function () {
    //   editGrade(data.id);
    // });
    var tableDelete = tableDeleteData.appendChild(document.createElement('i'));
    tableDelete.classList.add('fa', 'fa-trash', 'text-danger', 'ml-3');
    tableDelete.addEventListener('click', function () {
      deleteGrade(data.id);
    });
    tableBody.append(row);
  }
}
