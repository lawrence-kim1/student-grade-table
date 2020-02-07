class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradeAverage = 0;
    for (var i = 0; i < grades.length; i++) {
      gradeAverage += grades[i].grade;
    }
    gradeAverage = gradeAverage / grades.length;
    this.pageHeader.updateAverage(gradeAverage);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      headers: {"X-Access-Token": "oRfGzNF2"},
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      headers: {"X-Access-Token": "oRfGzNF2"},
      url: "http://sgt.lfzprototypes.com/api/grades",
      data: {"name": name, "course": course, "grade": grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      method: "DELETE",
      headers: {"X-Access-Token": "oRfGzNF2"},
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }
}
