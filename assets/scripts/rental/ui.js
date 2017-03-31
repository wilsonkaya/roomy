'use strict'
const showRentalTemplate = require('../templates/rental-listing.handlebars')
const showAllRentalsTemplate = require('../templates/rental-index-listing.handlebars')
const updateRentalTemplate = require('../templates/update-rental-listing.handlebars')
const createRentalForm = require('../templates/create-rental-form.handlebars')
const showSingleRental = require('../templates/show-single-rental.handlebars')

const onIndexSuccess = (data) => {
  if (data.rentals.length === 0) {
    $('.clean-sign').text('')
  alertify.error('There are no rentals')
  } else {
    $('.clean-sign').text('')
    let showRentalsHtml = showAllRentalsTemplate({ rentals: data.rentals })
    $('#show').html(showRentalsHtml)
  }
}

const onIndexError = function () {

}

const onSuccess = (data) => {
  if (data.rentals.length === 0) {
  // $('.clean-shows').text('')
    $('.clean-sign').text('')
    alertify.error("You don't have rentals")
  } else {
    $('.clean-sign').text('')
    let showRentalsHtml = showRentalTemplate({ rentals: data.rentals })
    $('#show').html(showRentalsHtml)
  }
}

const onError = function () {

}

const onDeleteSuccess = function (rentalId) {
  $('[data-id =' + rentalId + ']').remove()
}
const onDeleteError = function () {

}
const onPatchSuccess = () => {

}
const onPatchError = () => {
  alertify.error('Please fill in the forms with right type of data')
}

const onPostSuccess = function () {

}
const onPostError = function () {
  alertify.error('Please fill in the forms with right type of data')
}

const onUpdateSucces = (data) => {
  let updateRentalHtml = updateRentalTemplate({rental: data.rental})
  $('#show').html(updateRentalHtml)
}

const onUpdateError = function() {

}

const onSingleRentalShowSucces = (data) => {
  let showRentalHtml = showSingleRental({rental: data.rental})
  $('#show').html(showRentalHtml)
}
const onCreateNewRental = () => {
  $('.clean-sign').text('')
  let createRentalFormHtml = createRentalForm()
  $('#show').html(createRentalFormHtml)
}
module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onDeleteError,
  onUpdateSucces,
  onUpdateError,
  onPatchSuccess,
  onPatchError,
  onIndexSuccess,
  onIndexError,
  onCreateNewRental,
  onPostSuccess,
  onPostError,
  onSingleRentalShowSucces
}
