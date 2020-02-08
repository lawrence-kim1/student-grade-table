var table = document.querySelector('table');
var noGradesElement = document.querySelector('p');
var gradeTable = new GradeTable(table, noGradesElement);
var header = document.querySelector('header');
var pageHeader = new PageHeader(header);
var form = document.querySelector('form');
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
