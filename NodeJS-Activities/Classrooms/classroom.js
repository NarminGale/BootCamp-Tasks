let student = require('./student')

let Class = function (profName, roomNumber) {
  this.students = []
  this.profName = profName
  this.roomNumber = roomNumber

  this.addStudent = function (name, favSubject, gpa) {
    let newStudent = new student(name, favSubject, gpa)
    this.students.push(newStudent)
  }

  this.studentCount = function () {
    return this.students.length
  }
}

module.export = Class
