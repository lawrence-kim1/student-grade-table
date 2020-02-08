class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.editField = null;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade, this.editField);
    }
    if (grades.length === 0) {
      this.noGradesElement.classList.remove('d-none');
    } else {
      this.noGradesElement.classList.add('d-none');
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  onEditClick(editField) {
    this.editField = editField;
  }
  renderGradeRow(data, deleteGrade, editField) {
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
    tableEdit.addEventListener('click', function () {
      editField(data.id, name, course, grade);
    });
    var tableDelete = tableDeleteData.appendChild(document.createElement('i'));
    tableDelete.classList.add('fa', 'fa-trash', 'text-danger', 'ml-3');
    tableDelete.addEventListener('click', function () {
      deleteGrade(data.id);
    });
    tableBody.append(row);
  }
}
