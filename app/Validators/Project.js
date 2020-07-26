'use strict'
const Antl = use('Antl')

class Project {
  get validateAll() {
    return true
  }


  get rules() {
    return {
      // validation rules

      email: 'required|email',
      password: 'required'

    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Project
