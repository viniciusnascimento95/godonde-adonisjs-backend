'use strict'

const Antl = use('Antl')

class Task {
  get rules() {
    return {
      task: 'required',
      due_date: 'date'
      // validation rules
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Task
