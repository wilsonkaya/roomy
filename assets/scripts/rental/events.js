'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields')

const onGetRental = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.index(data)
  .then(ui.onIndexSuccess)
  .catch(ui.onError)
}

const onGetMyRental = function (event) {
  event.preventDefault()
  api.indexMyRental()
  .then(ui.onSuccess)
  .catch(ui.onError)
}

const onShowUpdate = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  let rentalId = event.target.getAttribute('data-id')
  api.show(rentalId)
    .then(ui.onUpdateSucces)
    .catch(ui.onError)
}

const onDeleteRental = function (event) {
  event.preventDefault()
  let rentalId = event.target.getAttribute('data-id')
  api.destroy(rentalId)
    .then(ui.onDeleteSuccess(rentalId))
    .catch(ui.onError)
}

const onPatchRental = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  let rentalId = event.target.getAttribute('data-id')
  api.patch(data, rentalId)
    .then(api.indexMyRental)
    // .then(ui.onPatchSuccess)//I need to add warnings, it doesn't exist yet
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const onPostRental = function(event){
  event.preventDefault()
  let data = getFormFields(event.target)
  console.log(data)
  api.post(data)
  .then(api.indexMyRental)
  .then(ui.onSuccess)
  // .then(ui.onPostSuccess)//I need to add warnings
  .catch(ui.onPostError)
}
const onShowRentalForm = function () {
  ui.onCreateNewRental()
}

const rentalHandlers = () => {
  $('#getRentals').on('click', onGetMyRental)
  $('.deneme').on('submit', onGetRental)
  $('#createRentalForm').on('click', onShowRentalForm)
  $('#show').on('click', '.remove', onDeleteRental)
  $('#show').on('click', '.show-update', onShowUpdate)
  $('#show').on('submit', '.submit-update', onPatchRental)
  $('#show').on('submit', '#createRental', onPostRental)
  // $('.remove').on('click', onDeleteRental)
  // $('.submit-update').on('click', onShowUpdate)
  // $('#create-hint').on('submit', onPostAccount);
}
module.exports = {
  rentalHandlers
}
