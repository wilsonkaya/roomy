'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields')

const onGetReview = function (event) {
  event.preventDefault()
  let data = event.target.getAttribute('data-id')
  let id  = {
    rentals: data
  }
  api.index(id)
  .then(ui.onIndexSuccess)
  .catch(ui.onIndexError)
}
//
// const onGetMyRental = function (event) {
//   event.preventDefault()
//   api.indexMyRental()
//   .then(ui.onSuccess)
//   .catch(ui.onError)
// }
//
// const onShowUpdate = function(event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   let rentalId = event.target.getAttribute('data-id')
//   api.show(rentalId)
//     .then(ui.onUpdateSucces)
//     .catch(ui.onUpdateError)
// }
//
// const onDeleteRental = function (event) {
//   event.preventDefault()
//   let rentalId = event.target.getAttribute('data-id')
//   api.destroy(rentalId)
//     .then(ui.onDeleteSuccess(rentalId))
//     .catch(ui.onDeleteError)
// }
//
// const onPatchRental = function(event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   let rentalId = event.target.getAttribute('data-id')
//   api.patch(data, rentalId)
//     .then(api.indexMyRental)
//     .then(ui.onSuccess)
//     .then(ui.onPatchSuccess)
//     .catch(ui.onPatchError)
// }
//
// const onPostRental = function(event){
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   api.post(data)
//   .then(api.indexMyRental)
//   .then(ui.onSuccess)
//   .then(ui.onPostSuccess)
//   .catch(ui.onPostError)
// }
// const onShowRentalForm = function () {
//   ui.onCreateNewRental()
// }
// const onSingleRental = function () {
//   event.preventDefault()
//
//   let rentalId = event.target.getAttribute('data-id')
//   api.show(rentalId)
//   .then(ui.onSingleRentalShowSucces)
//   .catch(ui.onError)
// }

const reviewlHandlers = () => {
  $('#show').on('click', '.show-rental', onGetReview)

}
module.exports = {
  reviewlHandlers
}
