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
    if (!event.target.classList.contains('add')) {
      return;
    }
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
    if (event.target.classList.contains('add')) {
      return;
    }
    var formData = new FormData(event.target);
    var id = document.querySelector('button').getAttribute('data-id');
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    if (grade >= 0) {
      this.editGrade(id, name, course, grade);
      event.target.reset();
      document.querySelector('h3').textContent = 'Add Grade';
      document.querySelector('button').textContent = 'Add';
      document.querySelector('form').classList.add('add');
    } else {
      return;
    }
  }
}
