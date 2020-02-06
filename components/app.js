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
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
  start() {
    this.getGrades();
  }
}
