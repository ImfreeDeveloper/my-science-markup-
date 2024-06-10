/* eslint-disable */
import _ from 'underscore'
import validate from 'validate.js'

export default class FormValidate {

  selectorsInput = 'input[name], select[name]'
  wrapFieldClass = 'form-field'
  messagesErrorClass = 'form-field__messages'
  formFieldError = 'has-error'
  formFieldSuccess = 'has-success'
  optionsValidate = { fullMessages: false }

  constructor(formEl, constraints, validSuccess) {
    this.form = formEl
    this.constraints = constraints
    this.validSuccess = validSuccess
    this.errors = {}

    this.init()
  }

  init() {
    const self = this

    this.form.addEventListener('submit', e => {
      e.preventDefault()

      this.handleFormSubmit()
    })

    const inputs = this.form.querySelectorAll('input, textarea, select')

    for (let i = 0; i < inputs.length; ++i) {
      inputs.item(i).addEventListener('change', function () {
        const errors = validate(self.form, self.constraints, self.optionsValidate) || {}

        self.showErrorsForInput(this, errors[this.name])
      })
    }
  }

  handleFormSubmit() {
    this.errors = validate(this.form, this.constraints, this.optionsValidate)

    this.showErrors()

    if (!this.errors) {
      this.validSuccess(this.getFields())
    }
  }

  getFields() {
    const fields = []

    _.each(this.form.querySelectorAll(this.selectorsInput), (input) => {
      fields.push({[input.name]: input.value })
    })

    return fields
  }

  showErrors() {
    _.each(this.form.querySelectorAll(this.selectorsInput), (input) => {
      this.showErrorsForInput(input, this.errors && this.errors[input.name])
    })
  }

  showErrorsForInput(input, errors) {
    const formField = this.closestParent(input.parentNode, this.wrapFieldClass)
    const messages = formField.querySelector(`.${this.messagesErrorClass}`)

    this.resetFormGroup(formField)

    if (errors) {
      formField.classList.add(this.formFieldError)

      _.each(errors, (error) => {
        this.addError(messages, error)
      })
    } else {
      formField.classList.add(this.formFieldSuccess)
    }
  }

  closestParent(child, className) {
    if (!child || child == document) {
      return null
    }
    if (child.classList.contains(className)) {
      return child
    }
    return this.closestParent(child.parentNode, className)
  }

  resetFormGroup(formField) {
    formField.classList.remove(this.formFieldError)
    formField.classList.remove(this.formFieldSuccess)

    _.each(formField.querySelectorAll('.help-block.error'), (el) => {
      el.parentNode.removeChild(el)
    })
  }

  addError(messages, error) {
    const block = document.createElement('p')

    block.classList.add('help-block')
    block.classList.add('error')
    block.innerText = error

    messages.appendChild(block)
  }
}
