'use strict'
const showRentalTemplate = require('../templates/rental-listing.handlebars')
const showAllRentalsTemplate = require('../templates/rental-index-listing.handlebars')
const updateRentalTemplate = require('../templates/update-rental-listing.handlebars')
const createRentalForm = require('../templates/create-rental-form.handlebars')
const onSuccess = (data) => {
  let showRentalsHtml = showRentalTemplate({ rentals: data.rentals })
  $('#show').html(showRentalsHtml)
}

const onIndexSuccess = (data) => {
  let showRentalsHtml = showAllRentalsTemplate({ rentals: data.rentals })
  $('#show').html(showRentalsHtml)
}

const onDeleteSuccess = function (rentalId) {
  $('[data-id =' + rentalId + ']').remove()
}
//
//
const onPatchSuccess = (data, rentalId) => {
  // $(".warning-update-data").text("Succesfull !");
  // setTimeout(function() {$('.kapat').modal('hide');}, 1250);
  // setTimeout(function() {$('.warning-update-data').text("");}, 1250);
  // console.log(accountId)

  // setTimeout(function() {$('[data-id ='+ accountId +']').html(showBooksHtml);}, 1300);
// {$('[data-id ='+ accountId +']').replaceWith(showBooksHtml)

}

const onPostSuccess = function (data) {

}

// const onPostError = function() {
//   $("#warning-create-new-data").text("Please fill in !");
// };

const onUpdateSucces = (data) => {
  console.log(data)
  let updateRentalHtml = updateRentalTemplate({rental: data.rental})
  $('#show').html(updateRentalHtml)
}

const onCreateNewRental = () => {
  let createRentalFormHtml = createRentalForm()
  $('#show').html(createRentalFormHtml)
}
module.exports = {
  onSuccess,
  // onError,
  onDeleteSuccess,
  onUpdateSucces,
  onPatchSuccess,
  onIndexSuccess,
  onCreateNewRental,
  onPostSuccess
  // onPostError
}
