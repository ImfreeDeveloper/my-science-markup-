import '../assets/styles/style.scss'
import './header'
// import './modal'
//
// // eslint-disable-next-line import/no-extraneous-dependencies
// import IMask from 'imask'
// import FormValidate from './validation'
//
// const formSignIn = document.getElementById('js-form-auth')
//
// if (formSignIn) {
//   // Маска для телефона
//   const element = document.getElementById('phone_id')
//   const maskOptions = {
//     mask: '+{7} (000) 000-00-00',
//   }
//
//   IMask(element, maskOptions)
//   // Валидация полей формы, обработка успешной валидации
//   // eslint-disable-next-line no-new
//   new FormValidate(formSignIn, {
//     name: {
//       presence: {
//         message: 'Поле не может быть пустым',
//       },
//       length: {
//         minimum: 3,
//         message: 'Минимум 3 символа',
//       },
//     },
//     surname: {
//       presence: {
//         message: 'Поле не может быть пустым',
//       },
//       length: {
//         minimum: 3,
//         message: 'Минимум 3 символа',
//       },
//     },
//     phone: {
//       presence: {
//         message: 'Поле не может быть пустым',
//       },
//       length: {
//         minimum: 18,
//         message: 'Номер телефона некорректный',
//       },
//     },
//     email: {
//       presence: {
//         message: 'Поле не может быть пустым',
//       },
//       email: {
//         message: 'E-mail некорректный',
//       },
//     },
//     password: {
//       presence: {
//         message: 'Поле не может быть пустым',
//       },
//       length: {
//         minimum: 5,
//         message: 'Минимум 5 символов',
//       },
//     },
//   }, (fields) => {
//     const modalSignIn = document.getElementById('js-modal-sign-in')
//     const modalLoader = modalSignIn.querySelector('.js-loader')
//     const modalSuccess = modalSignIn.querySelector('.js-success')
//
//     modalLoader.classList.remove('hidden')
//
//     setTimeout(() => {
//       modalLoader.classList.add('hidden')
//       formSignIn.classList.add('hidden')
//       modalSuccess.classList.remove('hidden')
//
//       console.log('success', fields)
//     }, 3000)
//   })
// }
