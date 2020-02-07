class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createGrade = null;
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.classList.contains('add')) {
      return;
    }
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    if (grade >= 0) {
      this.createGrade(name, course, grade);
      event.target.reset();
    } else {
      return;
    }
  }
}
