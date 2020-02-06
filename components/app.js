class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesSuccess
    })
  }
  start() {
    this.getGrades();
  }
}
