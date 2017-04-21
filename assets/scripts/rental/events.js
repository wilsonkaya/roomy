'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const getFormFields = require('../../../lib/get-form-fields')

const onGetRental = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.index(data)
  .then(ui.onIndexSuccess)
  .catch(ui.onIndexError)
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
    .catch(ui.onUpdateError)
}

const onDeleteRental = function (event) {
  event.preventDefault()
  let rentalId = event.target.getAttribute('data-id')
  api.destroy(rentalId)
    .then(ui.onDeleteSuccess(rentalId))
    .catch(ui.onDeleteError)
}

const onPatchRental = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  let rentalId = event.target.getAttribute('data-id')
  api.patch(data, rentalId)
    .then(api.indexMyRental)
    .then(ui.onSuccess)
    .then(ui.onPatchSuccess)
    .catch(ui.onPatchError)
}

const onPostRental = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  // console.log(data)
  api.post(data)
  .then(api.indexMyRental)
  .then(ui.onSuccess)
  .then(ui.onPostSuccess)
  .catch(ui.onPostError)
}
const onShowRentalForm = function () {
  ui.onCreateNewRental()
  $('.instructions').hide()
}
const onSingleRental = function () {
  event.preventDefault()

  let rentalId = event.target.getAttribute('data-id')
  api.show(rentalId)
  .then(ui.onSingleRentalShowSucces)
  .catch(ui.onError)
}

const onShowMaP = function () {
  event.preventDefault()
  const longitude = event.target.getAttribute('data-lon')
  const latitude = event.target.getAttribute('data-lat')
  ui.onShowMaPSuccess(longitude, latitude)
}

const rentalHandlers = () => {
  $('#getRentals').on('click', onGetMyRental)
  $('.deneme').on('submit', onGetRental)
  $('#createRentalForm').on('click', onShowRentalForm)
  $('#show').on('click', '.remove', onDeleteRental)
  $('#show').on('click', '.show-update', onShowUpdate)
  $('#show').on('submit', '.submit-update', onPatchRental)
  $('#show').on('submit', '#createRental', onPostRental)
  $('#show').on('click', '.show-rental', onSingleRental)
  $('#show').on('click', '.show-map', onShowMaP)
  // $('.remove').on('click', onDeleteRental)
  // $('.submit-update').on('click', onShowUpdate)
  // $('#create-hint').on('submit', onPostAccount);
}
module.exports = {
  rentalHandlers
}
