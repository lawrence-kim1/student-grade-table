class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.createGrade = null;
    this.editGrade = null;
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.formElement.addEventListener('submit', this.handleEdit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
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
  onEditSubmit(editGrade) {
    this.editGrade = editGrade;
  }
  handleEdit(event) {
    event.preventDefault();
    // var name = document.getElementById('name');
    // name.textContent = name.parentElement.parentElement.firstElementChild.textContent;
    // var course = document.getElementById('course');
    // course.textContent = course.parentElement.parentElement.firstElementChild.nextElementSibling.textContent;
    // var grade = document.getElementById('grade');
    // grade.textContent = grade.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    // this.editGrade(name, course, grade);
  }
}
