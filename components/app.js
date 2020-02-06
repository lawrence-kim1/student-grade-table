class App {
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
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      headers: {"X-Access-Token": "oRfGzNF2"},
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesSuccess
    })
  }
  createGrade(name, course, grade) {
    console.log(name);
    console.log(course);
    console.log(grade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
  }
}
